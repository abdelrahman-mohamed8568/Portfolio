"use client";
import "@/app/styles/cover.css";
import Image from "next/image";
import cover from "@/public/images/home/cover.jpg";
import { font2 } from "@/public/fonts/font";
import { useEffect, useState } from "react";

function Home() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="coverContainer">
      <Image src={cover} alt="Cover Image" className="homeCover" priority />
      <div
        className="text"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <h6>HI THERE! I AM</h6>
        <h1 className={font2}>
          ABD<span className="nameSpan">E</span>LRAHMAN
        </h1>
        <h4>
          <span className="textSpan">{`<`}</span>FRONT<span>-</span>END
          DEVELOPER
          <span className="textSpan">{`>`}</span>
        </h4>
      </div>
    </div>
  );
}

export default Home;
