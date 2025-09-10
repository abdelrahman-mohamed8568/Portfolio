"use client";
/* eslint-disable react/no-unescaped-entities */
import "../styles/contact.css";
import Footer from "../components/footer/footer";
import { font2 } from "@/public/fonts/font";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";
import gmail from "@/public/images/contact/google.png";
import github from "@/public/images/contact/github.png";
import linkedin from "@/public/images/contact/linkedin.png";
import whatsapp from "@/public/images/contact/whatsapp.png";
import man from "@/public/images/contact/man.png";
import { motion } from "framer-motion";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("SEND MESSAGE");
  const form = useRef<HTMLFormElement>(null);
  const Submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (form.current !== null) {
      name &&
        email &&
        message &&
        (setSuccess("Message sent successfully ✔"),
        setName(""),
        setNumber(""),
        setEmail(""),
        setMessage(""));
      emailjs.sendForm("service_k5883fe", "template_61id30q", form.current, {
        publicKey: "QTN-KBHw-RxW4xxUB",
      });
    }
  };
  setTimeout(() => {
    setSuccess("SEND MESSAGE");
  }, 5000);

  return (
    <>
      <div className="mainContainer">
        <motion.h3
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
          className="frontText"
        >
          contact
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="contactContainer"
        >
          <h4>Let's Connect</h4>
          <p>
            If you have any suggestion, project or even you want to say “hello”,
            please fill out the form below and I will reply you shortly.
          </p>
          <form onSubmit={Submit} ref={form} className={font2}>
            <div className="info">
              <div className="name">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <span className={`formSpan ${name && "activeMessage"}`}>
                  Name
                </span>
              </div>
              <div className="phone">
                <input
                  type="number"
                  name="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <span className={`formSpan ${number && "activeMessage"}`}>
                  Phone
                </span>
              </div>
            </div>
            <div className="email">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className={`formSpan ${email && "activeMessage"}`}>
                Email
              </span>
            </div>
            <div className="message">
              <textarea
                required
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <span className={`formSpan ${message && "activeMessage"}`}>
                Message
              </span>
            </div>
            <input type="submit" value={success} className="btn" />
          </form>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="links"
          >
            <Link
              href={"mailto:abdelrahman.mohamed8568@gmail.com"}
              target="_blank"
            >
              <Image src={gmail} alt={""} className="logo" />
            </Link>
            <Link href={"https://github.com/abdelrahman8568"} target="_blank">
              <Image src={github} alt={""} className="logo" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/abdelrahman8568/"}
              target="_blank"
            >
              <Image src={linkedin} alt={""} className="logo" />
            </Link>
            <Link href={"https://wa.me/+201110828568"} target="_blank">
              <Image src={whatsapp} alt={""} className="logo" />
            </Link>
            <Image src={man} alt={""} className="man" />
          </motion.div>
        </motion.div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
