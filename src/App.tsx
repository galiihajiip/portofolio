import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import {
  Hero,
  About,
  Education,
  Experience,
  Organization,
  Projects,
  CaseStudy,
  Certifications,
  Achievements,
  Contact,
} from './components/sections';

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Organization />
        <Projects />
        <CaseStudy />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
