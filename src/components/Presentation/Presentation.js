import "./Presentation.css";

export const Presentation = () => {
  return (
    <section className="container-fluid d-flex align-items-center py-5 bg-light presentation-section">
      <div className="row w-100 gy-4">
        {/* Coluna da imagem */}
        <div className="col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
          <img
            src={process.env.PUBLIC_URL + "/images/presentation.jpg"}
            className="img-fluid"
            alt="Foto de apresentação"
          />
        </div>

        {/* Coluna do texto */}
        <div className="col-md-6 d-flex flex-column justify-content-center text-start px-5 presentation-text">
          <p className="text-muted intro-text">Oi, me chamo</p>
          <h1 className="fw-bold">João Vitor</h1>
          <h3 className="text-primary mb-3 function-text">
            Desenvolvedor FrontEnd
          </h3>
          <p>
            Sou Estudante de Sistemas de Informação na UNESC. Tenho paixão por
            programação web e estou sempre buscando evoluir profissionalmente.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4 buttons-container">
            <a
              href={process.env.PUBLIC_URL + "/Portifolio.pdf"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary px-4 py-2 presentation-button">
                Baixar Currículo
              </button>
            </a>

            <a
              href="https://wa.me/5548998616619"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary px-4 py-2 presentation-button">
                Entrar em contato
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
