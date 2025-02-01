import Header from '../../Components/header';
import styles from '../app/page.module.css';
import Image from 'next/image';
import Footer from '../../Components/footer';
import About from '../../Components/about';
import LogoHover from '../../Components/LogoHover';

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlass}>
        <LogoHover className={styles.logo2}/>
          <h1 className={styles.title}>Building the Future of Web and IoT</h1>
          <p className={styles.subtitle}>
            As a versatile developer, I craft immersive, futuristic web experiences and innovative hardware IoT solutions.
          </p>
          <div className={styles.buttons}>
            <a href="/projects" className={styles.button} aria-label="Explore My Work">Explore My Work</a>
            <a href="/contact" className={styles.buttonOutline} aria-label="Get in Touch">Get in Touch</a>
          </div>
        </div>
      </section>

      <About /> {/* Use the About component */}

      {/* Footer */}
      <Footer />
    </main>
  );
}