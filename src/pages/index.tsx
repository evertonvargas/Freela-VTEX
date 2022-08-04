import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Typed from "react-typed";

import { Cards } from "../components/Cards"
import { Whatsapp } from "../components/Whatsapp/whatsapp"
import { Form } from "../components/Form/Form";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1);
  }, [count]);

  useEffect(()=>{
    if(window.location.hash!=="") window.location.href="/"
  },[])

  return (
    <div className={styles.container}>
      <Head>
        <title>Freela VTEX</title>
        <meta name="description" content="Freelancer VTEX - VTEX IO e Legacy" />
      </Head>
      
      <header>
        <nav>
          <div>
            <img src="dev.svg" alt="imagem de um dev" />
            <h2>FreelaVtex</h2>
          </div>
          <a href="#contato">
            <button>Contato</button>
          </a>
        </nav>
      </header>
      <main>
        <section>
          <div>
            <Typed
              strings={["FREELANCER VTEX", "FREELANCER VTEX"]}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
            <h3>VTEX IO e Legacy</h3>
            <p>
              Integrações, aplicações no Master Data, implementação de Layout,
              manutenção, evolução da loja, técnicas avançadas de SEO e
              usabilidade.
            </p>
          </div>
          <div>
            <img src="VTEX_Logo.png" alt="Logo da VTEX" />
          </div>
        </section>
        <section className={styles.sectionMethodology}>
          <header className={styles.headerMethodology}>
            <h3>Metodologia de Trabalho</h3>
            <span>Combinamos 4 etapas para ajudar no seu negócio</span>
          </header>
          <footer className={styles.footerMethodology}>
            <img src="metodology-icon.svg" alt="Imagem da metodologia" />
            <div>
              <Cards />
            </div>
          </footer>
        </section>
        <Form anchor="contato"/>
      </main>

      <Whatsapp />
    </div>
  );
};

export default Home;
