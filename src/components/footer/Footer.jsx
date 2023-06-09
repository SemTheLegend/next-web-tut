import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 Lamamia. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/customer.png" width={30} height={30} className={styles.icon} alt="Lama Dev IG Account" />
        <Image src="/profile.png" width={30} height={30} className={styles.icon} alt="Lama Dev Facebook Account" />
        <Image src="/video.png" width={30} height={30} className={styles.icon} alt="Lama Dev YouTube Account" />
        <Image src="/social-media.png" width={30} height={30} className={styles.icon} alt="Lama Dev Twitter Account" />
      </div>
    </div>
  )
}

export default Footer

