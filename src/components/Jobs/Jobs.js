import { Container, Row, Col, Card } from "react-bootstrap";
import "./Jobs.css";

const jobs = [
  {
    empresa: "RaizViva",
    cargo: "FrontEnd, Manutenção do Sistema",
    periodo: "(Mar 2025 – Novembro 2025)",
    descricao:
      "Atuação no desenvolvimento e personalização de páginas na plataforma Shopify, além da manutenção e atualização do sistema interno, garantindo funcionalidade, usabilidade e performance do site.",
  },
  {
    empresa: "Zé Delivery",
    cargo: "Roteirista de Entregas",
    periodo: "(Ago 2024 – Dez 2024)",
    descricao:
      "Responsável pela otimização de rotas e logística de entregas, desenvolvendo habilidades em planejamento, análise de trajetos e tomada de decisão rápida.",
  },
  {
    empresa: "Americanas",
    cargo: "Fiscal e Suporte nos Eletronicos",
    periodo: "(Nov 2013 – Mai 2024)",
    descricao:
      "Responsável pelo controle e organização do setor de eletrônicos, prestando suporte técnico básico e garantindo o bom funcionamento dos produtos em exposição. Contribuí para a redução de falhas operacionais e melhoria da experiência do cliente.",
  },
  {
    empresa: "Clube amizade",
    cargo: "Barman e Atendimento",
    periodo: "(Ago 2020 – Jul 2024)",
    descricao:
      "Atendimento acolhedor e atencioso ao público idoso, priorizando empatia, paciência e comunicação clara. Desenvolvi habilidades em relacionamento interpessoal e prestação de serviço humanizado.",
  },
  {
    empresa: "Piticas Araranguá",
    cargo: "Vendedor Responsavel",
    periodo: "(Nov 2020 – Jan 2023)",
    descricao:
      "Responsável pela gestão da equipe e do estoque, organização do espaço de vendas e alcance de metas comerciais. Contribuí para o aumento do desempenho da loja por meio de liderança, atendimento ao cliente e controle operacional eficiente.",
  },
];

export const Jobs = () => {
  return (
    <section className="py-5 bg-white" id="Jobs">
      <Container>
        <h2 className="text-center fw-bold mb-5">
          Experiências Profissionais
        </h2>

        <Row className="g-4">
          {jobs.map((job, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 shadow-sm border-0 text-center">
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Title className="fw-bold fs-4">
                    {job.empresa}
                  </Card.Title>
                  <Card.Subtitle className="text-primary fs-5 fw-semibold">
                    {job.cargo}
                  </Card.Subtitle>
                  <p className="text-muted mb-3">{job.periodo}</p>
                  <Card.Text className="text-muted">{job.descricao}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
