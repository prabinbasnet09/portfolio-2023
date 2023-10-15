import Image from 'next/image';

export default function WorkExperience() {
  return (
    <>
      <div className='text-black'>
        <div className='text-white text-center font-bold text-4xl 2xl:text-6xl mt-10'>
          Career Highlights
        </div>
        <div className='timeline'>
          <div className='container left-container'>
            <div className='company-logo w-10 h-10 rounded-full overflow-hidden bg-white'>
              <img
                src='/images/dxc.png'
                alt='profile picture'
                className='object-fit'
              />
            </div>
            <div className='text-box'>
              <h1>Associate Professional Application Developer</h1>
              <h2>DXC Technology</h2>
              <small>2023-Present</small>
              <p>
                The success of every websites depends on search engine
                optimization and digital marketing strategy. If you are on first
                page of all major search...
              </p>
              <span className='left-container-arrow'></span>
            </div>
          </div>
          <div className='container right-container'>
            <div className='company-logo w-10 h-10 rounded-full overflow-hidden'>
              <img
                src='/images/ulm.png'
                alt='profile picture'
                className='object-fit'
              />
            </div>
            <div className='text-box'>
              <h1>Web Developer Intern</h1>
              <h2>University of Louisiana Monroe</h2>
              <small>2021-2023</small>
              <p>
                The success of every websites depends on search engine
                optimization and digital marketing strategy. If you are on first
                page of all major search...
              </p>
              <span className='right-container-arrow'></span>
            </div>
          </div>
          <div className='container left-container'>
            <div className='company-logo w-10 h-10 rounded-full overflow-hidden'>
              <img
                src='/images/ulm.png'
                alt='profile picture'
                className='object-cover'
              />
            </div>
            <div className='text-box'>
              <h1>President</h1>
              <h2>ACM Student Chapter at ULM</h2>
              <small>2020-2023</small>
              <p>
                The success of every websites depends on search engine
                optimization and digital marketing strategy. If you are on first
                page of all major search...
              </p>
              <span className='left-container-arrow'></span>
            </div>
          </div>
          <div className='container right-container'>
            <div className='company-logo w-10 h-10 rounded-full overflow-hidden bg-white'>
              <img
                src='/images/dxc.png'
                alt='profile picture'
                className='object-fit'
              />
            </div>
            <div className='text-box'>
              <h1>Software Developer Intern</h1>
              <h2>DXC Technology</h2>
              <small>2022-2022</small>
              <p>
                The success of every websites depends on search engine
                optimization and digital marketing strategy. If you are on first
                page of all major search...
              </p>
              <span className='right-container-arrow'></span>
            </div>
          </div>
          <div className='container left-container'>
            <div className='company-logo w-10 h-10 rounded-full overflow-hidden'>
              <img
                src='/images/ulm.png'
                alt='profile picture'
                className='object-cover'
              />
            </div>
            <div className='text-box'>
              <h1>ULM IT HelpDesk Assistant</h1>
              <h2>University of Louisiana Monroe</h2>
              <small>2020-2022</small>
              <p>
                The success of every websites depends on search engine
                optimization and digital marketing strategy. If you are on first
                page of all major search...
              </p>
              <span className='left-container-arrow'></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
