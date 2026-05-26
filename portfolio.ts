import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Mark Joseph Cabuquit",
  title: "Hi all, I'm Mark Joseph",
  description:
    "Software Engineer specializing in Kotlin and Java with experience in building scalable mobile applications using Jetpack Compose, Firebase, REST APIs, and modern Android development practices. Passionate about creating high-performance and user-friendly mobile experiences. I also have skills in ReactJS and NextJS for web development. I am eager to contribute my expertise to innovative projects and collaborate with talented teams.",
  resumeLink: "https://mark-joseph-cabuquit-flowcv-resume-2026-05-23.tiiny.site/",
};

export const openSource = {
  githubUserName: "mjcabuquit",
};

export const contact = {

};

export const socialLinks: SocialLinksType = {
  email: "mailto:cabuquit.markjoseph@gmail.com",
  linkedin: "https://www.linkedin.com/in/mark-joseph-cabuquit-b7803098/",
  github: "https://github.com/mjcabuquit",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Front End Skills",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Develop Web and Android applications using Kotlin and Java for Android, and ReactJS and NextJS for web development"),
        emoji("⚡ Build modern UI with Jetpack Compose and XML, and responsive web design with ReactJS and NextJS"),
        emoji("⚡ Integrate RESTful APIs and Firebase services"),
        emoji("⚡ Optimize app performance and fix bugs"),
        emoji("⚡ Use MVVM architecture and clean code practices"),
        emoji("⚡ Manage local databases and background tasks"),
        emoji("⚡ Publish and maintain apps on the Google Play Store"),
        emoji("⚡ Collaborate with designers and backend developers"),
        emoji("⚡ Maintain and improve existing web and mobile applications"),
      ],
      softwareSkills: [
        {
          skillName: "Android",
          iconifyTag: "logos:android",
        },
        {
          skillName: "Kotlin",
          iconifyTag: "vscode-icons:file-type-kotlin",
        },
        {
          skillName: "Java",
          iconifyTag: "logos:java",
        },
        {
          skillName: "Flutter",
          iconifyTag: "logos:flutter",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Android Development", //Insert stack or technology you have experience in
    progressPercentage: "95", //Insert relative proficiency in percentage
  },
  {
    Stack: "Kotlin", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Java", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Flutter", //Insert stack or technology you have experience in
    progressPercentage: "75", //Insert relative proficiency in percentage
  },
  {
    Stack: "React Native", //Insert stack or technology you have experience in
    progressPercentage: "70", //Insert relative proficiency in percentage
  },
  {
    Stack: "ReactJs", //Insert stack or technology you have experience in
    progressPercentage: "80", //Insert relative proficiency in percentage
  },
  {
    Stack: "Git", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Android Studio", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Visual Studio Code", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University of San Carlos - Talamban",
    subHeader: "Certificate in Computer Techonology - Major in Software Development",
    duration: "April 2013 - April 2016",
    desc: "",
    grade: "",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Engineer",
    company: "Nerubia Web Solutions Inc.",
    companyLogo: "/img/icons/common/nerubia.png",
    date: "Mar 2016 - Mar 2026",
    desc: "I worked as a Software Engineer responsible for developing and maintaining mobile and web applications. My role included Android development using Kotlin and Java, API integration, Firebase implementation, bug fixing, performance optimization, and collaborating with the development team to deliver scalable and user-friendly software solutions. For web development, I utilized ReactJS and NextJS to create responsive and dynamic user interfaces. I also contributed to the design and architecture of applications, ensuring high-quality code and adherence to best practices.",
  },
  {
    role: "Senior Android Developer",
    company: "FeiWin",
    companyLogo: "/img/icons/common/feiwin.jpg",
    date: "Mar 2026 - May 2026",
    desc: "I worked on developing new features, fixing application bugs, and collaborating closely with the QA team to ensure software quality, stability, and smooth user experience.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "Digital Payment & Top-Up Platform NMA (11 months)",
    desc: "Money Lending App (NMA) using Flutter. This project is the Flutter-based version of the Money Lending App (LMA), offering support for iPhones. Additionally, it extends its reach to international markets, including India, Indonesia, and Vietnam.",
    github: "",
    link: "https://apps.apple.com/ph/app/home-credit-philippines/id1577894172",
  },
  {
    name: "Digital Payment & Top-Up Platform LMA  (5 years & 1 months)",
    desc: "Money Lending App (LMA)  for Native Android. This project is a comprehensive finance app offering loans, e-wallet services, shopping, and card management, along with VAS support. Designed exclusively for Native Android, it is currently available only in the Philippines. As a trusted all-in-one payment and top-up solution, it provides a seamless, secure, and reliable way to manage digital transactions. With a virtual credit card, users can conveniently pay bills, book flights, shop online, and more. Partnering with hundreds of merchants, the platform ensures fast, hassle-free transactions anytime, anywhere.",
    link: "",
  },
  {
    name: "Finance App",
    desc: "This project is a feature-rich finance app designed exclusively for Android Native. It offers a seamless and secure platform for managing digital transactions, including e-wallet services, remittances, and various other financial functions. With a user-friendly interface, the app provides a convenient way to send money, make payments, and handle everyday financial needs with ease.",
    link: "",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Julius Cabug-us",
    role: "Team Lead, Android Development Team",
    feedback:
      "",
  },
  {
    name: "Jesrel Padriga",
    role: "Android Developer",
    feedback:
      "",
  },
  {
    name: "Christine Marie Cornelio",
    role: "Scrum Master",
    feedback:
      "I had the opportunity to work closely with Mark at Nerubia Web Solutions Inc. as his Project Manager/Scrum Master. He was highly dependable, technically skilled, and consistently delivered on his commitments. Mark worked professionally, adapted well to feedback, and was always proactive in solving challenges. He was a valuable part of the team, and I’m grateful to have worked with him.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Mark Joseph O. Cabuquit",
  description: greetings.description,
  author: "Mark Joseph Cabuquit",
  image: "https://media.licdn.com/dms/image/v2/D5635AQE0ZXGyUqwAgQ/profile-framedphoto-shrink_800_800/B56Z5N1XeUJIAg-/0/1779422296310?e=1780153200&v=beta&t=jJlk4I3CO8sDBczSw7oANSUUAZ-eWInrA72Bk7u6XV4",
  url: "",
  keywords: [
    "Mark",
    "Mark Cabuquit",
    "mjcabuquit",
    "mcabuquit",
    "Portfolio",
    "Mark Portfolio ",
    "Mark Joseph Portfolio",
  ],
};
