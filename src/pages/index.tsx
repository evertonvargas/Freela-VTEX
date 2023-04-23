import type { NextPage } from "next";
import Head from "next/head";

import { Whatsapp } from "../components/Whatsapp/whatsapp";
import styles from "../styles/Home.module.scss";
import { MethodologyCard } from "../components/MethodologyCard";
import { methodologyList } from "../static/methodologyList";
import { companiesList } from "../static/companiesList";
import { CompanyCard } from "../components/CompanyCard";
import { ButtonsContact } from "../components/ButtonsContact";
import { skillsList } from "../static/skillsList";
import { SkillCard } from "../components/SkillCard";
import Image from "next/image";
import { mainCompaniesList } from "../static/mainCompaniesList";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Freelancer VTEX</title>
      </Head>
      <section className={styles.introduction}>
        <div>
          <div className={styles.content}>
            <h1>VTEX IO e FastStore com qualidade e rapidez</h1>
            <h3>
              Somos um time qualificado para
              <br /> levar o seu negócio para o próximo level
            </h3>
            <p>
              Migração de Legacy para VTEX IO, integrações, aplicações no Master
              Data, implementação de layouts, manutenção, evolução da loja,
              técnicas avançadas de SEO e usabilidade.
            </p>
            <ButtonsContact isColorWhite={true} />
          </div>
          <img
            className={styles.developer}
            src="/developer.svg"
            alt="Desenvolvedor"
          />
          <div className={styles.mainCompanies}>
            {mainCompaniesList.map(({ imgUrl, alt, url }) => (
              <Link href={url} key={alt}>
                <img src={imgUrl} alt={alt} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.methodology}>
        <h2 className={styles.titleSection}>
          Nossa metodologia de <span>trabalho</span>
        </h2>
        <p className={styles.paragraphSection}>
          Combinamos 04 etapas para ajudar o seu negócio a decolar ainda mais
          rápido
        </p>
        <div>
          {methodologyList.map(({ img, title, text1, text2, text3 }) => (
            <MethodologyCard
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
      <section className={styles.companies}>
        <h2 className={styles.titleSection}>
          Empresas que <span>confiam</span> na gente
        </h2>
        <p className={styles.paragraphSection}>
          Com nosso time seu projeto está em boas mãos
        </p>
        <div className={styles.companyList}>
          {companiesList.map((company) => (
            <CompanyCard
              key={company.altImg}
              flag={company.flag}
              altFlag={company.altFlag}
              category={company.category}
              img={company.img}
              altImg={company.altImg}
              title={company.title}
              url={company.url}
            />
          ))}
        </div>
      </section>
      <section className={styles.description}>
        <div>
          <img src="/telework.svg" alt="Grupo de pessoas trabalhando" />
          <div>
            <h2 className={styles.titleSection}>
              Somos a melhor opção em equipe freelancer para plataforma{" "}
              <span>VTEX IO</span>
            </h2>
            <p>
              Garantimos um serviço de qualidade por um preço justo para você
              dar um up no seu negócio. Oferecemos desenvolvimento, CRO, SEO, UI
              Design, UX Design e outros serviços para VTEX.
            </p>
            <p>Vamos dar start no seu projeto agora mesmo?</p>
            <ButtonsContact />
          </div>
        </div>
      </section>
      <section className={styles.skills}>
        <h2 className={styles.titleSection}>
          Principais skills do <span>nosso time</span>
        </h2>
        <p className={styles.paragraphSection}>
          As melhores práticas e entregáveis de valor para o seu negócio
        </p>
        <div>
          {skillsList.map(({ img, description, title, imgGradient }) => (
            <SkillCard
              key={title}
              img={img}
              description={description}
              title={title}
              imgGradient={imgGradient}
            />
          ))}
        </div>
      </section>
      <Whatsapp />
    </div>
  );
};

export default Home;
