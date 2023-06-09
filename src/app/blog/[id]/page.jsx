import React from "react";
import styles from "./page.module.css";
import Burger1 from "public/burger1.jpg";
import Burger4 from "public/burger4.jpg";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const Post = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsam
            suscipit, similique autem aperiam eos praesentium obcaecati tempora
            porro! Animi praesentium maiores recusandae, accusamus optio quas
            asperiores nihil aliquam cupiditate itaque iure, veniam sit
            reiciendis saepe similique assumenda aliquid? Ullam!
          </p>
          <div className={styles.author}>
            <Image
              src={Burger1}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Burger4} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ab,
          iure laboriosam ipsa odio dignissimos praesentium? Quod, id dolorum
          inventore adipisci obcaecati iure incidunt sapiente nulla quo placeat
          veritatis accusamus tenetur tempora eaque labore molestias in tempore
          quia laborum natus illum?
          <br />
          <br />
          Ducimus in eum laudantium vero eligendi cupiditate, necessitatibus
          explicabo ratione sed? Doloremque cum ipsum fugit reiciendis eligendi
          quas debitis porro cupiditate aut harum necessitatibus vero, odio
          animi, illo possimus magni. Inventore esse id odio, eius, itaque fugit
          a, consequuntur est at natus fuga accusantium maxime pariatur?
          Reiciendis ipsam, quaerat pariatur nobis eos beatae iste nulla tempora
          porro laboriosam in quis. Est dignissimos perspiciatis nihil
          perferendis porro eveniet quae deleniti molestias, earum id illum quia
          ea, soluta explicabo asperiores ut! At dolorum deserunt voluptate
          facilis totam ullam magni doloremque velit tempore quos sequi illum
          natus iusto, aperiam praesentium ratione facere vitae quaerat veniam.{" "}
          <br />
          <br />
          Quaerat modi odio, facilis perferendis accusamus dolorum repellendus
          pariatur veniam quibusdam nobis illo nihil dolorem commodi tempore
          animi deleniti cupiditate ad corporis ipsum nulla quia ratione! A,
          quam commodi illum in voluptatem eos similique voluptatibus ea amet
          officiis, numquam optio hic iste consequatur doloremque facere
          incidunt quasi obcaecati reiciendis id excepturi? Fugit iste ad veniam
          consectetur ea dignissimos harum, rerum quis saepe earum quod
          laudantium quam ullam assumenda quibusdam ipsam sunt voluptatem
          perspiciatis distinctio! Saepe dolores iste incidunt laborum repellat
          consequuntur, rem, ut ipsum adipisci autem recusandae perspiciatis
          natus nihil commodi suscipit quidem porro voluptatibus! Fuga nam fugit
          in eum sequi quaerat eligendi suscipit dolor laudantium non.
        </p>
      </div>
    </div>
  );
};

export default Post;
