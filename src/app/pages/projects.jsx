import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Projects() {
  return (
    <div>
      <Header />
      <h1>My Projects</h1>
      <p>Here are some of the projects I've worked on:</p>
      <ul>
        <li><a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">Project 1</a></li>
        <li><a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">Project 2</a></li>
      </ul>
      <Footer />
    </div>
  );
}
