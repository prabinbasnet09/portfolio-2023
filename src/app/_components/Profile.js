import TypingEffect from './TypingEffect';

const content = `package main
type Run struct {
    Time int // in milliseconds
    Results string
    Failed bool
}
// Get average runtime of successful runs in seconds
func averageRuntimeInSeconds(runs []Run) float64 {
    var totalTime int
    var failedRuns int
    for _, run := range runs {
        if run.Failed {
            failedRuns++
        } else {
            totalTime += run.Time
        }
    }
    averageRuntime := float64(totalTime) / float64(len(runs) - failedRuns) / 1000
    return averageRuntimes`;

export default function Profile() {
  return (
    <>
      <div className='bg-[#26233a] w-full h-[100vh]'>
        <div className='text-white text-center mt-36'>
          Your Next Software Engineer
        </div>
        <div className='p-3 text-white flex-row justify-around space-x-5 mt-36'>
          <div className='bg-[#24292f] w-full lg:w-3/6 rounded-2xl shadow-lg'>
            <div className='bg-[#161b22] h-[5vh] sm:h-[3vh] lg:h-[4vh]  rounded-t-2xl '>
              <div className='flex justify-between w-[10vh] sm:w-[6vh] h-full items-center ml-5'>
                <div className='bg-green-300 w-[2vh] h-[2vh] sm:w-[1.3vh] sm:h-[1.3vh] rounded-full'></div>
                <div className='bg-orange-300 w-[2vh] h-[2vh] sm:w-[1.3vh] sm:h-[1.3vh] rounded-full'></div>
                <div className='bg-red-500 w-[2vh] h-[2vh] sm:w-[1.3vh] sm:h-[1.3vh] rounded-full'></div>
              </div>
            </div>
            <div className='p-2 overflow-auto flex-grow text-lg md:text-xl'>
              <TypingEffect content={content} speed={100} />
            </div>
          </div>
          <div>
            <div className=' bg-green-400 w-2/6 p-3 flex space-x-5'>
              <div>
                <img
                  src='/images/home.jpg'
                  alt='profile'
                  className='rounded-2xl w-[30vh]'
                />
              </div>

              <div>
                <div>ABOUT ME</div>
                <div>Hi! I'm Prabin Basnet</div>
                <div>
                  I am a full stack developer with over 3+ years of experience.
                </div>
                <div>
                  I love doing following things.
                  <ul>
                    <li>Eat</li>
                    <li>Sleep</li>
                    <li>Repeat</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
