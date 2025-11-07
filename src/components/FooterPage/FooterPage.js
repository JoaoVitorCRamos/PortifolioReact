import Container from "react-bootstrap/Container";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./FooterPage.css";

export const FooterPage = () => {
  return (
    <footer className=" text-light py-4 mt-5 footer-page">
      <Container className="text-center">
        <h5 className="fw-bold mb-2">João Vitor Costa</h5>
        <p className="mb-1">Desenvolvedor Front-End • Projetos Web</p>

        <div className="d-flex justify-content-center gap-4 mt-3 fs-4">
          <a
            href="https://github.com/JoaoVitorCRamos"
            target="_blank"
            rel="noreferrer"
            className="text-light"
            title="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-vitor-costa-383519271/"
            target="_blank"
            rel="noreferrer"
            className="text-light"
            title="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            href="mailto:joao.v.c11@hotmail.com"
            className="text-light"
            title="E-mail"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>

          <a
            href="https://wa.me/5548998616619"
            target="_blank"
            rel="noreferrer"
            className="text-light"
            title="WhatsApp"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>

        <p className="mt-4 mb-0 small text-secondary">
          © {new Date().getFullYear()} João V. Costa — Todos os direitos
          reservados
        </p>
      </Container>
    </footer>
  );
};
