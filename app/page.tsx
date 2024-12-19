import Image from "next/image";
import Main from "@/app/components/Main";
import TopBar from "@/app/components/TopBar";
import Container from "@/app/components/Container";
import './css/extra.css'

export default function Home() {
  return (
      <div className={'flex flex-col'}>
          <Container>
              <TopBar/>
          </Container>
          <Main/>
      </div>
  );
}
