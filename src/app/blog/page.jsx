import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Steak from "public/steak.jpg";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href="/blog/testId" className={styles.container} key={item.id}>
          <div>
            <Image
              src={Steak}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}> {item.title} </h1>
            <p className={styles.desc}> Desc </p>
          </div>
        </Link>
      ))}

      {/* <Link href="/blog/testId" className={styles.container}>
        <div>
          <Image
            src={Steak}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test </h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div>
          <Image
            src={Steak}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test </h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link> */}
    </div>
  );
};

export default Blog;
