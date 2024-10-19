import Container from "react-bootstrap/Container";

import Version from "./version";

export default function Footer() {
  return (
    <footer className="bg-light py-1">
      <Container>
        <div className="text-center text-muted my-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} Project Management Tool.</p>
          <Version />
        </div>
      </Container>
    </footer>
  );
}
