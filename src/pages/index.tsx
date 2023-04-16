import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Whatsapp } from "../components/Whatsapp/whatsapp";
import styles from "../styles/Home.module.scss";
import { Card } from "../components/Card";
import { methodology } from "../static/methodology";

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1);
  }, [count]);

  useEffect(() => {
    if (window.location.hash !== "") window.location.href = "/";
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Freelancer VTEX</title>
      </Head>

      <section className={styles.methodology}>
        <h2>
          Nossa metodologia de <span>trabalho</span>
        </h2>
        <p>
          Combinamos 04 etapas para ajudar o seu negócio a decolar ainda mais
          rápido
        </p>
        <div>
          {methodology.map(({ img, title, text1, text2, text3 }) => (
            <Card
              key={title}
              img={img}
              title={title}
              text1={text1}
              text2={text2}
              text3={text3}
            />
          ))}
        </div>
      </section>

      <div>s;dlasl;dsak</div>
      <Whatsapp />
    </div>
  );
};

export default Home;
