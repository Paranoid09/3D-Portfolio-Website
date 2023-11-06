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
  git,
  figma,
  threejs,
  gemovani,
  synergy,
  umali,
  megadoors,
  pigGame,
  bankist,
  chat,
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
    name: "Pig Game",
    description:
      "Pig is a simple dice game. Players take turns to roll a single dice as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: pigGame,
    source_code_link: "https://github.com/",
  },
  {
    name: "Bankist App",
    description:
      "Bankist is a project introduced by Jonas Schmedtmann in order to practice arrays and its methods. Bankist has an option to log in to the account and use different functionalities, almost like in an actual bank!",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: bankist,
    source_code_link: "https://github.com/",
  },
  {
    name: "Chat App",
    description:
      "Fullstack chat application with Authentication and real-time capabilities with Appwrite cloud.                                                                                                                        ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Appwrite",
        color: "green-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
