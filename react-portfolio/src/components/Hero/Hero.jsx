import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aruna</h1>
        <p className={styles.description}>
          I'm a Frontend developer with 1.4 years of experience using React and
          NodeJS.
        </p>
        <div className={styles.divAlign}>
        <a href="mailto:aru583m@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a target="_blank" href="https://github.com/Aruna583" className={styles.contactBtn}>Browse My Work</a>
        </div>
        
      </div>
      <img
        src={getImageUrl("MainIcon/mainIcon.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
