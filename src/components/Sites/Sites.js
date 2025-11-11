import "./Sites.css";

const SITES = [
  {
    img: process.env.PUBLIC_URL + "/images/Sites/PortifolioSites.png",
    title: "Portfólio",
    tech: "JS (React) e CSS (Bootstrap)",
    desc: "Desenvolvi este portfólio para apresentar meus projetos e habilidades como desenvolvedor web.",
    link: "/home",
  },
  {
    img: process.env.PUBLIC_URL + "/images/Sites/RaizVivaSite.png",
    title: "RaizViva",
    tech: "Plataforma Shopify",
    desc: "Desenvolvi páginas e customizei layouts na plataforma Shopify, incluindo configurações de tema, estruturação de seções e inserção de conteúdo.",
    link: "https://raizviva.com.br",
  },
  {
    img: process.env.PUBLIC_URL + "/images/Sites/CalculadoraSite.png",
    title: "Calculadora Simples",
    tech: "JS e CSS",
    desc: "Desenvolvi uma calculadora que oferece operações básicas. Fiz esse site para testar conhecimentos de javascript.",
    link: "https://joaovitorcramos.github.io/Calculadora/",
  },
  {
    img: process.env.PUBLIC_URL + "/images/Sites/ValheimBosesSite.png",
    title: "Pesquisa Simples",
    tech: "JS e CSS",
    desc: "Desenvolvi um site simples que permite aos usuários pesquisar informações sobre os chefes do jogo Valheim.",
    link: "https://joaovitorcramos.github.io/aula1TesteCss/",
  },
  {
    img: process.env.PUBLIC_URL + "/images/Sites/pokedexSite.png",
    title: "Pokedex",
    tech: "JS e CSS",
    desc: "Desenvolvi uma Pokedex interativa que permite aos usuários buscar Pokémons.",
    link: "https://joaovitorcramos.github.io/Pokedex/",
  },
  {
    img: process.env.PUBLIC_URL + "/images/Sites/adivinhacaoSite.png",
    title: "Jogo de Adivinhação",
    tech: "JS e CSS",
    desc: "Desenvolvi um jogo de adivinhação simples onde os usuários tentam adivinhar um número gerado aleatoriamente.",
    link: "https://joaovitorcramos.github.io/Adivinhacao/",
  },
  {
    img: process.env.PUBLIC_URL + "/images/Sites/mtgSite.png",
    title: "Contador de Vida Magic The Gathering",
    tech: "JS e CSS",
    desc: "Desenvolvi um contador de vida para o jogo Magic The Gathering.",
    link: "https://joaovitorcramos.github.io/VidaMagic/",
  },
  {
    img: process.env.PUBLIC_URL + "/images/Sites/jogodavelhaSite.png",
    title: "Jogo da Velha",
    tech: "JS e CSS",
    desc: "Desenvolvi um jogo da velha interativo onde dois jogadores podem competir.",
    link: "https://joaovitorcramos.github.io/JogoDaVelha/",
  },
];

export const Sites = () => {
  return (
    <section className="sites-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold Titulo-Sites">Sites</h2>

        <div className="row flex-nowrap overflow-auto">
          {SITES.map((site, i) => (
            <div key={i} className="col-10 col-sm-6 col-md-4 col-lg-3 mb-3">
              <a
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="card site-card h-100">
                  <img
                    src={site.img}
                    className="card-img-top"
                    alt={site.title}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{site.title}</h5>
                    <p className="card-text">
                      <strong>Tecnologias:</strong> {site.tech}
                    </p>
                    <p className="card-text">{site.desc}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
