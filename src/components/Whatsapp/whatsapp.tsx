import styles from "../../styles/Whats.module.scss"
import Link from 'next/link'



export function Whatsapp() {
  return (
    <div className={styles.sectionWhats}>
      <Link href="https://api.whatsapp.com/send?phone=5516999500046&text=Ol%C3%A1%2C%20vim%20pelo%20site%3A%20freelavtex.com.br">
      <a aria-label="Contato Whatsapp">
        <img src="whatsapp.svg" alt="Logo Whatsapp"/>
      </a>
      </Link>
    </div>
  )
}