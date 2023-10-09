import Image from 'next/image';
import WelcomePage from './_components/WelcomePage';
import Profile from './_components/Profile';
import Navbar from './_components/Navbar';

export default function Home() {
  return (
    <>
      <div>
        <WelcomePage />
        <Navbar />
        <Profile />
      </div>
    </>
  );
}
