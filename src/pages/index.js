import Image from "next/image";
import { Inter } from "next/font/google";
import { Card, CardBody, CardText, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiFacebook, mdiGithub, mdiInstagram, mdiLinkedin } from "@mdi/js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const AnimatedText1 = () => {
    return (
      <Typist cursor={{ show: false }}>
        <span>Contoh Teks yang Akan Diketik</span>
        <Typist.Backspace count={40} delay={5000} />
        {/* Menambahkan jeda 5 detik setelah setiap iterasi selesai */}
      </Typist>
    );
  };
  return (
    <main>
      <section>
        <div className="hero" id="hero-container">
          {/* <HeroShapes /> */}
          {/* <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div> */}
          <div className="medsos">
            <div className="medsos-link text-center">
              <Link href="https://www.instagram.com/piyambaan_/" target="__blank" className="ig">
                <Icon path={mdiInstagram} size={1} />
              </Link>
            </div>
            <div className="medsos-link text-center">
              <Link href="https://github.com/ilydev-openproject" target="__blank" className="github">
                <Icon path={mdiGithub} size={1} />
              </Link>
            </div>
            <div className="medsos-link text-center">
              <Link href="https://www.facebook.com/profile.php?id=100005286256690" target="__blank" className="fb">
                <Icon path={mdiFacebook} size={1} />
              </Link>
            </div>
            <div className="medsos-link text-center">
              <Link href="https://www.linkedin.com/in/ilyas-maazib-2909a021b/" target="__blank" className="li">
                <Icon path={mdiLinkedin} size={1} />
              </Link>
            </div>
          </div>
          <div className="container-xl">
            <div className="h-100">
              <Row className="d-flex justify-content-center align-items-center">
                <Col sm="12" md="4" lg="6">
                  <h3>
                    Halo ManTeman 👋🏼, Saya <b style={{ color: "#40C9BD" }}> Ilyas Maazib</b>
                  </h3>
                  <h1>
                    I Have Some
                    <div className="s1">
                      <span className="span1">Frontend</span>
                      <span className="span2">Backend</span>
                      <span className="span3">Page SEO</span>
                    </div>
                    Skills.
                  </h1>
                  {/* <p style={{ color: "#9e9e9e" }}>Being yourself means not prioritizing others' needs over expressing your authentic self. It involves embracing your true nature, allowing your actions to reflect who you are. Crucially, because you are authentic, and you act like you.</p> */}
                </Col>
                <Col sm="12" md="4" lg="6">
                  <Image width={500} height={500} style={{ width: "100%", height: "100%" }} src="/img/K3B.png" />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Container id="about">
          <Row className="g-3">
            <Col sm="6" md="6" lg="6  ">
              <Image src="/img/ily.png" width={500} height={500} style={{ objectFit: "cover", objectPosition: "top center" }} />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
