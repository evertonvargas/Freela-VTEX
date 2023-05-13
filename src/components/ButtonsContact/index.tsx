import Image from "next/image";

import styles from "./styles.module.scss";

export function ButtonsContact() {
  return (
    <div className={styles.container}>
      <a href="#contact">
        <button>Fale Conosco</button>
      </a>
      <a href="https://api.whatsapp.com/send?phone=5516999500046&text=Ol%C3%A1%2C%20vim%20pelo%20site%3A%20freelavtex.com.br">
        Ou chame no
        <Image
          src={"/whatsappWrite.svg"}
          alt="Logo Whatsapp"
          width={14}
          height={18}
        />
        Whatsapp
      </a>
    </div>
  );
}
