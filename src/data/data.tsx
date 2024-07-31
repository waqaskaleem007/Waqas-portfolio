import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Waqas Kaleem',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Waqas Kaleem.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Lahore based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">i2c</strong> helping in building a modern, web based, financial
        architecture for payment processing.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Waqas Kaleem CV.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `A knowledgeable, enthusiastic computer science expert with leadership skills, having a strong foundation 
in problem-solving. Passionate about Artificial intelligence and data science. Versatile, open to change, 
and driven by a continuous learning mindset. Possess a strong grasp on past experiences, capable of 
learning from mistakes, and applying acquired insights to future endeavors.`,
  aboutItems: [
    {label: 'Location', text: 'Lahore, Pakistan', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Pakistani', Icon: FlagIcon},
    {label: 'Interests', text: 'Gamming, Movies', Icon: SparklesIcon},
    {label: 'Study', text: 'NUCES, Lahore', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'i2c, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Urdu',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'Java',
        level: 8,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Kotlin',
        level: 5,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Next Js Bundle Analysis',
    description: 'Analyzes each PR\'s impact on your next.js app\'s bundle size and displays it using a comment. Optionally supports performance budgets.',
    url: 'https://github.com/waqaskaleem007/Next.js-Project-Bundle-Analysis',
    image: porfolioImage1,
  },
  {
    title: 'My Shop Ecommerce Website',
    description: 'MyShop is an Ecommerce web application built with Next.js and MongoDB.',
    url: 'https://my-shop-ecommerce-website-gfpenuezh-pawanpk87.vercel.app/',
    image: porfolioImage2,
  },
  {
    title: 'Invoice Generator - React App',
    description: 'An Invoice creator project built with React. Add itemized items, configure quantity, prices, tax rates and discounts. Download Invoice as PDFs to your device. Uses jspdf-react to capture the data from the modal and covert it from canvas -> pdf.',
    url: 'https://invoice-generator-react.netlify.app/',
    image: porfolioImage3,
  },
  {
    title: 'Next.js Project with Node.js and Express Backend ',
    description: 'Welcome to our Next.js project with a Node.js and Express backend! This project aims to provide a comprehensive solution for managing mobile device repairs. Users can register, request services, track their repairs, make payments, and more. Admins have tools to efficiently manage service requests, appointments, technicians, inventory, and customer accounts. ',
    url: 'https://fix-my-phone-ujjalzaman.vercel.app/',
    image: porfolioImage4,
  },
  {
    title: 'MMAS: Money Tracker',
    description: 'An optimized application for daily expense tracking and finance management. ',
    url: 'https://github.com/waqaskaleem007/MassMoneyTracker',
    image: porfolioImage5,
  },
  {
    title: 'Spring PetClinic Application',
    description: 'Spring Petclinic is a Spring Boot application built using Maven or Gradle. You can build a jar file and run it from the command line (it should work just as well with Java 17 or newer):',
    url: 'https://github.com/waqaskaleem007/PetClinic/',
    image: porfolioImage6,
  },
  {
    title: 'LinkedRite',
    description: 'Linkedrite 🤖 is a tool designed to help you craft professional LinkedIn posts. It can correct grammar, generate relatable context, add emojis 😃, format your post, and much more.',
    url: 'https://linkedrite.pratikpathak.com',
    image: porfolioImage7,
  },
  {
    title: 'MiniChatGpt',
    description: 'Designed and sketched an architecture for a scalable chatbot dialogue management system similar to ChatGPT.',
    url: 'https://waqaskaleem007.github.io/MiniChatGpt/',
    image: porfolioImage8,
  },
  {
    title: 'Comming Soon',
    description: 'Somethig great is coming soon.',
    url: 'https://github.com/waqaskaleem007/',
    image: porfolioImage9,
  },
  {
    title: 'JsonCrack',
    description: 'Contributed to the development of a comprehensive platform for JSON data manipulation and analysis. This project was instrumental in enhancing the efficiency and accuracy of JSON data processing, enabling users to perform complex operations with ease. The platform provided a user-friendly interface for JSON data manipulation, analysis, and visualization, making it an essential tool for developers, data analysts, and other professionals working with JSON data.',
    url: 'https://jsoncrack.com/',
    image: porfolioImage10,
  },
  {
    title: 'Comming Soon',
    description: 'Somethig great is coming soon.',
    url: 'https://github.com/waqaskaleem007/',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2021',
    location: 'NUCES',
    title: 'Bachelor in Computer Science',
    content: <p>Driven by a passion for understanding how computer applications function, I transferred to the National University of Computer and Emerging Sciences. There, I pursued a Bachelor's degree in Computer Science with a specialization in Software Engineering. This provided me with a deeper education in the fundamental theories, concepts, and science behind advanced programming. It was at this institution that I discovered my enthusiasm for scalable application development (both web and mobile), the security aspects of computer and application systems, and realized my aptitude for comprehending complex algorithms.</p>,
  },
  {
    date: 'March 2017',
    location: 'Government College University Lahore',
    title: 'Pre-Engineering in Computer Sciences',
    content: <p>I completed my Pre-Engineering in Computer Sciences at Government College Lahore, where I engaged in an intensive program that laid a solid foundation in programming, algorithms, and data structures. This education provided me with strong analytical and problem-solving skills, developed through rigorous coursework and hands-on projects. My time at Government College Lahore was instrumental in shaping my passion for technology and engineering, preparing me for further studies and a career in the field.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2021 - Present',
    location: 'i2c, Inc.',
    title: 'Full Stack Software Engineer',
    content: (
      <p>
        Led the creation of a robust Fraud Engine using advanced feature engineering to detect and prevent fraudulent banking transactions. Overhauled the Stats service to efficiently process and analyze Big Data with a distributed Spark architecture. Implemented a Python-based model monitoring service for real-time analysis, detecting data drift and maintaining machine learning model integrity. Optimized the system to handle 3 million transactions using multiprocessing techniques. In addition, developed and maintained RESTful APIs using Spring Boot to support a scalable and high-performance backend architecture. These APIs facilitated seamless communication between various services and ensured efficient data handling and processing. Implemented best practices in web development to enhance the user interface and experience, ensuring seamless interaction with the fraud detection and data monitoring systems. The combination of Spring Boot and RESTful APIs enabled the system to handle complex operations and large datasets with ease, contributing to the overall robustness and scalability of the application.
      </p>
    ),
  },
  {
    date: 'June 2020 - July 2021',
    location: 'Xavor Corporation',
    title: 'ML Engineer',
    content: (
      <p>
        Spearheaded the creation of an advanced product centered on Multimodal Human Activity Detection. This groundbreaking project combined grid eye and sound sensors to gather extensive data for precise human activity identification. Contributed significantly to the development of a mobile application for both Android and iOS, providing real-time insights into detected activities through an intuitive interface. This project was a major success, receiving positive feedback from users and stakeholders alike.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Asif Raza',
      text: 'Using the Next Js Bundle Analysis tool has significantly streamlined our development process. Each pull request\'s impact on bundle size is clearly displayed, allowing us to maintain optimal performance standards effortlessly. The optional performance budget feature is a game-changer for our team. Highly recommended for any Next.js projects!',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Pawan Kumar',
      text: 'My Shop is an outstanding ecommerce platform built with Next.js and MongoDB. The seamless integration and user-friendly interface have transformed our online shopping experience. Its robust performance and scalability have exceeded our expectations, making it the perfect solution for our business needs.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Kartik',
      text: 'This comprehensive Next.js project with a Node.js and Express backend has revolutionized our mobile device repair management. From user registration to service requests and payment tracking, it covers all aspects efficiently. The admin tools are particularly impressive, allowing for streamlined management of service requests, appointments, technicians, inventory, and customer accounts.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'In case of any quires contact me.',
  items: [
    {
      type: ContactType.Email,
      text: 'waqaswork2932@gmail.com',
      href: 'mailto:waqaswork2932@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Lahore, Pakistan',
      href: 'https://www.google.com/maps/@31.5241552,74.3000764,13z?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@waqas',
      href: 'https://www.instagram.com/',
    },
    {
      type: ContactType.Github,
      text: 'waqas',
      href: 'https://github.com/waqaskaleem007',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/waqaskaleem007'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/26536800/waqas-kaleem'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com'},
];
