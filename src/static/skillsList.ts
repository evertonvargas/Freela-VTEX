export interface SkilsProps {
  img: string,
  imgGradient:string,
  title: string,
  description: string
}

export const skillsList: SkilsProps[] = [
  {
    img: "/uidesign.svg",
    imgGradient: "/uidesigngradient.svg",
    title: "UI Design",
    description: "Desenvolvemos todo style guide para que sua marca tenha uma identidade consistente em todos os meios digitais."
  },
  {
    img: "/uxdesign.svg",
    imgGradient: "/uxdesigngradient.svg",
    title: "UX Design",
    description: "Todo nosso processo de criação é baseado em human centered design, incluindo boas práticas de usabilidade e pesquisa de mercado."
  },
  {
    img: "/seo.svg",
    imgGradient: "/seogradient.svg",
    title: "SEO",
    description: "Posicionamos seu negócio da melhor maneira para buscadores como Google, Bing, aumentando o acesso orgânico na web."
  },
  {
    img: "/frontend.svg",
    imgGradient: "/frontendgradient.svg",
    title: "Desenvolvimento Front-End",
    description: "Criação de interfaces funcionais e responsivas para e-commerce, garantindo uma experiência moderna e envolvente aos usuários."
  },
  {
    img: "/backend.svg",
    imgGradient: "/backendgradient.svg",
    title: "Desenvolvimento Back-End",
    description: "Sistemas seguros e escaláveis, com alta performance e confiabilidade, utilizando tecnologias avançadas. Integramos com APIs e sistemas de terceiros."
  },
  {
    img: "/cro.svg",
    imgGradient: "/crogradient.svg",
    title: "CRO",
    description: "Usamos ferramentas de análise de dados para otimizar a conversão de visitantes em clientes, identificando e solucionando problemas.."
  },
]