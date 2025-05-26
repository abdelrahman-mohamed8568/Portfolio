"use client";
import "../styles/portfolio.css";
import Footer from "../components/footer/footer";
import card1 from "@/public/images/cards/card1.jpg";
import card2 from "@/public/images/cards/card2.jpg";
import card3 from "@/public/images/cards/card3.jpg";
import card4 from "@/public/images/cards/card4.jpg";
import card5 from "@/public/images/cards/card5.jpg";
import html from "@/public/images/skills/html.svg";
import css from "@/public/images/skills/css.svg";
import bootstrap from "@/public/images/skills/bootstrap.svg";
import js from "@/public/images/skills/js.svg";
import git from "@/public/images/skills/git.svg";
import github from "@/public/images/skills/github.svg";
import swiper from "@/public/images/skills/swiper.svg";
import react from "@/public/images/skills/react.svg";
import dom from "@/public/images/skills/dom.svg";
import redux from "@/public/images/skills/redux.svg";
import netlify from "@/public/images/skills/netlify.svg";
import next from "@/public/images/skills/next.svg";
import ts from "@/public/images/skills/ts.svg";
import framer from "@/public/images/skills/motion.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <div className="mainContainer">
      <motion.h3
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
        className="frontText"
      >
        Portfolio
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="portfolioContainer"
      >
        <p>Some Recent Work</p>
        <div className="cardsContainer">
          <div className="portfolioCard">
            <div className="imgLink">
              <Image src={card5} alt="" className="img" priority />
              <Link
                href={"https://aurabeautyeg.com/"}
                className="portfolioLink"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </Link>
              <Link
                href={"https://github.com/abdelrahman-mohamed8568/aura-beauty"}
                className="cardGit"
                target="_blank"
              >
                GitHub
              </Link>
            </div>
            <h4>Aura Beauty</h4>
          </div>
          <div className="portfolioCard">
            <div className="imgLink">
              <Image src={card4} alt="" className="img" priority />
              <Link
                href={"https://pop-movie-demo.netlify.app/"}
                className="portfolioLink"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </Link>
              <Link
                href={"https://github.com/abdelrahman-mohamed8568/Movie"}
                className="cardGit"
                target="_blank"
              >
                GitHub
              </Link>
            </div>
            <h4>Pop Movie</h4>
          </div>
          <div className="portfolioCard">
            <div className="imgLink">
              <Image src={card3} alt="" className="img" priority />
              <Link
                href={"https://z-book.netlify.app/"}
                className="portfolioLink"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </Link>
              <Link
                href={"https://github.com/abdelrahman-mohamed8568/Z-Book"}
                className="cardGit"
                target="_blank"
              >
                GitHub
              </Link>
            </div>
            <h4>Z Book</h4>
          </div>
          <div className="portfolioCard">
            <div className="imgLink">
              <Image src={card2} alt="" className="img" priority />
              <Link
                href={"https://abdelrahman-mohamed8568.github.io/cruds/"}
                className="portfolioLink"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </Link>
              <Link
                href={"https://github.com/abdelrahman-mohamed8568/cruds"}
                className="cardGit"
                target="_blank"
              >
                GitHub
              </Link>
            </div>
            <h4>Cards</h4>
          </div>
          <div className="portfolioCard">
            <div className="imgLink">
              <Image src={card1} alt="" className="img" priority />
              <Link
                href={"https://abdelrahman-mohamed8568.github.io/Portfolio/"}
                className="portfolioLink"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </Link>
              <Link
                href={
                  "https://github.com/abdelrahman-mohamed8568/Old-Portfolio"
                }
                className="cardGit"
                target="_blank"
              >
                GitHub
              </Link>
            </div>
            <h4>old portfolio</h4>
          </div>
        </div>
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
        className="frontText"
      >
        skills
      </motion.h3>
      <div className="skills">
        {[
          html,
          css,
          bootstrap,
          js,
          git,
          github,
          swiper,
          react,
          dom,
          redux,
          netlify,
          next,
          ts,
          framer,
        ].map((image, index) => (
          <motion.img
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: index * 0.3 }}
            viewport={{ once: true }}
            key={index}
            src={image.src}
            alt="Logo Image"
            className="skillsLogo"
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
