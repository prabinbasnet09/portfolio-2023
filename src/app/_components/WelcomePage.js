import Navbar from './Navbar';

export default function WelcomePage() {
  return (
    <>
    {/* background image */}
      <div
        className="
          flex
          justify-center
          items-center
          w-full
          h-screen
          relative
          overflow-hidden
          z-10
          bg-[url('../../public/images/home-bg.jpg')]
          bg-cover
          bg-no-repeat
          bg-center

        "
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
            backdrop-blur-2xl /* Increase the blur value to 'md' */
            opacity-50
            z-[-5]
          "
        ></div>

        {/* Welcome Page Nav */}
        <div className='absolute w-full text-white top-3'>
          <div className='flex justify-between bg-red-500'>
            <div className='pl-5 text-md lg:text-2xl font-bold font-mono'>
              Prabin Basnet
            </div>
            <div className='pr-5 text-md lg:text-2xl font-bold'>=</div>
          </div>
        </div>

        <div>
          <div
            className='
                    text-white 
                    text-4xl
                    border-4 border-red-500
                    text-center
                    lg:text-6xl 2xl:text-8xl
                    font-bold 
                    tracking-[0.06em]
                    p-10
                    m-10 
                    lg:p-20 
                    relative 
                    z-10
                  '
          >
            Not Your <br /> Average <br /> Software Engineer!
          </div>
          <div className='text-white font-bold tracking-wider text-center 2xl:text-4xl bg-red-500 md:ml-1 md:mr-1 md:p-2'>
            Get ready to turn your ideas into reality!
          </div>
        </div>
        <div className='text-white absolute bottom-0 text-4xl animate-bounce'>
          O
        </div>
      </div>
    </>
  );
}
