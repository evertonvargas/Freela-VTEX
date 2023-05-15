interface FormProps {}
import styles from "./styles.module.scss";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import Image from "next/image";

import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY } =
  publicRuntimeConfig;

const validationSchema = yup.object().shape({
  name: yup.string().required("Preechimento obrigatório"),
  email: yup
    .string()
    .email("E-mail inválido")
    .required("Preenchimento Obrigatório"),
  mensage: yup.string().required("Preenchimento Obrigatório"),
  urlStore: yup.string(),
  subject: yup.string().required("Preenchimento Obrigatório"),
});

export function Form({}: FormProps) {
  const form = useRef<any>();
  const [src, setSrc] = useState("/whatsappBlack.svg");

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      onSubmit: (values) => {
        console.log(values, "values");
        console.log(form.current, "form.current");
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
      },
      validationSchema,
      initialValues: {
        name: "",
        email: "",
        urlStore: "",
        mensage: "",
        subject: "",
      },
    });

  return (
    <section className={styles.container}>
      <div className={styles.formContainer}>
        <h3 className={styles.titleSection}>
          Fale Conosco <span>agora mesmo</span>
        </h3>
        <p className={styles.paragraphSection}>
          Preencha o formulário ou se precisar de um atendimento mais rápido,
          fale com nosso time via WhatsApp.
        </p>
        <form ref={form} onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.separateTwoColumns}>
            <label htmlFor="name">
              <span
                className={`${touched.name && errors.name && styles.spanerror}`}
              >
                Nome <span>*</span>
              </span>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Como gostaria de ser chamado?"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${
                  touched.name && errors.name && styles.borderError
                }`}
              />
              {touched.name && errors.name ? (
                <div className={styles.error}>{errors.name}</div>
              ) : null}
            </label>
            <label htmlFor="email">
              <span
                className={`${
                  touched.email && errors.email && styles.spanerror
                }`}
              >
                E-mail <span>*</span>
              </span>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Seu melhor e-mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${
                  touched.email && errors.email && styles.borderError
                }`}
              />
              {touched.email && errors.email ? (
                <div className={styles.error}>{errors.email}</div>
              ) : null}
            </label>
          </div>
          <div className={styles.separateTwoColumns}>
            <label htmlFor="urlStore">
              <span
                className={`${
                  touched.urlStore && errors.urlStore && styles.spanerror
                }`}
              >
                URL
              </span>
              <input
                id="urlStore"
                name="urlStore"
                type="text"
                placeholder="Insira a URL da loja"
                value={values.urlStore}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${
                  touched.urlStore && errors.urlStore && styles.borderError
                }`}
              />
              {touched.urlStore && errors.urlStore ? (
                <div className={styles.error}>{errors.urlStore}</div>
              ) : null}
            </label>
            <label htmlFor="subject">
              <span
                className={`${
                  touched.subject && errors.subject && styles.spanerror
                }`}
              >
                Assunto <span>*</span>
              </span>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="No que podemos ajudar?"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${
                  touched.subject && errors.subject && styles.borderError
                }`}
              />
              {touched.subject && errors.subject ? (
                <div className={styles.error}>{errors.subject}</div>
              ) : null}
            </label>
          </div>
          <label htmlFor="mensage" className={styles.message}>
            <span
              className={`${
                touched.mensage && errors.mensage && styles.spanerror
              }`}
            >
              Mensagem <span>*</span>
            </span>
            <textarea
              id="mensage"
              rows={8}
              name="mensage"
              placeholder="Digite a sua mensagem..."
              value={values.mensage}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${
                touched.mensage && errors.mensage && styles.borderError
              }`}
            ></textarea>
            {touched.mensage && errors.mensage ? (
              <div className={styles.error}>{errors.mensage}</div>
            ) : null}
          </label>
          <div className={styles.buttonSubmit}>
            <button type="submit">Enviar mensagem</button>
          </div>
        </form>
      </div>
      <p>
        Prefere um atendimento mais rápido?
        <span>
          <a
            href="https://api.whatsapp.com/send?phone=5516999500046&text=Ol%C3%A1%2C%20vim%20pelo%20site%3A%20freelavtex.com.br"
            onMouseOver={() => setSrc("/whatsappPurple.svg")}
            onMouseOut={() => setSrc("/whatsappBlack.svg")}
          >
            Chame no
            <Image src={src} alt="Logo Whatsapp" width={14} height={18} />
            Whatsapp
          </a>
          ou
          <a href="https://calendly.com/freelavtex/60min">Agende uma reunião</a>
        </span>
      </p>
    </section>
  );
}
