import Image from 'next/image';

export default function WorkExperience() {
  return (
    <div className='pt-20 text-black' id='experiences'>
      <div className='text-white text-center font-bold text-4xl 2xl:text-6xl pb-10 '>
        Career Highlights
      </div>
      <div className='timeline'>
        <div className='container left-container'>
          <div className='company-logo w-10 h-10 rounded-full overflow-hidden bg-white'>
            <Image
              src='/images/dxc.png'
              width={100}
              height={100}
              alt='profile picture'
              className='object-fit'
              unoptimized={true}
            />
          </div>
          <div className='text-box '>
            <h1>Associate Professional Application Developer</h1>
            <h2>DXC Technology</h2>
            <small>2023-Present</small>
            <ul className='list-disc ml-5 tracking-wide space-y-5'>
              <li>
                Developed and maintained a web application for a client using
                React, Redux, and Material UI.
              </li>
              <li>
                Developed and maintained a web application for a client using
                React, Redux, and Material UI.
              </li>
              <li>
                Developed and maintained a web application for a client using
                React, Redux, and Material UI.
              </li>
              <li>
                Developed and maintained a web application for a client using
                React, Redux, and Material UI.
              </li>
            </ul>
            <span className='left-container-arrow'></span>
          </div>
        </div>
        <div className='container right-container'>
          <div className='company-logo w-10 h-10 rounded-full overflow-hidden'>
            <Image
              src='/images/ulm.png'
              width={100}
              height={100}
              unoptimized={true}
              alt='profile picture'
              className='object-fit'
            />
          </div>
          <div className='text-box'>
            <h1>Web Developer Intern</h1>
            <h2>University of Louisiana Monroe</h2>
            <small>2021-2023</small>
            <ul className='list-disc ml-5 tracking-wide space-y-5'>
              <li>
                Developed and maintained a web application for a client using
                React, Redux, and Material UI.
              </li>
              <li>
                Developed and maintained a web application for a client using
                React, Redux, and Material UI.
              </li>
              <li>
                Developed and maintained a web application for a client using
                React, Redux, and Material UI.
              </li>
              <li>
                Developed and maintained a web application for a client using
                React, Redux, and Material UI.
              </li>
            </ul>
            <span className='right-container-arrow'></span>
          </div>
        </div>
        <div className='container left-container'>
          <div className='company-logo w-10 h-10 rounded-full overflow-hidden'>
            <Image
              src='/images/ulm.png'
              width={100}
              height={100}
              unoptimized={true}
              alt='profile picture'
              className='object-cover'
            />
          </div>
          <div className='text-box'>
            <h1>President</h1>
            <h2>ACM Student Chapter at ULM</h2>
            <small>2020-2023</small>
            <ul className='list-disc ml-5 tracking-wide space-y-5'>
              <li>
                Developed and maintained a web application for a client using
                React, Redux, and Material UI.
              </li>
              <li>
                Developed and maintained a web application for a client using
                React, Redux, and Material UI.
              </li>
              <li>
                Developed and maintained a web application for a client using
                React, Redux, and Material UI.
              </li>
            </ul>
            <span className='left-container-arrow'></span>
          </div>
        </div>
        <div className='container right-container'>
          <div className='company-logo w-10 h-10 rounded-full overflow-hidden bg-white'>
            <Image
              src='/images/dxc.png'
              width={100}
              height={100}
              unoptimized={true}
              alt='profile picture'
              className='object-fit'
            />
          </div>
          <div className='text-box'>
            <h1>Software Developer Intern</h1>
            <h2>DXC Technology</h2>
            <small>2022-2022</small>
            <ul className='list-disc ml-5 tracking-wide space-y-5'>
              <li>
                Developed and maintained a web application for a client using
                React, Redux, and Material UI.
              </li>
              <li>
                Developed and maintained a web application for a client using
                React, Redux, and Material UI.
              </li>
              <li>
                Developed and maintained a web application for a client using
                React, Redux, and Material UI.
              </li>
              <li>
                Developed and maintained a web application for a client using
                React, Redux, and Material UI.
              </li>
            </ul>
            <span className='right-container-arrow'></span>
          </div>
        </div>
        <div className='container left-container'>
          <div className='company-logo w-10 h-10 rounded-full overflow-hidden'>
            <Image
              src='/images/ulm.png'
              width={100}
              height={100}
              unoptimized={true}
              alt='profile picture'
              className='object-cover'
            />
          </div>
          <div className='text-box'>
            <h1>ULM IT HelpDesk Assistant</h1>
            <h2>University of Louisiana Monroe</h2>
            <small>2020-2022</small>
            <ul className='list-disc ml-5 tracking-wide space-y-5'>
              <li>
                Developed and maintained a web application for a client using
                React, Redux, and Material UI.
              </li>
              <li>
                Developed and maintained a web application for a client using
                React, Redux, and Material UI.
              </li>
              <li>
                Developed and maintained a web application for a client using
                React, Redux, and Material UI.
              </li>
            </ul>
            <span className='left-container-arrow'></span>
          </div>
        </div>
      </div>
    </div>
  );
}
