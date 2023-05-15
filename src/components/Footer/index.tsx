import Image from "next/image";
interface FooterProps {}
import styles from "./styles.module.scss";
import Link from "next/link";
import { sitemap } from "../../static/sitemap";

export function Footer({}: FooterProps) {
  return (
    <footer className={styles.footerContainer}>
      <section>
        <div>
          <div>
            <Image
              src={"/logo-footer.svg"}
              alt="Logo FreelaVTEX"
              width={240}
              height={48}
            />
            <p>
              Olá, somos um time multidisciplinar com mais de 5 anos de
              experiência em VTEX, Shopify, Wordpress, entre outras plataformas.
            </p>
            <p>Que tal começar seu projeto hoje mesmo?</p>
          </div>
          <div className={styles.menu}>
            <h3>Sitemap</h3>
            <ul>
              {sitemap.map(({ href, title }) => (
                <li key={title}>
                  <Link href={href}>
                    <a>{title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.menu2}>
            <h3>Entre em contato</h3>
            <ul>
              <li>
                <span>Telefone:</span> +55 16 99950-0046
              </li>
              <li>
                <span>Whatsapp:</span> +55 16 99950-0046
              </li>
              <li>
                <span>E-mail:</span> freelavtex@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </section>
      <p>FreelaVtex - 2023 © Todos direitos reservados</p>
    </footer>
  );
}
