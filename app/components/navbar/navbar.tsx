"use client";
import "@/app/styles/navbar.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);
  const [activeToggle, setActiveToggle] = useState(false);
  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);
  const toggle = () => {
    setActiveToggle(false);
  };
  return (
    <>
      <div
        className={`${activeToggle === true ? "containerMedia" : "container"}`}
      >
        <ul className={` ${activeToggle === true ? "ulToggle" : ""}`}>
          <li>
            <Link
              href="/"
              className={`navLink ${activeLink === "/" ? "active" : ""}`}
              onClick={toggle}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              as={"/services"}
              className={`navLink ${
                activeLink === "/services" ? "active" : ""
              }`}
              onClick={toggle}
            >
              services
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              as={"/portfolio"}
              className={`navLink ${
                activeLink === "/portfolio" ? "active" : ""
              }`}
              onClick={toggle}
            >
              portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`navLink ${activeLink === "/contact" ? "active" : ""}`}
              onClick={toggle}
            >
              contact
            </Link>
          </li>
        </ul>
        <div id="menuToggle">
          <input
            id="checkbox"
            type="checkbox"
            checked={activeToggle}
            onChange={() => setActiveToggle(!activeToggle)}
          />
          <label className="toggle" htmlFor="checkbox">
            <div className="bar bar--top"></div>
            <div className="bar bar--middle"></div>
            <div className="bar bar--bottom"></div>
          </label>
        </div>
      </div>
    </>
  );
}

export default Navbar;
