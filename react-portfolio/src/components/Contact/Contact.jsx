import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailicon.png")} alt="Email icon" />
          <a href="mailto:aru583m@gmail.com">aru583m@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinicon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/aruna-m-4a1925139/">linkedin.com/aruna</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubicon.png")} alt="Github icon" />
          <a href="https://github.com/Aruna583">github.com/Aruna583</a>
        </li>
      </ul>
    </footer>
  );
};
