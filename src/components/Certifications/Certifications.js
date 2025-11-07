import "./Certifications.css";

const CERTIFICATIONS = [
  {
    img: "/images/Certificados/unesc.png",
    title: "Faculdade de Sistema da Informação (5º semestre)",
    link: "https://unesc.net/home",
  },
  {
    img: "/images/Certificados/PDVJavaSQL.jpg",
    title: "Criando um controle de vendas desktop com java e mySQL",
    link: "https://www.udemy.com/course/controle-de-vendas-java/?srsltid=AfmBOorv8xGu_eMmGgEb-zZYIsO4v1u75X8nGlRbUzkhCV0213nxvydS&couponCode=MT251103G3",
  },
  {
    img: "/images/Certificados/JavaBasico.jpg",
    title: "Curso de Java do Básico ao Avançado + Projetos com MySQL",
    link: "https://www.udemy.com/course/curso-de-java-do-basico-ao-avancado-projeto-com-mysql/?utm_source=adwords&utm_medium=udemyads&utm_campaign=MX_FF-CONV_BR_Search-NB_DSA_Beta_la.PT_Google&campaigntype=Search&portfolio=Brazil&language=PT&product=Course&test=&audience=DSA&topic=&priority=Beta&funnel=Conversion&utm_content=&utm_term=_._ag_164619373866_._ad_706585633196_._kw__._de_c_._dm__._pl__._ti_aud-2297301418005%3Adsa-2439861499651_._li_9102215_._pd__._&matchtype=&gad_source=1&gad_campaignid=21497093485&gbraid=0AAAAADROdO2mXb3AU8ASSrRQkmr78ttD0&gclid=Cj0KCQiA5abIBhCaARIsAM3-zFXZ2eFFV8sYOjvRRnS1e8D95W0z-0cdJL0K0tg2B86TQY79SV7WqBQaAi6gEALw_wcB&couponCode=PMNVD2025",
  },
  {
    img: "/images/Certificados/JsAlura.png",
    title: "Javascript e HTML: Desenvolva um jogo e pratique lógica de programação",
    link: "https://www.alura.com.br/",
  },
  {
    img: "/images/Certificados/CBasicoAlura.png",
    title: "C: Conhecendo a linguagem das linguagens",
    link: "https://www.alura.com.br/",
  },
];

export const Certifications = () => {
  return (
    <section className="Certifications-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold Titulo-Certifications">Certificados</h2>

        <div className="row flex-nowrap overflow-auto">
          {CERTIFICATIONS.map((Certifications, i) => (
            <div key={i} className="col-10 col-sm-6 col-md-4 col-lg-3 mb-3">
              <a
                href={Certifications.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="card Certifications-card h-100">
                  <img
                    src={Certifications.img}
                    className="card-img-top"
                    alt={Certifications.title}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{Certifications.title}</h5>
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
