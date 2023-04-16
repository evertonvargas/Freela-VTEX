import React from "react";

import { MenuFixed } from "./components/ItemsMenu";
import {Translate} from "./components/Translate"

import styles from "../../styles/Header/Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.sectionHeader}>
      <div className={styles.contentHeader}>
        <section className={styles.logo}>
          <img src="logo-vtex-freela.svg" />
        </section>
        <section className={styles.menu}>
          <MenuFixed />
          <Translate />
        </section>
      </div>
    </header>
  );
};
