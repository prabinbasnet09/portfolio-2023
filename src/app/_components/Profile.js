import TypingEffect from './TypingEffect';
import Image from 'next/image';

const content = `<div className='w-full  text-white '>
<div className='w-full h-full p-3 flex flex-col sm:flex-row sm: sm:space-y-10 sm:space-x-5 rounded-lg shadow-inner '>
  <div className='flex items-center justify-center'>
    <div className='mx-auto max-w-[450px] max-h-[450px] rounded-lg'>
      <img
        src='/images/developer-prabin.webp'
        alt='Picture of the Developer'
        className='object-fit'
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
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
    <p className='p-5 pt-0 tracking-widest font-light'>
      "Coding is my canvas, and technology is my paintbrush. With
      3+ years of experience and a passion for staying on the
      cutting edge, I bring artistry and innovation to every
      project. From front-end finesse to back-end brilliance, I'm
      your versatile developer ready to turn your vision into
      reality."
    </p>
    <ul></ul>
  </div>
</div>
</div> `;

export default function Profile() {
  return (
    <>
      {/* bg-[#26233a] */}
      <div className='mt-20  w-full'>
        <div className='text-white text-center text-4xl 2xl:text-6xl font-bold'>
          Your Next Software Engineer
        </div>
        <div className='2xl:flex 2xl:items-center 2xl:justify-center '>
          <div className='space-y-5 sm:space-x-10 xl:grid xl:grid-cols-2 xl:gap-5 2xl:justify-items-center 2xl:w-[2800px] p-5 sm:p-10 mt-10'>
            <div className='w-full'>
              <div className='bg-[rgb(36,41,47)] w-full rounded-t-2xl sm:rounded-2xl shadow-lg'>
                <div className='bg-[#161b22] h-[5vh] sm:h-[4vh] lg:h-[4vh] 2xl:h-[3vh] rounded-t-2xl '>
                  <div className='flex justify-between w-[8vh] sm:w-[6vh] h-full items-center ml-5'>
                    <div className='bg-green-300 w-[1.5vh] h-[1.5vh] sm:w-[1vh] sm:h-[1vh] rounded-full'></div>
                    <div className='bg-orange-300 w-[1.5vh] h-[1.5vh] sm:w-[1vh] sm:h-[1vh] rounded-full'></div>
                    <div className='bg-red-500 w-[1.5vh] h-[1.5vh] sm:w-[1vh] sm:h-[1vh] rounded-full'></div>
                  </div>
                </div>
                <div className='p-2 overflow-auto flex-grow min-h-[200px] sm:min-h-[250px] text-sm text-white'>
                  <TypingEffect content={content} speed={100} />
                </div>
              </div>
            </div>

            <div className='w-full  text-white '>
              <div className='w-full h-full p-3 flex flex-col sm:flex-row sm: sm:space-y-10 sm:space-x-5 rounded-lg shadow-inner '>
                <div className=''>
                  <div className='mx-auto max-w-[450px] max-h-[450px] rounded-lg'>
                    <img
                      src='/images/developer-prabin.webp'
                      alt='Picture of the Developer'
                      className='object-fit'
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                  </div>
                </div>
                <div className='text-xl w-full'>
                  <h2 className='font-bold text-lg sm:text-2xl pl-5  text-[#f9a8d4] tracking-widest'>
                    ABOUT ME
                  </h2>
                  <h1 className='font-bold text-xl sm:text-4xl p-5'>
                    I'm{' '}
                    <span className='text-[#d8b4fe] tracking-widest'>
                      Prabin Basnet
                    </span>
                  </h1>
                  <p className='p-5 pt-0 tracking-widest font-light text-md sm:text-lg'>
                    "Coding is my canvas, and technology is my paintbrush. With
                    3+ years of experience and a passion for staying on the
                    cutting edge, I bring artistry and innovation to every
                    project. From front-end finesse to back-end brilliance, I'm
                    your versatile developer ready to turn your vision into
                    reality."
                  </p>
                  <ul></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
