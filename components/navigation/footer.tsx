import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <footer className="bg-light py-3">
      <Container>
        <div className="text-center text-muted my-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} Project Management Tool.</p>
        </div>
      </Container>
    </footer>
  );
}
