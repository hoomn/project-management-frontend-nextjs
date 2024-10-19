import Link from "next/link";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <header>
      <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
        <Container>
          <Link href="/" className="navbar-brand">
            PM
          </Link>
        </Container>
      </Navbar>
    </header>
  );
}
