import "./Skills.css";

const Tecnologias = [
  { src: "/images/Tecnologias/JS.png", alt: "JavaScript" },
  { src: "/images/Tecnologias/React.png", alt: "React" },
  { src: "/images/Tecnologias/CSS.png", alt: "CSS" },
  { src: "/images/Tecnologias/NoSQL.png", alt: "NoSQL" },
  { src: "/images/Tecnologias/SQL.png", alt: "SQL" },
  { src: "/images/Tecnologias/Git.png", alt: "Git" },
  { src: "/images/Tecnologias/Java.png", alt: "Java" },
  { src: "/images/Tecnologias/C++.png", alt: "C++" },
  { src: "/images/Tecnologias/C.png", alt: "C" },
  { src: "/images/Tecnologias/Python.png", alt: "Python" },
  {
    src: "/images/Tecnologias/TrabalhoEmEquipe.png",
    alt: "Trabalho em Equipe",
  },
  { src: "/images/Tecnologias/Proatividade.png", alt: "Proatividade" },
  { src: "/images/Tecnologias/Adaptabilidade.png", alt: "Adaptabilidade" },
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
