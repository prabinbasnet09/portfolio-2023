import Navbar from './Navbar';

export default function WelcomePage() {
  return (
    <>
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

        <div className='absolute w-full text-white top-5'>
          <div className='flex justify-between'>
            <div className='pl-5 text-l sm:text-3xl font-bold font-mono'>
              Prabin Basnet
            </div>
            <div className='pr-5 text-l sm:text-4xl font-bold'>=</div>
          </div>
        </div>

        <div>
          <div
            className='
                    text-white 
                      text-4xl 
                      border-4
                      border-red-500
                      text-center
                      sm:text-5xl sm:text-center md:text-6xl lg:text-8xl 
                      font-bold 
                      tracking-[0.06em]
                      p-10
                      m-10 
                      sm:p-20 md:p-20 
                      relative 
                      z-10
                      '
          >
            Not Your <br /> Average <br /> Software Engineer!
          </div>
          <div className='text-white font-bold tracking-wider text-center sm:text-3xl md:text-4xl lg-text-6xl bg-red-500 md:ml-1 md:mr-1 md:p-2'>
            Get ready to turn your ideas into reality!
          </div>
        </div>
        <div className='text-white absolute bottom-10 text-4xl animate-bounce'>
          O
        </div>
      </div>
    </>
  );
}
