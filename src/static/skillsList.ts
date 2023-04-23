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
    description: "Nossos programadores utilizam todas as linguagem utilizadas no mercado para que você tenha a melhor solução ao seu dispor."
  },
  {
    img: "/backend.svg",
    imgGradient: "/backendgradient.svg",
    title: "Desenvolvimento Back-End",
    description: "Todo nosso processo de criação é baseado em human centered design, incluindo boas práticas de usabilidade e pesquisa de mercado."
  },
  {
    img: "/cro.svg",
    imgGradient: "/crogradient.svg",
    title: "CRO",
    description: "Posicionamos seu negócio da melhor maneira para buscadores como Google, Bing, aumentando o acesso orgânico na web."
  },
]