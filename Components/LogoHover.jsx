'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from '../app/page.module.css'

export default function LogoHover({ className }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
    className={styles.logo2}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <Image
        className={styles.logoImage}
        src={isHovered ? '/logo.png' : '/logo2.png'}
        alt="Logo representing my portfolio"
        width={200}
        height={200}
      />
    </div>
  );
}