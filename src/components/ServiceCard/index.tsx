interface ServiceCardProps {}
import Image from "next/image";
import styles from "./styles.module.scss";

export function ServiceCard({}: ServiceCardProps) {
  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles.cardLegacy}`}>
        <div>
          <h2>Vtex Legacy</h2>
        </div>
        <div>
          <h3>Vantagens:</h3>
          <ul className={styles.negativePoint}>
            <li>Atualmente nenhuma</li>
          </ul>
          <h3>Desvantagens:</h3>
          <ul className={styles.negativePoint}>
            <li>Tecnologia desatualizada</li>
            <li>Vtex descontinuando o suporte em cima da tecnologia Legacy</li>
          </ul>
          <h3>Sugestão:</h3>
          <ul className={styles.positivePoint}>
            <li>Migração para VTEX IO ou Faststore</li>
          </ul>
        </div>
      </div>
      <div className={`${styles.card} ${styles.cardFastStore}`}>
        <div className={styles.title}>
          <h2>FastStore</h2>
        </div>
        <div>
          <h3>Vantagens:</h3>
          <ul className={styles.positivePoint}>
            <li>Alto desempenho </li>
            <li>
              Estabilidade na criação de páginas por meio de um kit de
              ferramentas pronto para Jamstack
            </li>
            <li>Conexão com SEO/Analytics </li>
            <li>Performance </li>
            <li>
              CMS Handless. Permite o gerenciamento de conteúdo de maneira.
              simplificada
            </li>
            <li>
              Velocidade no desenvolvimento de uma loja Uso de React, Node,
              GraphQL e JSON
            </li>
          </ul>
        </div>
        <div className={styles.circle}>
          <Image src="/wordsCircle.svg" alt="Logo" width={118} height={118} />
        </div>
      </div>
      <div className={`${styles.card} ${styles.cardVtexIO}`}>
        <div>
          <h2>Vtex IO</h2>
        </div>
        <div>
          <h3>Vantagens:</h3>
          <ul className={styles.positivePoint}>
            <li>Velocidade no desenvolvimento de uma loja</li>
            <li>
              Uso de apps/plugins de terceiros para agilizar o desenvolvimento{" "}
            </li>
            <li>
              Site-editor que permite o gerenciamento de conteúdo de maneira
              simplificada
            </li>
            <li>Uso de React, Node, GraphQL e JSON</li>
          </ul>
          <h3>Desvantagens:</h3>
          <ul className={styles.negativePoint}>
            <li>Performance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
