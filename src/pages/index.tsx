import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Typed from "react-typed";

import {Header} from "../components/Header";
import { Cards } from "../components/Cards";
import { Whatsapp } from "../components/Whatsapp/whatsapp";
import { Form } from "../components/Form/Form";

import styles from "../styles/Home.module.scss";

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
      <Header />
      <Head>
        <title>Freelancer VTEX</title>
      </Head>

      <div>s;dlasl;dsak</div>
      <Whatsapp />
    </div>
  );
};

export default Home;
