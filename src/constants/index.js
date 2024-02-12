import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    github1,
    visualstudio,
    postman,
    infosys,
    mediAssist,
    DALLE,
    ECommerce,
    // threejs,
    bootstrap,
    contextapi,
    expressjs,
    hotelReservation,
    mevi,
    adminPannel,
    discord,
    mysql,
    nextjs
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id:'projects',
      title:'Projects'
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    }
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
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
      style: 'shadow-orange-500'
    },
    {
      name: "CSS 3",
      icon: css,
      style: 'shadow-blue-500'
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      style: 'shadow-sky-400'
    },
    {
      name: "JavaScript",
      icon: javascript,
      style: 'shadow-yellow-500'
    },
    {
      name: "React JS",
      icon: reactjs,
      style: 'shadow-blue-600'
    },
    {
      name: "Next JS",
      icon: nextjs,
      style: 'shadow-gray-400'  
    },
    {
      name: "Redux Toolkit",
      icon: redux,
      style: 'shadow-violet-400'
    },
    {
      name: "Context API",
      icon: contextapi,
      style: 'shadow-blue-300'
    },
    {
      name: "Node JS",
      icon: nodejs,
      style: 'shadow-green-300'
    },
    {
      name: "Mongo DB",
      icon: mongodb,
      style: 'shadow-green-800'
    },
    {
      name: "Express JS",
      icon: expressjs,
      style: 'shadow-gray-400'
    },
    {
      name: "My SQL",
      icon: mysql,
      style: 'shadow-blue-900'
    },
    
  ];

  const advTechnologies = [
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Github",
      icon: github1,
    },
    {
      name: "Postman",
      icon: postman,
    },
    {
      name: "Visual Studio",
      icon: visualstudio,
    },
  ]
  
  const experiences = [
    
    {
      title: "Frontend Intern",
      company_name: "MEVI TECHNOLOGIES",
      icon: mevi,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Oct 2023",
      points: [
        "Developed reusable React components, leading to a 25% reduction in codebase size and improved maintainability.",
        "Optimized application performance by 30% through efficient component rendering and data fetching techniques.",
        "Collaborated effectively with backend developers to seamlessly integrate the UI with APIs and databases, ensuring smooth data flow.",
        "Led the front-end development by effectively managing deadlines and resources, and delivering a successful rollout."
      ],
    },
    {
      title: "Technical Process Executive",
      company_name: "INFOSYS BPM LIMITED",
      icon: infosys,
      iconBg: "#383E56",
      date: "Jul 2021 - Mar 2022",
      points: [
        "Demonstrated expertise in resolving technical queries related to routers through chat, ensuring customer satisfaction and timely resolution.",
        "Collaborated with cross-functional teams, including network engineers to resolve complex router-related issues and deliver seamless customer experiences.",
        "Maintained a deep understanding of router functionality, troubleshooting techniques, and network protocols to provide accurate and comprehensive solutions.",
      ],
    },
    {
      title: "Customer Process",
      company_name: "Medi Assist",
      icon: mediAssist,
      iconBg: "#E6DEDD",
      date: "Aug 2018 - Sep 2020",
      points: [
        "Played a crucial role in the response to the COVID-19 pandemic by providing customer support and information related to the virus and its impact on healthcare.",
        "Assisted customers with queries about COVID-19 testing, vaccination, safety protocols, and available healthcare resources.",
        "Stayed updated on the latest developments and guidelines related to the pandemic to provide accurate information and address customer concerns.",
      ],
    },
    
  ];
  
  const projects = [
    {
      name: "Discord Clone",
      description:
      "Implemented Real-time messaging using Socket.io where user can Send, Delete & Edit messages in real time. Also Integrated rich media features like audio/video calls and multimedia sharing for enhanced user engagement.  The project not only demonstrates proficiency in utilizing cutting-edge web development tools but also highlights the importance of incorporating real-time communication features in contemporary applications.",
        tags: [
        {
          name: "Next JS",
          color: "blue-text-gradient",
        },
        {
          name: "Prisma",
          color: "green-text-gradient",
        },
        {
          name: "My SQL",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Socket.io",
          color: "green-text-gradient",
        },
        {
          name: "TanStack Query",
          color: "blue-text-gradient",
        },
        {
          name: "shadcn-ui",
          color: "pink-text-gradient",
        },
      ],
      image: discord,
      source_code_link: "https://github.com/fahad-ui/discord-clone",
    },
    {
      name: "Hotel Booking System",
      description:
        "Built a hotel reservation application for streamline booking processes and enhanced user experience, allowing customers to search for hotels, view room availability, and make reservations seamlessly and Implemented secure user authentication and data protection through JWT, ensuring privacy during the reservation process.",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "JWT",
          color: "green-text-gradient",
        },
        {
          name: "Context API",
          color: "pink-text-gradient",
        },
        {
          name: "Express JS",
          color: "pink-text-gradient",
        },
        {
          name: "Node JS",
          color: "pink-text-gradient",
        },
        {
          name: "Mongo DB",
          color: "pink-text-gradient",
        },
      ],
      image: hotelReservation,
      source_code_link: "https://github.com/fahad-ui/Hotel-Reservation-Application",
    },
    {
      name: "AI BASED IMAGE GENERATIVE",
      description:
        "This web application utilizes OpenAI's DALL-E model to generate unique and creative images based on user input. DALL-E is a powerful AI model that can generate images from textual descriptions, allowing users to explore a wide range of creative possibilities.",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "Mongo DB",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
        {
          name: "Node JS",
          color: "green-text-gradient",
        },
        {
          name: "Express JS",
          color: "blue-text-gradient",
        },
        {
          name: "Cloudinary",
          color: "pink-text-gradient",
        },
        {
          name: "OpenAI's DALL-E",
          color: "blue-text-gradient",
        },

      ],
      image: DALLE,
      source_code_link: "https://github.com/fahad-ui/AI_Image_Generation_App_Using_DALL-E",
    },
    {
      name: "E-Commerce Application",
      description:
        "Revolutionized E-Commerce with a cutting-edge platform built on React JS and Redux, ensuring flawless state management for a seamless shopping experience. Integrated Stripe to offer secure and lightning-fast payment processing, empowering users to shop with confidence and ease. Experience the future of online shopping with our innovative E-Commerce solution.",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "Node JS",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
        {
          name: "Express JS",
          color: "blue-text-gradient",
        },
        {
          name: "Stripe",
          color: "green-text-gradient",
        },
        {
          name: "Mongo DB",
          color: "pink-text-gradient",
        },
      ],
      image: ECommerce,
      source_code_link: "https://github.com/fahad-ui/E-Commerce-Application",
    },
    {
      name: "Admin Dashboard",
      description:
        "Designed and developed a dynamic and user-friendly admin dashboard using React JS. This project involved crafting a comprehensive dashboard that provides administrators with a widgets, charts, centralized platform to manage various aspects of their application or website.",
      tags: [
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
        {
          name: "React Charts",
          color: "green-text-gradient",
        }
      ],
      image: adminPannel,
      source_code_link: "https://github.com/fahad-ui/Admin-Panel-using-React/tree/main/src/components",
    },
  ];
  
export { services, technologies, advTechnologies,experiences, projects };