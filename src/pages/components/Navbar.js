import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-transparent" style={{ backgroundColor: "transparent" }}>
        <div className="container-xl">
          <Link className="navbar-brand" href="/">
            <Image src="/img/brand.jpg" className="img-brand" width={500} height={500} loading="lazy" alt="brand image" />
            <span className="ms-3">It's me</span>
          </Link>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${router.pathname == "/" ? "active" : ""}`} href="/" aria-current="beranda">
                  Beranda
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${router.pathname == "/tentang" ? "active" : ""}`} href="/tentang">
                  Tentang
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${router.pathname == "/portofolio" ? "active" : ""}`} href="/porofolio">
                  Portofolio
                </Link>
              </li>
            </ul>
            <button className="btn btn-primary px-4" style={{ borderRadius: 20 }}>
              Chat Me
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
