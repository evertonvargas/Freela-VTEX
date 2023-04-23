import { useState } from "react";
import { SkilsProps } from "../../static/skillsList";
import styles from "./styles.module.scss";

export function SkillCard({
  img,
  imgGradient,
  title,
  description,
}: SkilsProps) {
  const [src, setSrc] = useState(img);

  return (
    <div className={styles.container}>
      <img
        src={src}
        alt={title}
        onMouseOver={() => setSrc(imgGradient)}
        onMouseOut={() => setSrc(img)}
      />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
