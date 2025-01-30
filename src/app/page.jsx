import Header from '../../Components/header';
import styles from '../app/page.module.css'; 
import Image from 'next/image';
import Footer from '../../Components/footer';

export default function Home() {
  return (
    <div>
      <Header />

      <Image
              className={styles.logo2}
              src="/logo2.png"
              alt="My Portfolio Logo"
              width={200}
              height={200}
              unoptimized
            />
      <h1>Welcome to My Portfolio!</h1>
      <p>I am a web developer, passionate about building modern, interactive applications.</p>
    
    </div>
  );
}
