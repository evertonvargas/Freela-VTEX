import React from "react";

import { MenuFixed } from "./components/ItemsMenu";
import { Translate } from "./components/Translate";

import styles from "./Header.module.scss";
import Image from "next/image";

export const Header = () => {
  return (
    <header className={styles.sectionHeader}>
      <div className={styles.contentHeader}>
        <section className={styles.logo}>
          <Image
            src="/logo-vtex-freela.svg"
            alt="Logo"
            width={240}
            height={48}
          />
        </section>
        <section className={styles.menu}>
          <MenuFixed />
          <Translate />
        </section>
      </div>
    </header>
  );
};
