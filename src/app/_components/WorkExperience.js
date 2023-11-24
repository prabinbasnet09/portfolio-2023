'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function WorkExperience() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsSmallScreen(window.innerWidth <= 600);
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 600);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  });

  const leftContainerVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 10,
    },
  };

  const rightContainerVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: -10,
    },
  };

  const smallScreenVariants = {
    hidden: {
      opacity: 1,
      x: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div className='pt-20 text-black' id='experiences'>
      <div className='text-white text-center font-bold text-4xl xl:text-6xl pb-10 '>
        Career Highlights
      </div>
      <div className='timeline overflow-hidden'>
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
          <motion.div
            variants={
              isSmallScreen ? smallScreenVariants : leftContainerVariants
            }
            initial='hidden'
            transition={{
              delay: 0.05,
              duration: 1,
            }}
            whileInView='visible'
            className='text-box '
          >
            <h1>Associate Professional Application Developer</h1>
            <h2>DXC Technology</h2>
            <small>2023-Present</small>
            <ul className='list-disc ml-5 tracking-wide space-y-5'>
              <li>
                Streamlined data extraction and transformation with Azure Data
                Factory, optimizing data flow from Excel to Azure SQL Server.
              </li>
              <li>
                Leveraged Power BI and custom DAX measures to extract actionable
                insights from diverse data sources, enhancing decision-making
                capabilities.
              </li>
              <li>
                Seamlessly integrated Power BI reports into web apps, providing
                a user-friendly data analysis platform.
              </li>
              <li>
                Met tight deadlines leading a team of developers and Solution
                Architects, delivering a comprehensive solution within a
                demanding three-sprint timeline.
              </li>
            </ul>
            <span className='left-container-arrow'></span>
          </motion.div>
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
          <motion.div
            variants={
              isSmallScreen ? smallScreenVariants : rightContainerVariants
            }
            initial='hidden'
            transition={{
              delay: 0.05,
              duration: 1,
            }}
            whileInView='visible'
            className='text-box'
          >
            <h1>Web Developer Intern</h1>
            <h2>University of Louisiana Monroe</h2>
            <small>2021-2023</small>
            <ul className='list-disc ml-5 tracking-wide space-y-5'>
              <li>
                Developed responsive web apps using React, Angular, Next.js
                (front-end), and Spring Boot, Node.js, Django (back-end),
                showcasing full-stack proficiency.
              </li>
              <li>
                Led a team of four to design and build a React Native and
                AWS-powered cross-platform social media app for a startup.
              </li>
              <li>
                Conducted rigorous unit and integration testing for React
                components with Jest and Enzyme, along with API testing using
                Postman, ensuring the reliability of both front-end and
                back-end.
              </li>
              <li>
                Proficiently managed SQL/NoSQL databases, ensuring data
                integrity and reliable storage and retrieval through Mocha
                testing.
              </li>
            </ul>
            <span className='right-container-arrow'></span>
          </motion.div>
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
          <motion.div
            variants={
              isSmallScreen ? smallScreenVariants : leftContainerVariants
            }
            initial='hidden'
            transition={{
              delay: 0.05,
              duration: 1,
            }}
            whileInView='visible'
            className='text-box'
          >
            <h1>President</h1>
            <h2>ACM Student Chapter at ULM</h2>
            <small>2020-2023</small>
            <ul className='list-disc ml-5 tracking-wide space-y-5'>
              <li>
                Led and guided the ACM Student Chapter, setting the strategic
                direction and vision for the organization.
              </li>
              <li>
                Achieved a significant increase in student memberships,
                fostering a vibrant and inclusive tech community on campus.
              </li>
              <li>
                Organized and executed various tech-related events, seminars,
                and workshops to promote knowledge sharing and skill development
                among members.
              </li>
              <li>
                Spearheaded the creation and maintenance of a dynamic and
                engaging chapter website, ensuring effective communication and a
                strong online presence.
              </li>
            </ul>
            <span className='left-container-arrow'></span>
          </motion.div>
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
          <motion.div
            variants={
              isSmallScreen ? smallScreenVariants : rightContainerVariants
            }
            initial='hidden'
            transition={{
              delay: 0.05,
              duration: 1,
            }}
            whileInView='visible'
            className='text-box'
          >
            <h1>Software Developer Intern</h1>
            <h2>DXC Technology</h2>
            <small>2022-2022</small>
            <ul className='list-disc ml-5 tracking-wide space-y-5'>
              <li>
                Enhanced talent acquisition by 80% through collaborative
                development of a cloud-based web app with 50+ interns,
                leveraging microservices and AWS technologies like Lambda, API
                Gateway, and DynamoDB.
              </li>
              <li>
                Increased user engagement by 40% by creating interactive
                dashboards with React to predict user interactions with the web
                app.
              </li>
              <li>
                Implemented CloudWatch Logs Insights queries and custom
                dashboards for real-time visibility into application
                performance, streamlining issue troubleshooting.
              </li>
              <li>
                Orchestrated data pipelines for seamless import of application
                logs and user data into Power BI, enabling efficient data
                analysis and visualization with complex DAX queries.
              </li>
            </ul>
            <span className='right-container-arrow'></span>
          </motion.div>
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
          <motion.div
            variants={
              isSmallScreen ? smallScreenVariants : leftContainerVariants
            }
            initial='hidden'
            transition={{
              delay: 0.05,
              duration: 1,
            }}
            whileInView='visible'
            className='text-box'
          >
            <h1>ULM IT HelpDesk Assistant</h1>
            <h2>University of Louisiana Monroe</h2>
            <small>2020-2022</small>
            <ul className='list-disc ml-5 tracking-wide space-y-5'>
              <li>
                Provided timely and effective technical support to university
                staff and students, resolving a wide range of IT-related issues,
                including hardware and software troubleshooting, network
                connectivity, and account management.
              </li>
              <li>
                Demonstrated strong customer service skills by offering clear
                and patient assistance, ensuring end-users&apos; understanding
                of technical solutions, and maintaining a high level of
                satisfaction among university community members.
              </li>
              <li>
                Contributed to the improvement of IT support processes by
                suggesting and implementing solutions to common issues,
                streamlining ticketing systems, and enhancing user guides,
                resulting in increased efficiency and reduced response times for
                resolving IT problems.
              </li>
            </ul>
            <span className='left-container-arrow'></span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
