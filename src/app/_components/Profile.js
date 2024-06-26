import TypingEffect from '../utils/TypingEffect';
import Image from 'next/image';
import ProfilePicture from '/public/images/developer-prabin.webp';
import Link from 'next/link';

const content = `<div className='w-full  text-white '>
<div className='w-full h-full p-3 flex flex-col sm:flex-row sm: sm:space-y-10 sm:space-x-5 
                rounded-lg shadow-inner '>
  <div className='flex items-center justify-center'>
    <div className='mx-auto max-w-[450px] max-h-[450px] rounded-lg'>...</div>
  </div>
  <div className='text-xl w-full'>
    <h2 className='font-bold text-2xl pl-5 pt-5 text-[#f9a8d4] tracking-widest'>
      ABOUT ME
    </h2>
    <h1 className='font-bold text-4xl p-5'>
      I'm{' '}
      <span className='text-[#d8b4fe] tracking-widest'>
        Prabin Basnet
      </span>
    </h1>
    <p className='p-5 pt-0 tracking-widest font-light'>...</p>
    <ul></ul>
  </div>
</div>
</div> `;

export default function Profile() {
  return (
    <>
      {/* bg-[#26233a]  p-20*/}
      <div className='pt-36 w-auto' id='home'>
        <div className='p-4 text-center text-4xl xl:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-500 bg-clip-text text-transparent'>
          Your Next Software Engineer
        </div>
        <div className='2xl:flex 2xl:items-center 2xl:justify-center'>
          <div className='space-y-5 xl:space-y-0 xl:space-x-5 2xl:space-x-10  xl:grid xl:grid-cols-2 2xl:gap-5 2xl:justify-items-center 2xl:w-[2800px] p-5 sm:p-10 mt-10 '>
            <div className='w-full 4xl:max-w-[1200px] '>
              <div className='bg-[rgb(36,41,47)] w-full rounded-t-2xl sm:rounded-2xl shadow-lg '>
                <div className='bg-[#161b22] h-[5vh] sm:h-[4vh] lg:h-[3vh] 2xl:h-[3vh] 4xl:h-[3vh] rounded-t-2xl '>
                  <div className='flex justify-between w-[8vh] sm:w-[6vh] h-full items-center ml-5'>
                    <div className='bg-green-300 w-[1.5vh] h-[1.5vh] sm:w-[1vh] sm:h-[1vh] rounded-full'></div>
                    <div className='bg-orange-300 w-[1.5vh] h-[1.5vh] sm:w-[1vh] sm:h-[1vh] rounded-full'></div>
                    <div className='bg-red-500 w-[1.5vh] h-[1.5vh] sm:w-[1vh] sm:h-[1vh] rounded-full'></div>
                  </div>
                </div>
                <div className='p-2 overflow-auto flex-grow min-h-[450px] text-sm text-white font-mono'>
                  <TypingEffect content={content} speed={100} />
                </div>
              </div>
            </div>

            <div className='w-full h-full p-3 flex flex-col space-y-5 lg:space-y-0  sm:flex-row sm:justify-center sm:items-center sm:space-x-5 rounded-lg shadow-inner '>
              <div className='m-auto '>
                <div className='mx-auto max-w-[480px]'>
                  <Image
                    src={ProfilePicture}
                    alt='profile picture'
                    unoptimized={true}
                    className='rounded-lg w-full'
                  />
                </div>
              </div>

              <div className='text-xl pl-3 w-full pt-5 lg:pt-0 '>
                <p className='font-bold sm:text-2xl pb-3 text-[#f9a8d4] tracking-widest'>
                  ABOUT ME
                </p>
                <p className='font-bold sm:text-4xl pb-3 xl:text-2xl '>
                  I&apos;m{' '}
                  <span className='text-[#d8b4fe] tracking-widest'>
                    Prabin Basnet
                  </span>
                </p>
                <p className='pb-3  tracking-widest font-light text-md sm:text-lg 4xl:max-w-[600px] xl:hidden 2xl:block'>
                  &quot;Coding is my canvas, and technology is my paintbrush.
                  With 3+ years of experience and a passion for staying on the
                  cutting edge, I bring artistry and innovation to every
                  project. From front-end finesse to back-end brilliance,
                  I&apos;m your versatile developer ready to turn your vision
                  into reality.&quot;
                </p>
                <p className='pb-3  tracking-widest font-light text-md sm:text-lg 4xl:max-w-[600px] hidden xl:block 2xl:hidden'>
                  &quot;As a seasoned developer with 3+ years of experience, I
                  blend artistry and innovation to bring your vision to life,
                  whether it&apos;s front-end finesse or back-end
                  brilliance.&quot;
                </p>
                <ul></ul>
                <div className='flex flex-wrap gap-5 md:items-center h-full 4xl:justify-start pt-3 '>
                  <Link
                    href='https://www.linkedin.com/in/prabin-basnet/'
                    target='blank'
                    className='p-3 font-mono font-semibold rounded-lg bg-gradient-to-r from-[#649173] to-[#dbd5a4] hover:from-pink-500 hover:to-yellow-500 hover:cursor-pointer'
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href='https://github.com/prabinbasnet09'
                    target='blank'
                    className='p-3  font-mono font-semibold rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 hover:cursor-pointer '
                  >
                    Github
                  </Link>
                  <Link
                    href='https://drive.google.com/file/d/1Q1cRrHTbpu0uPyiiC0ck38SXb6tgjA9o/view?usp=sharing'
                    target='blank'
                    className='p-3 md:mt-0 rounded-lg font-mono font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 '
                  >
                    Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
