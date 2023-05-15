import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";
import { CompaniesProps } from "../../static/companiesList";

export function CompanyCard({
  flag,
  altFlag,
  img,
  altImg,
  category,
  title,
  url,
}: CompaniesProps) {
  return (
    <div className={styles.container}>
      <div>
        <Image src={flag} alt={altFlag} width={25} height={25} />
        <h3>{category}</h3>
      </div>
      <div className={styles.imgLogo}>
        <img src={img} alt={altImg} />
      </div>
      <div>
        <p>{title}</p>
        <Link href={url} prefetch={false}>
          <a target="_blank" rel="noopener">
            Ver Website
          </a>
        </Link>
      </div>
    </div>
  );
}
