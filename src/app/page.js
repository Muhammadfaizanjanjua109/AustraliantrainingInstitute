import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Common/Navbar";
import Main from "@/Common/Main";
import Footer from "@/Common/Footer";
import headerImage from '../../src/assets/images/hero-services-img.png'
export default function Home() {
  return (
    <>
      <Navbar />
      <section id="hero" className="hero section">
      <div className="hero-bg bg-light">
      
      </div>
      <div className="container text-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 data-aos="fade-up" className="aos-init aos-animate">Welcome to <span>Auswide Training Institute</span></h1>
          <p data-aos="fade-up" data-aos-delay="100" className="aos-init aos-animate">Specialise in providing comprehensive training programs<br/></p>
          <div className="d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <a href="#about" className="btn-get-started">Get Started</a>
            <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
          </div>
          <Image src={headerImage} width={350} className="img-fluid  aos-init aos-animate w-50% h-50%" alt="" data-aos="zoom-out" data-aos-delay="300" />
        </div>
      </div>

    </section>

      <Main />

      <Footer />

    </>
  );
}
