import { NextResponse, NextRequest } from 'next/server';

import nodemailer from 'nodemailer';


interface LastSentTimestamps {
    [key: string]: number;
}
const lastSentTimestamps: LastSentTimestamps = {};

export async function POST(request: NextRequest) {

    try {
        const ip = request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for') || 'unknown';

        const lastSent : number = lastSentTimestamps[ip] || 0;
        const now = Date.now();

        // 1 dakika = 60.000 ms
        const oneMinute = 300000;

        if (now - lastSent < oneMinute) {
            // Son 1 dakika içinde mail göndermiş
            return NextResponse.json({ error: 'wait a 1 minute' }, { status: 429 });
        }

        const { name, email, message } = await request.json();

        const transporter = nodemailer.createTransport({
            host: 'smtp.yandex.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.MAIL_USER,
            to: process.env.MAIL_USER,
            subject: `Yeni İletişim Formu: ${name}`,
            text: `
            Gönderen: ${name} <${email}>

            Mesaj:
            ${message}
            `,
            replyTo: email,
        };

        await transporter.sendMail(mailOptions);

        // Başarılı gönderim sonrası timestamp güncelle
        lastSentTimestamps[ip] = now;

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Mail gönderilemedi.' }, { status: 500 });
    }
}
