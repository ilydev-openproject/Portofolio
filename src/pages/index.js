import Image from "next/image";
import { Inter } from "next/font/google";
import { Card, CardBody, CardText, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiEye, mdiEyeOutline, mdiFacebook, mdiGithub, mdiInstagram, mdiLinkedin, mdiWhatsapp } from "@mdi/js";

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
                <Col sm="12" md="6" lg="6">
                  <h2>Hello 👋🏼, Ilyas here</h2>
                  <h1>
                    <div className="s1">
                      <span className="span1">Web Developer</span>
                      <span className="span2">Digital Marketer</span>
                      <span className="span3">Tech Enthusiast</span>
                    </div>
                  </h1>
                  <p>Being yourself means not prioritizing others' needs over expressing your authentic self. It involves embracing your true nature, allowing your actions to reflect who you are. Crucially, because you are authentic, and you act like you.</p>
                </Col>
                <Col sm="12" md="6" lg="6">
                  <Image width={500} height={500} style={{ width: "100%", height: "100%" }} src="/img/hero.png" />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Container id="about">
          <Row className="g-3">
            <Col sm="12" md="6" lg="6  ">
              <div className="images">
                <div className="knop" id="kn1"></div>
                <div className="knop" id="kn2"></div>
                <div className="hoverme">
                  <span>Hover me</span>
                  <Icon className="ms-2" path={mdiEyeOutline} size={1}></Icon>
                </div>
                <Image src="/img/ily.png" width={500} height={500} style={{ objectFit: "cover", objectPosition: "top center" }} />
              </div>
            </Col>
            <Col sm="12" md="6" lg="6  ">
              <div className="header py-2">
                <h2>About Me</h2>
              </div>
              <p>
                Hello, I'm Ahmad Ilyas Maazib! I'm just an ordinary web developer with a little ability in various things related to web development. I love creating attractive and functional designs for websites, as well as optimizing them to be easily found in search engines. Some of the tools and technologies that I master include Figma, MySQL, CodeIgniter, Bootstrap, Next Js and many more. I enjoy collaborating with teams to achieve desired results. So, if you need help with a web project,
                don't hesitate to contact me.
              </p>
              <div className="btngroup py-5">
                <Link href="" className="btn d-flex justify-content-center align-items-center ">
                  <Icon className="me-2" style={{ color: "#fff" }} path={mdiWhatsapp} size={1} />
                  <span>Chat Me</span>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <div className="wrapper-tech text-center">
          <div className="tech1 mt-5 mb-4 d-flex justify-content-end align-items-center" data-aos="fade-up" data-aos-duration="800">
            <div className="slidert gt1 d-flex justify-content-end align-items-center">
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/figma.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>Figma</h4>
                  <span>UI/UX Design</span>
                </div>
              </div>
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/flutter.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>Flutter</h4>
                  <span>Mobile Develeopment</span>
                </div>
              </div>
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/laravel.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>Laravel</h4>
                  <span>PHP Framework</span>
                </div>
              </div>
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/react.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>React Js</h4>
                  <span>Front-End Development</span>
                </div>
              </div>
            </div>
            <div className="slidert gt2 d-flex justify-content-start align-items-center">
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/figma.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>Figma</h4>
                  <span>UI/UX Design</span>
                </div>
              </div>
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/flutter.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>Flutter</h4>
                  <span>Mobile Develeopment</span>
                </div>
              </div>
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/laravel.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>Laravel</h4>
                  <span>PHP Framework</span>
                </div>
              </div>
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/react.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>React Js</h4>
                  <span>Front-End Development</span>
                </div>
              </div>
            </div>
            <div className="slidert gt3 d-flex justify-content-start align-items-center">
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/figma.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>Figma</h4>
                  <span>UI/UX Design</span>
                </div>
              </div>
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/flutter.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>Flutter</h4>
                  <span>Mobile Develeopment</span>
                </div>
              </div>
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/laravel.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>Laravel</h4>
                  <span>PHP Framework</span>
                </div>
              </div>
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/react.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>React Js</h4>
                  <span>Front-End Development</span>
                </div>
              </div>
            </div>
          </div>

          <div className="tech2 mb-5 pt-3 d-flex justify-content-start align-items-center" data-aos="fade-up" data-aos-duration="1500">
            <div className="sliderb gt1 d-flex justify-content-start align-items-center">
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/figma.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>Figma</h4>
                  <span>UI/UX Design</span>
                </div>
              </div>
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/flutter.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>Flutter</h4>
                  <span>Mobile Develeopment</span>
                </div>
              </div>
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/laravel.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>Laravel</h4>
                  <span>PHP Framework</span>
                </div>
              </div>
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/react.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>React Js</h4>
                  <span>Front-End Development</span>
                </div>
              </div>
            </div>
            <div className="sliderb gt2 d-flex justify-content-start align-items-center">
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/figma.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>Figma</h4>
                  <span>UI/UX Design</span>
                </div>
              </div>
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/flutter.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>Flutter</h4>
                  <span>Mobile Develeopment</span>
                </div>
              </div>
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/laravel.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>Laravel</h4>
                  <span>PHP Framework</span>
                </div>
              </div>
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/react.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>React Js</h4>
                  <span>Front-End Development</span>
                </div>
              </div>
            </div>
            <div className="sliderb gt3 d-flex justify-content-start align-items-center">
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/figma.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>Figma</h4>
                  <span>UI/UX Design</span>
                </div>
              </div>
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/flutter.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>Flutter</h4>
                  <span>Mobile Develeopment</span>
                </div>
              </div>
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/laravel.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>Laravel</h4>
                  <span>PHP Framework</span>
                </div>
              </div>
              <div className="tech-item mx-3 d-flex justify-content-start align-items-center">
                <Image src="/img/tech/react.webp" alt="agcenna assets" className="img-fluid" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                {/* <img src=".." className="img-fluid" alt="" /> */}
                <div className="gtext text-start">
                  <h4>React Js</h4>
                  <span>Front-End Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
