"use client";
import { motion } from "framer-motion";
function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        className="template"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 1 }}
      ></motion.div>
      {children}
    </>
  );
}

export default Template;
