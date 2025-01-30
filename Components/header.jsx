import Link from 'next/link';
import Image from 'next/image';
import styles from '../src/app/page.module.css'; // Import CSS module

export default function Header() {
  return (
    <header className={styles.header}>
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
