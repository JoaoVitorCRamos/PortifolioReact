import "./Skills.css";

const Tecnologias = [
  { src: process.env.PUBLIC_URL + "/images/Tecnologias/JS.png", alt: "JavaScript" },
  { src: process.env.PUBLIC_URL + "/images/Tecnologias/React.png", alt: "React" },
  { src: process.env.PUBLIC_URL + "/images/Tecnologias/CSS.png", alt: "CSS" },
  { src: process.env.PUBLIC_URL + "/images/Tecnologias/NoSQL.png", alt: "NoSQL" },
  { src: process.env.PUBLIC_URL + "/images/Tecnologias/SQL.png", alt: "SQL" },
  { src: process.env.PUBLIC_URL + "/images/Tecnologias/Git.png", alt: "Git" },
  { src: process.env.PUBLIC_URL + "/images/Tecnologias/Java.png", alt: "Java" },
  { src: process.env.PUBLIC_URL + "/images/Tecnologias/C++.png", alt: "C++" },
  { src: process.env.PUBLIC_URL + "/images/Tecnologias/C.png", alt: "C" },
  { src: process.env.PUBLIC_URL + "/images/Tecnologias/Python.png", alt: "Python" },
  { src: process.env.PUBLIC_URL + "/images/Tecnologias/TrabalhoEmEquipe.png", alt: "Trabalho em Equipe" },
  { src: process.env.PUBLIC_URL + "/images/Tecnologias/Proatividade.png", alt: "Proatividade" },
  { src: process.env.PUBLIC_URL + "/images/Tecnologias/Adaptabilidade.png", alt: "Adaptabilidade" },
];


export const Skills = () => {
  const loopIcons = [...Tecnologias, ...Tecnologias];

  return (
    <section className="skills-section text-center py-5 bg-dark text-light">
      <h2 className="mb-4 fw-bold">Tecnologias e Habilidades</h2>

      <div className="marquee">
        <div className="marquee-content">
          {loopIcons.map((tec, i) => (
            <div key={i} className="skill-item">
              <img src={tec.src} alt={tec.alt} className="skill-icon" />
              <p className="mt-2">{tec.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
