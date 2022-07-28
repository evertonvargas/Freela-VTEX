interface infoCardsProps{
  title: string;
  img: string;
  list: String[];
}

export const infoCards:infoCardsProps[] = [
  {
    "title": "Planejamento",
    "img": "planning.svg",
    "list": ["Reunião", "Levantamento de Requisitos", "Regras de negócio"]
  },
  {
    "title": "Escopo",
    "img": "target.svg",
    "list": ["Análise do projeto", "Descrição detalhada do produto", "Levantamento de horas"]
  },
  {
    "title": "Contrato",
    "img": "acordo.svg",
    "list": ["Orçamento", "Aprovação da proposta", "Assinatura do contrato"]
  },
  {
    "title": "Execução",
    "img": "website-codes.svg",
    "list": ["Desenvolvimento", "Validação e testes", "Entrega do produto"]
  }
]