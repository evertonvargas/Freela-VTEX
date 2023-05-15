import Document, { Html, Head, NextScript, Main } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/png" />
          <link rel="canonical" href="https://freelavtex.com/"></link>
          <meta
            name="description"
            content="Migração de Legacy para VTEX IO, FastStore, integrações, aplicações no Master Data, implementação de layouts, manutenção, evolução da loja, técnicas avançadas de SEO e usabilidade."
          />
          <meta
            name="keywords"
            content="Freelancer VTEX, Desenvolvedor VTEX, desenvolvimento, FastStore, Vtex IO, Vtex Legacy, Desenvolvimento Front-End, Desenvolvimento Back-End, CRO, desenvolvimento vtex, UX Design, UI Design, SEO, Aplicações no Master Data, time qualificado, Migração de Legacy,VTEX IO, Integrações, Aplicações no Master Data, Implementação de layouts, Manutenção, Evolução da loja, Técnicas avançadas de SEO, Usabilidade"
          />
          <meta
            name="google-site-verification"
            content="Q4sXoa3njKtlWdV4lFbZfvYN9KgGgXHL_DoXZeNBCBY"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
            rel="stylesheet"
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
