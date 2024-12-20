"use client"
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Modal {
    swModal: () => void;
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Lütfen isminizi giriniz.'),
    email: Yup.string().email('Geçerli bir e-posta giriniz.').required('E-posta adresi zorunludur.'),
    message: Yup.string().required('Bir mesaj yazmalısınız.')
});

const OpenToHire: React.FC<Modal> = ({ swModal }) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // Hata mesajı state'i

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setErrorMessage(null); // Önceki hata mesajını temizle
            try {
                const response = await fetch('/api/sendMail', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values),
                });
                const data = await response.json(); // JSON verisini al

                if (response.ok) {
                    alert('Mesajınız başarıyla gönderildi!');
                    resetForm();
                    swModal();
                } else {
                    // API'den gelen hata mesajını state'e aktar
                    setErrorMessage(data.error || 'Gönderimde bir hata oluştu.');
                }
            } catch (error) {
                console.error(error);
                setErrorMessage('Mail gönderiminde bir hata oluştu.');
            }
        },
    });

    useEffect(() => {
        if (typeof document === "undefined") return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                swModal();
            } else if (e.key === 'Enter' && !e.shiftKey) {
                if (formik.isValid && !formik.isSubmitting) {
                    e.preventDefault();
                    formik.handleSubmit();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [formik.isValid, formik.isSubmitting, swModal]); // 'handleKeyDown' artık bağımlılık değil

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={swModal}
        >
            <div
                className="bg-black text-white p-6 w-full max-w-md rounded shadow-lg relative"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="bg-[#E84A4A] bg-opacity-[8%] text-white p-6 w-full max-w-md rounded shadow-lg relative">
                    <h2 className="text-lg font-bold mb-2 bigbold">OPEN FOR HIRE</h2>
                    <p className="text-[16px] iceregular text-gray-300 mb-4">
                        I WOULD LOVE TO HEAR ABOUT YOUR PROJECTS!
                    </p>

                    {errorMessage && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                            {errorMessage}
                        </div>
                    )}

                    <form onSubmit={formik.handleSubmit}>
                        <div className="border border-[#3e1c1c] p-4 mb-4">
                            <label className="block text-red-500 bigbold uppercase text-sm mb-1">
                                How should I call you?
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="YOUR NAME"
                                className="w-full bg-black text-gray-200 iceregular p-2 mb-2 border border-[#3e1c1c]"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name && (
                                <div className="text-red-400 text-sm mb-4">{formik.errors.name}</div>
                            )}

                            <label className="block text-red-500 bigbold uppercase text-sm mb-1">
                                Sending from
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="mail@emrelutfi.com"
                                className="w-full bg-black text-gray-200 iceregular p-2 mb-2 border border-[#3e1c1c]"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className="text-red-400 text-sm mb-4">{formik.errors.email}</div>
                            )}

                            <label className="block text-red-500 bigbold uppercase text-sm mb-1">
                                Transmitted data
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Hi, I write to you about..."
                                className="w-full bg-black max-h-[450px] min-h-[100px] text-gray-200 iceregular p-2 border border-[#3e1c1c]"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                            />
                            {formik.touched.message && formik.errors.message && (
                                <div className="text-red-400 text-sm">{formik.errors.message}</div>
                            )}
                        </div>

                        <div className="flex lg:flex-row gap-4 flex-col lg:space-x-4 w-full">
                            <button
                                type="submit"
                                className="bg-basered tracking-wider whitespace-nowrap w-full opacity-70 hover:opacity-100 text-black px-4 py-2 uppercase text-[18px] bigbold"
                            >
                                Send Message [Enter]
                            </button>
                            <button
                                type="button"
                                className="bg-black tracking-wide w-full hover:bg-gray-800 border opacity-70 hover:opacity-100 border-[#262626] text-white px-4 py-2 uppercase text-[18px] bigbold"
                                onClick={swModal}
                            >
                                Discard [Esc]
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OpenToHire;
