import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutme.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <div className={styles.aboutItems}>
          
          <div className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" /> */}
            <div className={styles.aboutItemText}>
              <h3></h3>
              <p>
              Hi, I'm Aruna, a passionate Frontend Developer with over 1 year and 4 months of experience as an Associate Software Engineer. 
              I hold a bachelor's degree in Electronics and Communication, which has given me a solid foundation in problem-solving and technical skills.
            In my work, I've honed expertise in React, Redux, Tailwind CSS, Jest, and GraphQL, developing dynamic and responsive web applications.
            Some of my key projects include creating a weather dashboard tailored for different user roles and transforming a form-based website builder 
            into a drag-and-drop interface, focusing on user experience and scalability. I thrive on solving complex challenges, collaborating with teams,
             and staying up to date with the latest web technologies.
            I'm now seeking exciting opportunities where I can continue building impactful, user-centered solutions and contribute to innovative projects. 
            Whether it's within a startup or a large team, I’m eager to work in an environment that fosters creativity and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
