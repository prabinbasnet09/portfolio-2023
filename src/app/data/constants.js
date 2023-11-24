const projects = [
  {
    title: 'Pre-Medical Advisory Committee',
    description:
      'The PMAC Application Management System is a comprehensive web and mobile application designed to streamline the process of applying to medical school and health care professional post-baccalaureate programs. It aims to simplify communication, scheduling, and document management between candidates and the Pre-Medical Advisory Committee (PMAC) at the University of Louisiana at Monroe (ULM).',
    image: '/images/pmac.jpg',
    github: 'https://github.com/prabinbasnet09/pmac-beta',
    technologies: ['NextJS', 'React', 'Java', 'Node.js'],
  },
  {
    title: 'ULM RSS Feed',
    description:
      'Secured the top position in the  IT Web Code challenge through the development and presentation of an innovative news feed solution. The design concept aimed to provide ULM students with a centralized platform for accessing news and events from various departments and organizations. This achievement highlighted my ability to create practical and user-centric web solutions.',
    image: '/images/ulm_rss_feed.jpg',
    github: 'https://github.com/prabinbasnet09/ulm-rss-feed',
    technologies: ['NextJS', 'JavaScript', 'Node.js', 'Tailwind CSS'],
  },
  {
    title: 'ACM Student Chapter Website',
    description:
      'Our team proudly crafted and launched a dynamic website for the ACM Student Chapter at ULM, serving as a digital hub for students and tech enthusiasts. This platform encourages community engagement, facilitates seamless information sharing, and actively promotes ACM events, all of which underline our dedication to advancing technology and innovation within the campus community.',
    image: '/images/acm_website.jpg',
    github: 'https://github.com/prabinbasnet09/ACM-WEBSITE',
    technologies: ['React.js', 'JavaScript', 'Node.js', 'SASS'],
  },
  {
    title: 'Movie Wallet',
    description:
      'This movie wallet app, developed with React/Next.js, Apollo GraphQL, and Mongoose, includes robust features for movie enthusiasts. Users can store their favorite movies and solve the challenge of remembering them. The app ensures secure access with AWS Cognito authentication, providing users a seamless and personalized movie-tracking experience. ',
    image: '/images/movie_wallet.png',
    github: 'https://github.com/prabinbasnet09/movie-wallet-nextjs',
    technologies: ['NextJS', 'Apollo GraphQL', 'MongoDB', 'AWS Services'],
  },
  {
    title: 'Chat App',
    description:
      'This web-based chat application, built using JavaScript and Node.js with Express, offers users an immersive chat experience with the ability to navigate through various chat groups, simulating a real chat app environment. Authentication is seamlessly integrated, leveraging the power of AWS Lambda, Bcryptjs, and DynamoDB to ensure secure access and user privacy.',
    image: '/images/chat_app.png',
    github: 'https://github.com/prabinbasnet09/chat-app',
    technologies: ['Node.js/Express', 'Web Sockets', 'AWS Services', 'React'],
  },
  {
    title: 'Notes List',
    description:
      'This web application, designed using Next.js and Django, simulates a real notes application, allowing users to seamlessly create, update, and retrieve notes. With an intuitive user interface and robust features, users can efficiently manage their notes and stay organized. Experience the convenience of a modern note-taking tool that enhances productivity and simplifies your daily tasks.',
    image: '/images/notes_app.png',
    github: 'https://github.com/prabinbasnet09/react-django-notes-app',
    technologies: ['Next.js', 'Django', 'AWS Services', 'MongoDB'],
  },
];

const achievements = [
  {
    id: 1,
    title: 'Pelican Cup 2022',
    caption: 'Taking Flight to Success: Winning Big at the Pelican Cup 🚁💼💰',
    image: '/images/pelican.jpg',
    hashTag: ['#PelicanCup2023', '#ULM', '#GaeaEnvironmental', '#Startup'],
    likes: 600,
    retweet: 70,
    shares: 75,
  },
  {
    id: 2,
    title: 'IT Web Code Challenge 2023',
    caption:
      'Winning the IT Web Code Challenge 2023 organized by the University of Louisiana Monroe!!',
    image: '/images/IT_WEB_CODE_WINNER.png',
    hashTag: ['#ITWebCodeChallenge2023', '#ULM', '#Next.js', '#NewsFeed'],
    likes: 500,
    retweet: 60,
    shares: 85,
  },
  {
    id: 3,
    title: 'Outstanding Graduate 2023',
    caption:
      '"Dual Honors, One Passion! 🏆🎓 Recognized as the Outstanding Computer Science Graduate and honored with the Superior Scholar Award by the University of Louisiana Monroe. Grateful for the journey ahead! 🚀',
    image: '/images/outstanding_graduate.jpg',
    hashTag: [
      '#SuperiorScholarAward2023',
      '#ULM',
      '#OutstandingGraduate',
      '#ComputerScience',
    ],
    likes: 700,
    retweet: 80,
    shares: 65,
  },
  {
    id: 4,
    title: 'Solutions Architect',
    caption:
      'Certified AWS Solutions Architect! 🎉 Taking steps towards crafting robust AWS solutions. 🚀 ',
    image: '/images/aws_cert.png',
    hashTag: ['#SolutionsArchitect', '#AWS', '#CloudComputing', '#Programming'],
    likes: 800,
    retweet: 90,
    shares: 55,
  },
];

export { projects, achievements };
