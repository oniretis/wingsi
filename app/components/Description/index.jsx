"use client";

import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../common/RoundedButton";

export default function index() {
  const phrase =
    "Our global movement includes member Sections and Groups in Nigeria and Ghana with hopes to expand our reach to other African countries. We promote and amplify the voices of women and allies who are advancing peaceful and sustainable alternatives to crises and conflicts and human rights issues.. 💁";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div className="mb-32" id="aboutus">
      <div ref={description} className={styles.description}>
        <div className={styles.body}>
          <p className="text-sm">
            {phrase.split(" ").map((word, index) => {
              return (
                <span key={index} className={styles.mask}>
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? "open" : "closed"}
                    key={index}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
          {/* <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </motion.p> */}
          <div
            data-scroll
            data-scroll-speed={0.1}
            className="absolute right-0 mt-24 mb-24 top-36"
          >
            <Rounded className={styles.button}>
              <p>Read More</p>
            </Rounded>
          </div>
        </div>
      </div>
      {/* <img
        className="block mx-auto"
        src="https://shuffle.dev/aurora-assets/headers/header-dark-theme-center.png"
        alt=""
      /> */}
    </div>
  );
}
