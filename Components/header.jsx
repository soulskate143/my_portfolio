"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import styles from "../src/app/page.module.css";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0); // Use useRef to store last scroll position

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setVisible(false); // Hide on scroll down
      } else {
        setVisible(true); // Show on scroll up
      }
      lastScrollY.current = window.scrollY; // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${visible ? styles.visible : styles.hidden}`}>
      <nav className={styles.nav}>
        <div className={styles.branding}>
          <Link href="/" className={styles.logoLink}>
            <Image
              className={styles.logo}
              src="/mt.png"
              alt="My Portfolio Logo"
              width={120}
              height={100}
              unoptimized
            />
          </Link>
        </div>

        <ul className={styles.navList}>
          <li><Link href="/" className={styles.navItem}>Home</Link></li>
          <li><Link href="/about" className={styles.navItem}>About</Link></li>
          <li><Link href="/projects" className={styles.navItem}>Projects</Link></li>
          <li><Link href="/contact" className={styles.navItem}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
