import Image from 'next/image';
import WelcomePage from './_components/WelcomePage';
import Profile from './_components/Profile';
import Timeline from './_components/WorkExperience';
import Achievements from './_components/Achievements';
import Skills from './_components/Skills';
import Projects from './_components/Projects';
import WorkExperience from './_components/WorkExperience';
import Navbar from './_components/Navbar';
import { Contact } from './_components/Contact';
import { Footer } from './_components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <WelcomePage />
      <Profile />
      <WorkExperience />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}
