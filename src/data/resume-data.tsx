import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Harshit Agrawal",
  initials: "HA",
  location: "Bhopal Madhya Pradesh",
  locationLink: "https://maps.app.goo.gl/XW3sqTa8LkNwribf9",
  about: "Full Stack Engineer dedicated to building high-quality products.",
  summary: (
    <>
      Aspiring full-stack developer with practical experience in building dynamic web applications using the MERN
stack and TypeScript. Eager to contribute to impactful projects, collaborate with experienced teams, and grow
in a fast-paced, performance-driven development environment.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/151599022",
  personalWebsiteUrl: "",
  contact: {
    email: "harshitagrawal1204@gmail.com",
    tel: "+91 6260498435",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/harshit-agr-12",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/harshit-agrawal-831032256/",
        icon: "linkedin",
      },
      {
        name: "Twitter",
        url: "https://x.com/HarshitAgr1204",
        icon: "x",
      },
    ],
  },
  education: [
    {
      school: "Oriental Institute of Science and Technoloty",
      degree: "Bachelor's Degree in Computer science and engineering",
      start: "2022",
      end: "2026",
    },
  ],
  work: [ 
    // {
    //   company: "Motion",
    //   link: "https://motionapp.com/",
    //   badges: ["Remote", "AI", "React", "Next.js", "TypeScript", "AdonisJS"],
    //   title: "Senior Software Engineer",
    //   start: "2025",
    //   end: null,
    //   description: (
    //     <>
    //       Working on internal AI agents platform allowing marketing specialists
    //       to create AI workflows.
    //     </>
    //   ),
    // }
  ],
  skills: [
    "C","C++","TypeScript","JavaScript","SQL","Next.js","React" , "Tailwind" , "Node.js","RESTfull APIs" , "Express.js" , "PostgreSQL" , "MongoDB","Postman" , "Docker" , "Git", "GitHub"
  ],
  projects: [
    {
      title: "Brainly",
      techStack: ["TypeScript", "React", "Nodejs", "MongoDB" , "RAG" , "Vector Databases" , "pinecone" , "VectorSearch" , "LangChain"],
      description:
        "Developed a full-stack Second Brain app to store and semantically retrieve personal knowledge from sources like YouTube, Twitter, Medium, and Notion.",
      link: {
        label: "brainly.app",
        href: "https://secondbrain1234.vercel.app/",
      },
    },
    {
      title: "Eco Scope",
      techStack: [
        "Node.js",
        "Express.js",
        "Javascript",
        "MongoDB",
        "Vite",
        "React",
        "Machine Learning",
      ],
      description:
        "Developed a web platform enabling users to trace pollution data in their city and raise awareness through blogs. Integrated a machine learning waste classification model and began work on an AR-based pollution visualizer",
      link: {
        label: "Eco Scope",
        href: "https://nagpur-hackathon-project-ugc5.vercel.app/",
      },
    },
    {
      title: "Bloogify",
      techStack: ["javascript", "Nodejs", "mongoose", "MongoDB" ,"Jwt token" ,"multer"],
      description:
        "Developed a full-stack blog website where users can create, edit, and comment on posts, with secure user authentication.", 
      link: {
        label: "Shopping App",
        href: "https://github.com/harshit-agr-12/bloggify",
      },
    },
  ],
} as const;
