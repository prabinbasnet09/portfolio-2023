import TypingEffect from "./TypingEffect";
import Image from "next/image";

const content = `<div className='w-full sm:w-fit sm:h-fit sm:ml-10 text-white'>
    <div className='w-full p-3 flex-col space-y-5 border bg-sky-950 
                    rounded-lg shadow-inner md:mt-40 bg'>
      <div className='flex items-center justify-center'>
        <div className='mx-auto w-20 h-20 rounded-full overflow-hidden '>
          <Image
            src="/images/developer-prabin.webp"
            width={150}
            height={150}
            alt="Picture of the Developer"
            className="object-cover"
          />
        </div>
      </div>
      <div className='mt-5 text-center'>
        <div>Hi! I&apos;m Prabin Basnet</div>
        <div>
          I am a full stack developer with over 3+ years of experience.
        </div>
      </div>
    </div>
  </div> `;

export default function Profile() {
  return (
    <>
      {/* bg-[#26233a] */}
      <div className="mt-20  w-full">
        <div className="text-white text-center text-4xl font-bold">
          Your Next Software Engineer
        </div>
        <div className="">
          <div className="sm:flex sm:flex-wrap space-y-5 sm:justify-center p-5 sm:p-10 mt-10">
            <div className="bg-[rgb(36,41,47)] w-full sm:w-1/2 lg:w-3/6 rounded-t-2xl sm:rounded-2xl shadow-lg border">
              <div className="bg-[#161b22] h-[5vh] sm:h-[4vh] lg:h-[4vh] 2xl:h-[3vh] rounded-t-2xl border ">
                <div className="flex justify-between w-[10vh] sm:w-[6vh] h-full items-center ml-5">
                  <div className="bg-green-300 w-[2vh] h-[2vh] sm:w-[1vh] sm:h-[1vh] rounded-full"></div>
                  <div className="bg-orange-300 w-[2vh] h-[2vh] sm:w-[1vh] sm:h-[1vh] rounded-full"></div>
                  <div className="bg-red-500 w-[2vh] h-[2vh] sm:w-[1vh] sm:h-[1vh] rounded-full"></div>
                </div>
              </div>
              <div className="p-2 overflow-auto flex-grow min-h-[400px] sm:min-h-[450px text-sm text-white">
                <TypingEffect content={content} speed={100} />
              </div>
            </div>

            <div className="w-full sm:w-fit sm:h-fit sm:ml-10 text-white">
              <div className="w-full p-3 flex-col space-y-5 border bg-sky-950 rounded-lg shadow-inner md:mt-40 bg">
                <div className="flex items-center justify-center">
                  <div className="mx-auto w-20 h-20 rounded-full overflow-hidden ">
                    <Image
                      src="/images/developer-prabin.webp"
                      width={150}
                      height={150}
                      alt="Picture of the Developer"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <div>Hi! I&apos;m Prabin Basnet</div>
                  <div>
                    I am a full stack developer with over 3+ years of
                    experience.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
