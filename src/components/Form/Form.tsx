import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import getConfig from "next/config";

import styles from "./Form.module.scss";

const { publicRuntimeConfig } = getConfig();
const { YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY } =
  publicRuntimeConfig;

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Preechimento obrigatório"),
  email: yup
    .string()
    .email("E-mail inválido")
    .required("Preenchimento Obrigatório"),
  mensage: yup.string().required("Preenchimento Obrigatório"),
});

interface FormProps{
  anchor: string;
}

export function Form({anchor}:FormProps) {
  const form = useRef<any>();
  const [sent, setSent] = useState(false);

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      onSubmit: async (values) => {
        console.log("teste");
        setSent(true);
        emailjs
          .sendForm(
            YOUR_SERVICE_ID,
            YOUR_TEMPLATE_ID,
            form.current,
            YOUR_PUBLIC_KEY
          )
          .then(
            (result) => {
              console.log("result", result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
          setTimeout(() => {
            setSent(false);
          }, 5000);
      },
      validationSchema,
      initialValues: {
        name: "",
        email: "",
        urlSite: "",
        mensage: "",
      },
    });

  return (
    <section className={styles.container} id={anchor}>
      {sent ? (
        <div className={styles.send}>
          <h2>Obrigado por nos contatar!</h2>
          <p>Nós recebemos sua mensagem.</p>
          <p>Entraremos em contato com você em breve.</p>
          <div className={styles.paperplane}>
            <div className={styles.plane}>
              <div className={styles.wingRight}></div>
              <div className={styles.wingLeft}></div>
              <div className={styles.bottom}></div>
              <div className={styles.top}></div>
              <div className={styles.middle}></div>
            </div>
            <div className={styles.clouds}>
              <div className={styles.cloudOne}></div>
              <div className={styles.cloudTwo}></div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <article>
            <h2>Contato</h2>
            <img src="contact.svg" />
          </article>
          <p>
            Estamos prontos para te atender, conversar e entender suas
            necessidades.
          </p>
          <p>Somos o time que levará a sua operação para outro nível</p>

          <form ref={form} onSubmit={handleSubmit} className={styles.form}>
            <label>
              Nome<span>*</span>
            </label>
            <input
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${
                touched.name && errors.name && styles.borderError
              }}`}
            />
            {touched.name && errors.name ? (
              <div className={styles.error}>{errors.name}</div>
            ) : null}
            <label>
              E-mail<span>*</span>
            </label>
            <input
              name="email"
              type="e-mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${
                touched.email && errors.email && styles.borderError
              }}`}
            />
            {touched.email && errors.email ? (
              <div className={styles.error}>{errors.email}</div>
            ) : null}
            <label>URL do Site</label>
            <input
              name="urlSite"
              value={values.urlSite}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>
              Mensagem<span>*</span>
            </label>
            <textarea
              rows={8}
              name="mensage"
              value={values.mensage}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${
                touched.mensage && errors.mensage && styles.borderError
              }}`}
            ></textarea>
            {touched.mensage && errors.mensage ? (
              <div className={styles.error}>{errors.mensage}</div>
            ) : null}
            <div>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </>
      )}
    </section>
  );
}
