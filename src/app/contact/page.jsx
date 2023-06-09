import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import Salad from "public/salad.jpg";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src={Salad} alt="" fill={true} className={styles.image} />
        </div>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="name"
            className={styles.input}
          ></input>
          <input
            type="text"
            placeholder="email"
            className={styles.input}
          ></input>
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols={30}
            rows={10}
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
