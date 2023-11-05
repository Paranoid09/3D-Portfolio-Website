import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  gemovani,
  synergy,
  umali,
  megadoors,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Investment Officer",
    company_name: "Synergy Capital",
    icon: synergy,
    iconBg: "#383E56",
    date: " Oct 2019 – Dec 2020",
    points: [
      "Creating detailed financial forecasts and projections to make data-driven business decisions.",
      "Setting financial goals and regularly summarizing actual performance against the budget.",
      "Keeping a close eye on outcomes to identify and address issues promptly.",
      "Engaging with stakeholders to provide updates, discuss opportunities and maintain relationships.",
    ],
  },
  {
    title: "CEO",
    company_name: "Gemovani (one of the SC’s portfolio companies)",
    icon: gemovani,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Jul 2021",
    points: [
      " Defining the company's long-term vision and strategic direction to guide its growth and success.",
      "Providing strong leadership, making critical decisions and ensuring alignment with the company's goals.",
      "Overseeing financial health, budgeting, and resource allocation to achieve financial objectives.",
      "Building and managing an effective leadership team and overseeing the organization's performance.",
    ],
  },
  {
    title: "CEO",
    company_name: "Umali (one of the SC’s portfolio companies)",
    icon: umali,
    iconBg: "#E6DEDD",
    date: " Jul 2021 – Dec 2021",
    points: [
      " Strategically planning and executing the company's development to achieve growth and objectives.",
      " Efficiently managing day-to-day operations to ensure smooth business functioning.",
      " Building and leading a high-performing team to drive the company's success.",
      "Overseeing budgeting and financial planning to maintain financial health and achieve goals.",
    ],
  },
  {
    title: "Consulting Project",
    company_name: " Megadoors",
    icon: megadoors,
    iconBg: "#E6DEDD",
    date: " Jan 2022 – May 2022",
    points: [
      " Developing and optimizing organizational structures to enhance efficiency, communication, and performance within the company.",
      " Formulating strategic plans to set long-term goals, allocate resources, and achieve a competitive advantage.",
      " Efficiently managing projects, from initiation to completion, to meet objectives, timelines, and budgets effectively.",
      "Streamlining and overseeing daily business operations to maximize productivity and achieve organizational goals.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
