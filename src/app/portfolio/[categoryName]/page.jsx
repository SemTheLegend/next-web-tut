import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import { notFound } from "next/navigation";
import {item} from "./data";

const getData = (category) => {
  const data = item[category];

  if (data) {
    return data;
  }

  return notFound();
};

const CategoryName = ({ params }) => {
  const data = getData(params.categoryName);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.categoryName}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}> {item.desc} </p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image src={item.image} alt="" fill={true} className={styles.img} />
          </div>
        </div>
      ))}

      {/* <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src={NuggetBurger} alt="" fill={true} className={styles.img} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src={Fries} alt="" fill={true} className={styles.img} />
        </div>
      </div> */}
    </div>
  );
};

export default CategoryName;
