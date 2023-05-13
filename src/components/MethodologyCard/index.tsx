import Image from "next/image";
import { Card } from "../../static/methodologyList";
import styles from "./styles.module.scss";

export function MethodologyCard({ title, img, text1, text2, text3 }: Card) {
  return (
    <div className={styles.card}>
      <div>
        <Image src={img} alt={title} width={34} height={34} />
        <h3>{title}</h3>
      </div>
      <ul>
        <li>{text1}</li>
        <li>{text2}</li>
        <li>{text3}</li>
      </ul>
    </div>
  );
}
