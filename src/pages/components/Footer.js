import { mdiFacebook, mdiGithub, mdiInstagram, mdiLinkedin } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <footer>
        <Container>
          <div className="footbody d-flex" style={{ width: "100%" }}>
            <div className="frstcol" style={{ width: "30%" }}>
              <div className="brand">
                <h2>ILYMZB</h2>
                <p>I'm Act Like Me</p>
              </div>
              <div className="footmedsos mt-5 pt-5 d-flex">
                <div className="medsos-link text-center" style={{ backgroundColor: "#2EC5D1" }}>
                  <Link href="https://www.instagram.com/piyambaan_/" target="__blank" className="ig">
                    <Icon path={mdiInstagram} size={1} style={{ color: "#fff" }} />
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
            </div>
            <div className="medlink mx-auto" style={{ width: "60%" }}>
              <Row className="d-flex">
                <Col lg={4}>
                  <div className="header">
                    <h6>Fast Link</h6>
                  </div>
                  <div className="lnkgroup">
                    <div className="item">
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </div>
                    <div className="item">
                      <Link href="/">
                        <span>About</span>
                      </Link>
                    </div>
                    <div className="item">
                      <Link href="/">
                        <span>Portofolio</span>
                      </Link>
                    </div>
                    <div className="item">
                      <Link href="/">
                        <span>Contact</span>
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="header">
                    <h6>Portofolio</h6>
                  </div>
                  <div className="lnkgroup">
                    <div className="item">
                      <Link href="/">
                        <span>UI Design</span>
                      </Link>
                    </div>
                    <div className="item">
                      <Link href="/">
                        <span>Frontend</span>
                      </Link>
                    </div>
                    <div className="item">
                      <Link href="/">
                        <span>Backend</span>
                      </Link>
                    </div>
                    <div className="item">
                      <Link href="/">
                        <span>Ads</span>
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="header">
                    <h6>Contact</h6>
                  </div>
                  <div className="lnkgroup">
                    <div className="item">
                      <Link href="/">
                        <span>Fcebook</span>
                      </Link>
                    </div>
                    <div className="item">
                      <Link href="/">
                        <span>LinkedIn</span>
                      </Link>
                    </div>
                    <div className="item">
                      <Link href="/">
                        <span>Instagram</span>
                      </Link>
                    </div>
                    <div className="item">
                      <Link href="/">
                        <span>GitHub</span>
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="motto" style={{ width: "20%" }}>
              <div className="mottobody me-auto">
                <h3>Motto</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, soluta perspiciatis accusamus saepe ipsum odio consequuntur provident beatae et. Quibusdam iste nemo dicta porro pariatur perspiciatis et ut possimus sint?</p>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
