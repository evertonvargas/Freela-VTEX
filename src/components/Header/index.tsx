import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { sitemap } from "../../static/sitemap";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  return (
    <header className={styles.sectionHeader}>
      <div className={styles.contentHeader}>
        <section className={styles.logo}>
          <Link href="/" passHref>
            <a>
              <Image
                src="/logo-vtex-freela.svg"
                alt="Logo"
                width={240}
                height={48}
              />
            </a>
          </Link>
        </section>
        {menu && (
          <div onClick={() => setMenu(!menu)} className={styles.backdrop}></div>
        )}
        <div
          onClick={() => setMenu(!menu)}
          className={
            menu ? `${styles.menuSection} ${styles.on}` : styles.menuSection
          }
        >
          <div onClick={() => setMenu(!menu)} className={styles.menuToggle}>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
            <div className={styles.three}></div>
          </div>
          <nav>
            {sitemap.map(({ href, title }, index) => (
              <Link key={index} href={href}>
                <a
                  className={router.asPath === href ? styles.active : undefined}
                  onClick={() => setMenu(false)}
                >
                  {title}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
