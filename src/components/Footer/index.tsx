import Image from "next/image";
interface FooterProps {}
import styles from "./styles.module.scss";
import Link from "next/link";

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
              Olá, somos um time multidisciplinar com experiência com mais de 5
              anos de experiência em VTEX, Shopify, LI, Wordpress, entre outras
              plataformas.
            </p>
            <p>Que tal começar seu projeto hoje mesmo?</p>
          </div>
          <div className={styles.menu}>
            <h3>Sitemap</h3>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="#services">
                  <a>Serviços</a>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <a>Serviços</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.menu2}>
            <h3>Entre em contato</h3>
            <ul>
              <li>
                <a href="tel:+5548991320628" target="_blank" rel="noreferrer">
                  <span>Telefone:</span> +55 48 99132-0628
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5516999500046&text=Ol%C3%A1%2C%20vim%20pelo%20site%3A%20freelavtex.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Whatsapp:</span> +55 48 99132-0628
                </a>
              </li>
              <li>
                <a
                  href="mailto:freelavtex@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>E-mail:</span> freelavtex@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <p>FreelaVtex - 2023 © Todos direitos reservados</p>
    </footer>
  );
}
