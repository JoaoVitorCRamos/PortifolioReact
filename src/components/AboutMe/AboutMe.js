import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <section className="container py-5 bg-light" id="about">
      <div className="row align-items-center">
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img
            src="images/aboutme.jpg"
            alt="Foto profissional"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-7 div-aboutme">
          <h2 className="mb-3 fw-bold">Objetivo profissional</h2>
          <p className="lead first-text">
            Busco uma oportunidade de estágio em desenvolvimento web para
            iniciar minha carreira na área. Sou estudante de Sistemas de
            Informação, dedicado, proativo e em constante aprimoramento. Tenho
            conhecimento em JavaScript, CSS e React, com experiência no
            desenvolvimento de interfaces responsivas e funcionais. Aprendo
            rápido, trabalho bem em equipe e busco sempre entregar resultados
            com qualidade.
          </p>
        </div>
      </div>
    </section>
  );
};
