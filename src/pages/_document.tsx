import Document, { Html, Head, NextScript, Main } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.ico" type="image/png" />
          <meta
            name="description"
            content="Freelancer VTEX IO e Legacy. Integrações, aplicações no Master Data, implementação de Layout, manutenção, evolução da loja, técnicas avançadas de SEO e usabilidade."
          />
          <meta
            name="keywords"
            content="VTEXIO, VTEX IO, VtexIo, Vtexio, vtexio, vtex-legacy, VTEX Legacy, vtex legacy, vtexlegacy, VTEX LEGACY, Desenvolvedor Vtex, Front-End Vtex, Front-End VTEXIO, Desenvolvedor VTEXIO, Desenvolvedor Vtex IO, Freelancer Vtex, Freelancer VTEX Legacy, freelancer vtex, freelancer legacy, Freelancer Vtex IO, Freelancer VtexIo, Freelancer VTEXIO, e-commerce vtex, e-commerce vtex, vendas online, site de vendas"
          />
          <meta name="robots" content="index"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
