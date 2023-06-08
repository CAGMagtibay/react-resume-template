import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
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
  title: "Christopher Magtibay's Portfolio",
  description: "Portfolio site built with Tim Baker's React resume template",
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
  Testimonials: 'testimonials'
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Christopher Magtibay.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Welcome to my website!</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Pennsylvania-based <strong className="text-stone-100">Full-Stack Software Engineer</strong>, currently searching for new opportunities
        and working to develop and expand my technical skillset!
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Outside of programming, I'm an avid fan of soccer, basketball, and football, and I love discovering new music, trying new food, and traveling!
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
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
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Pennsylvania', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Filipino-American', Icon: FlagIcon},
    {label: 'Interests', text: 'Sports, Music, New experiences', Icon: SparklesIcon},
    {label: 'Study', text: 'Pennsylvania State University', Icon: AcademicCapIcon},
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
        name: 'English (native language)',
        level: 0,
      },
      {
        name: 'Spanish (elementary proficiency)',
        level: 0,
      },
      {
        name: 'French (learning)',
        level: 0,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML',
        level: 0,
      },
      {
        name: 'CSS',
        level: 0,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Social Media Blog API',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Flight Scheduler Mini-Project',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Library System Mini-Project',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Enhanced Messaging Architecture (Senior Design Project)',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Photo-Sorting Project Using Convolutional Neural Networks',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'February 2023 - April 2023',
    location: 'Revature',
    title: 'Pre-Employment Program Training',
    content:  <p>
                <ul>
                  <li>- Developed a functioning social media blog API using Java, SQL, and Javalin as a final project</li>
                  <li>- Learned technologies such as Java, SQL, and Javalin and used them to complete coding exercises, challenges, and mini-projects</li>
                </ul>
              </p>,
  },
  {
    date: 'August 2016 - December 2020',
    location: 'College of Engineering - Pennsylvania State University - University Park, PA',
    title: 'Bachelor of Science in Computer Engineering',
    content:  <p>
                <p>Related Coursework: Data Structures and Algorithms, Web Design, Object-Oriented Programming with Web-Based Applications,
                Operating Systems, Computer Architecture, Marketing, Management & Organization</p>
              </p>,
  },
  {
    date: 'September 2012 - May 2016',
    location: 'La Salle College High School - Wyndmoor, PA',
    title: 'High School Diploma',
    content:  <p>
                <p>Related Coursework: AP Physics, AP Calculus</p>
              </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2018 - July 2019',
    location: 'FNX Fitness',
    title: 'Brand Ambassador',
    content: (
      <p>
        <ul>
          <li>- Promoted the brand's fitness supplements and merchandise through social media posts</li>
          <li>- Educated potential customers on product offerings</li>
        </ul>
      </p>
    ),
  },
];

export const certifications: TimelineItem[] = [
  {
    date: 'Issued August 2019',
    location: 'Smeal College of Business - Pennsylvania State University - University Park, PA',
    title: 'Smeal College Business Fundamentals Certificate',
    content: (
      <p>
        <p>Related Coursework: Economics, Accounting, Finance, Statistics</p>
      </p>
    ),
  },
];

export const leadership: TimelineItem[] = [
  {
    date: 'March 2019 - December 2020',
    location: 'The PUSO Foundation',
    title: 'College Outreach Ambassador',
    content: (
      <p>
        <ul>
          <li>- Spread the foundation's mission of aiding underserved communities through the Penn State community</li>
          <li>- Raised funds for the foundation's cause through merchandise sales and special events</li>
        </ul>
      </p>
    ),
  },
  {
    date: 'March 2018 - December 2020',
    location: 'Pennsylvania State University - University Park, PA',
    title: 'Eta Kappa Nu (EECS Honor Society)',
    content: (
      <p>
        <ul>
          <li>- Selected from top 25% of class to join</li>
          <li>- Tutored dozens of peers in courses relating to EECS during weekly open sessions</li>
        </ul>
      </p>
    ),
  },
  {
    date: 'August 2017',
    location: 'Vanguard - Malvern, PA',
    title: "Vanguard's IT EXPLORE Program",
    content: (
      <p>
        <ul>
          <li>- Selected among peers to participate in an early talent identification program</li>
          <li>- Networked with Vanguard professionals and honed key communication skills</li>
          <li>- Participated in team building activities involving problem solving and gained exposure to working in the finance and IT industries</li>
        </ul>
      </p>
    ),
  },
  {
    date: 'August 2016 - December 2019',
    location: 'Pennsylvania State University - University Park, PA',
    title: 'Penn State Filipino Association',
    content: (
      <p>
        <p>As general member:</p>
          <ul>
            <li>- Provided input on fund-raising concepts and coordinated social events with the sitting executive board</li>
            <li>- Advocated for cultural diversity and education regarding cultural issues on campus</li>
          </ul>
        <p>As secretary:</p>
          <ul>
            <li>- Worked in an executive board of 11 members to create an exciting, well-rounded experience for general members, 
              consisting of weekly social/cultural/professional/educational events, collaborations with other student clubs, 
              and planning and hosting Barrio Fiesta, the club’s annual showcase of Filipino tradition and culture
            </li>
            <li>- Managed organization’s mentor/mentee system by creating 40+ new pairs and ensuring current pairs are healthy through regular check-ins</li>
            <li>- Facilitated the club's communication and marketing through social media networks, the club’s website, and weekly email newsletters</li>
            <li>- Oversaw organization’s relationships with alumni and the local Filipino-American community; increased alumni turnout for the club’s annual Barrio Fiesta from the previous year</li>
          </ul>
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
    
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get In Touch.',
  description: 'If you have any questions or want to connect, feel free to reach out using the email or social links below!',
  items: [
    {
      type: ContactType.Email,
      text: 'cagmagtibay@live.com',
      href: 'mailto:cagmagtibay@live.com',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Christopher Magtibay',
      href: 'https://www.linkedin.com/in/christopher-magtibay-55498b13a/'
    },
    {
      type: ContactType.Github,
      text: 'CAGMagtibay',
      href: 'https://github.com/CAGMagtibay',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/CAGMagtibay'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/christopher-magtibay-55498b13a/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
