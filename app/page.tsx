"use client";
import "./styles/page.css";
import Footer from "./components/footer/footer";
import Cover from "./components/home/cover";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="homeContainer">
        <Cover />
        <div className="introduction">
          <motion.div
            className="infoCard"
            initial={{ top: "120vh" }}
            animate={{ top: "85vh" }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h1>Let’s Connect Now</h1>
            <Link href={"contact"} className="homeBtn">
              Get In Touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-chevron-right icon "
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </Link>
          </motion.div>
          <div className="mainContainer">
            <motion.h3
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 3 }}
              viewport={{ once: true }}
              className="frontText"
            >
              introduction
            </motion.h3>
            <motion.p
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              I design and develop services for all sizes, specializing in
              creating stylish, modern websites, web services and online stores.
              My passion is to design digital user experiences through the bold
              interface and meaningful interactions.
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 3 }}
              viewport={{ once: true }}
              className="frontText"
            >
              about me
            </motion.h3>
            <motion.table
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 3 }}
              viewport={{ once: true }}
            >
              <tbody>
                <tr>
                  <th>name</th>
                  <th>Abdelrahman Mohamed</th>
                </tr>
                <tr>
                  <th>age</th>
                  <th>26</th>
                </tr>
                <tr>
                  <th>address</th>
                  <th>Cairo, Egypt</th>
                </tr>
                <tr>
                  <th>phone/whats App</th>
                  <th>
                    <Link
                      href={"https://wa.me/+201110828568"}
                      target="_blank"
                      className="linkText"
                    >
                      (+20) 01110828568
                    </Link>
                  </th>
                </tr>
                <tr>
                  <th>email</th>
                  <th>
                    <Link
                      href={"mailto:abdelrahman.mohamed8568@gmail.com"}
                      target="_blank"
                      className="linkText"
                    >
                      abdelrahman. mohamed8568 @gmail.com
                    </Link>
                  </th>
                </tr>
                <tr>
                  <th>freelance</th>
                  <th>Available</th>
                </tr>
              </tbody>
            </motion.table>
            <div className="cv">
              <a
                className="cvBtn"
                download={"Abdelrahman-Cv.pdf"}
                href="cv/Abdelrahman-Cv.pdf"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  fill="currentColor"
                  className="bi bi-arrow-down-short cvIcon"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
                  />
                </svg>
                <span className="cvIcon2"></span>
                <p>Download CV</p>
              </a>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
