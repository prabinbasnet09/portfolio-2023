import { CiCircleChevDown } from 'react-icons/ci';
import { AnimatedText } from '../utils/AnimatedText';
import { TextFadeIn } from '../utils/TextFadeIn';

export default function WelcomePage() {
  return (
    <div className='welcome overflow-hidden h-[100svh]  '>
      {/* background image */}
      {/* bg-[url('../../public/images/home-bg.jpg')] */}
      <div
        className='
          flex
          justify-center
          items-center
          w-full
          h-[100svh]
          relative
          overflow-hidden
          z-10
          bg-[url("../../public/images/home-bg.jpg")] 
         bg-[#161616]
          bg-cover
          bg-no-repeat
          bg-center
        '
      >
        {/* overlay */}
        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-full
            bg-gradient-to-r from-white-50 to-white-10
            backdrop-blur-3xl /* Increase the blur value to 'md' */
            opacity-50
            z-[-5]
            overflow-hidden
          "
        ></div>

        {/* Welcome Page Nav */}
        <div className='absolute w-full text-white top-3 '>
          <div className='flex justify-between '>
            <div className='pl-5 text-lg 4xl:text-2xl font-bold font-mono'>
              Prabin Basnet
            </div>
          </div>
        </div>
        <div>
          <AnimatedText
            text={['Not Your', 'Average', 'Software Engineer!']}
            className=' font-mono
              text-white 
              text-4xl
              border-4 
              text-center
              lg:text-6xl 4xl:text-8xl
              font-bold 
              tracking-[0.06em]
              p-5
              m-10 
              lg:p-20 
              relative 
              z-10'
          />
          <TextFadeIn>
            <div className='text-white font-sans font-bold tracking-wider text-center text-[20px] 2xl:text-2xl 4xl:text-4xl pb-10 md:ml-1 md:mr-1 md:p-2'>
              Get ready to turn your ideas into reality!
            </div>
          </TextFadeIn>
        </div>
        <div className='text-white absolute bottom-3 text-4xl animate-bounce'>
          <CiCircleChevDown />
        </div>
      </div>
    </div>
  );
}
