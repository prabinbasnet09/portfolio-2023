import Navbar from './_components/Navbar';
import './globals.css';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Prabin Basnet',
  description: 'Latest Dev Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className="bg-[#261f3a] text-white">
        <Navbar />
        {children}
        </body>
    </html>
  );
}
