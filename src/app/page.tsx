import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import Expertise from '@/components/sections/Expertise';
import Philosophy from '@/components/sections/Philosophy';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Expertise />
        <Philosophy />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
