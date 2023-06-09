import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import cheeseBurger from "public/cheese-burger.jpg";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={cheeseBurger}
          fill={true}
          alt="Cheese Burger"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital StoryTellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis a, illo ea unde deserunt odit iste cumque sapiente
            reprehenderit omnis praesentium maiores odio?
            <br />
            <br />
            Earum ea laudantium eius illum libero! Repudiandae dolor
            perspiciatis neque veniam alias quae ab fugiat ipsum, vel, ipsa ea
            dicta non saepe pariatur incidunt.
            <br />
            <br />
            Quia earum harum corporis amet nemo nostrum ratione, sed quaerat ut
            nobis dignissimos pariatur totam unde, perferendis cumque id
            cupiditate!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi autem
            tenetur temporibus, fugit aliquid dolores reiciendis facere eaque
            ipsam quas. Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
