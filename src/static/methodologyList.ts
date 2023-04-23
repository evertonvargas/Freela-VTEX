export interface Card{
  title: string,
  img: string,
  text1: string,
  text2: string,
  text3: string
}

export const methodologyList: Card[] = [
  {
    title: 'Planejamento',
    img: '/planning.svg',
    text1: 'Reunião',
    text2: 'Levantamento de Requisitos',
    text3: 'Regras de negócio'
  },
  {
    title: 'Escopo',
    img: '/scope.svg',
    text1: 'Análise de projeto',
    text2: 'Descrição detalhada do produto',
    text3: 'Levantamento de horas'
  },
  {
    title: 'Contrato',
    img: '/contract.svg',
    text1: 'Orçamento',
    text2: 'Aprovação da proposta',
    text3: 'Assinatura do contrato'
  },
  {
    title: 'Execução',
    img: '/execution.svg',
    text1: 'Desenvolvimento',
    text2: 'Validação e testes',
    text3: 'Entrega do produto'
  },
]