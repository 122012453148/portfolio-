import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiRedux, SiTailwindcss, SiBootstrap, SiVite, SiPostman, SiRender, SiVercel, SiJsonwebtokens, SiSocketdotio } from 'react-icons/si';

export const SKILLS = {
  frontend: [
    { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'Redux Toolkit', icon: <SiRedux className="text-[#764ABC]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952B3]" /> },
    { name: 'Responsive Design', icon: <FaReact className="text-[#61DAFB]" /> },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
    { name: 'Express.js', icon: <SiExpress className="text-[#000000]" /> },
    { name: 'REST APIs', icon: <FaNodeJs className="text-[#339933]" /> },
    { name: 'JWT', icon: <SiJsonwebtokens className="text-[#000000]" /> },
    { name: 'Bcrypt', icon: <FaNodeJs className="text-[#339933]" /> },
    { name: 'Middleware', icon: <FaNodeJs className="text-[#339933]" /> },
  ],
  database: [
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
    { name: 'Mongoose', icon: <SiMongodb className="text-[#47A248]" /> },
    { name: 'MongoDB Atlas', icon: <SiMongodb className="text-[#47A248]" /> },
    { name: 'Aggregation', icon: <SiMongodb className="text-[#47A248]" /> },
  ],
  tools: [
    { name: 'Git', icon: <FaGithub className="text-[#F05032]" /> },
    { name: 'GitHub', icon: <FaGithub className="text-[#181717]" /> },
    { name: 'VS Code', icon: <FaHtml5 className="text-[#007ACC]" /> },
    { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: 'Render', icon: <SiRender className="text-[#46E3B7]" /> },
    { name: 'Vercel', icon: <SiVercel className="text-[#000000]" /> },
    { name: 'Figma', icon: <FaFigma className="text-[#F24E1E]" /> },
  ]
};

export const EXPERIENCE = [
  {
    company: 'Vulture Management Wings Private Limited',
    position: 'MERN Stack Developer',
    duration: '2026 - Present',
    responsibilities: [
      'Developing scalable full-stack applications using MongoDB, Express.js, React.js, and Node.js.',
      'Designing and implementing RESTful APIs for web applications.',
      'Building responsive user interfaces and ensuring smooth backend–frontend integration.',
      'Participating in Agile sprints and collaborating with cross-functional teams.'
    ]
  }
];

export const EDUCATION = [
  {
    degree: 'Master of Computer Applications (MCA)',
    college: 'Periyar Maniammai University',
    duration: '2022 - 2024',
    cgpa: 'GPA: 7.15'
  },
  {
    degree: 'Bachelor of Computer Application (BCA)',
    college: 'A.V.V.M Sri Pushpam College',
    duration: '2019 - 2022',
    cgpa: 'Percentage: 70%'
  }
];

export const PROJECTS = [
  {
    name: 'Weefly Cab Booking System',
    category: 'Full Stack MERN Application',
    description: 'A complete MERN-based cab booking platform featuring separate Customer and Driver portals, secure authentication, ride booking, ride management, REST APIs, and responsive UI.',
    tech: [
      { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
      { name: 'Express.js', icon: <SiExpress className="text-white" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      { name: 'JWT', icon: <SiJsonwebtokens className="text-[#FF0000]" /> },
      { name: 'Socket.io', icon: <SiSocketdotio className="text-white" /> },
      { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952B3]" /> }
    ],
    image: '/weefly-preview.png',
    featured: true,
    live: 'https://weeflycab.vercel.app/login',
    github: 'https://github.com/122012453148/cab-booking-project',
    portals: [
      { name: 'Customer Portal', icon: '👤', url: 'https://weeflycab.vercel.app/login' },
      { name: 'Driver Portal', icon: '🚖', url: 'https://weeflycab.vercel.app/driver/login' }
    ]
  },
  {
    name: 'Hotel Booking Management System',
    category: 'Full Stack MERN Application',
    description: 'A complete hotel booking platform with Customer, Manager, and Admin portals including authentication, room booking, room management, booking history, and role-based access control.',
    tech: [
      { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
      { name: 'Express.js', icon: <SiExpress className="text-white" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      { name: 'JWT', icon: <SiJsonwebtokens className="text-[#FF0000]" /> }
    ],
    image: '/hotel-preview.png',
    featured: false,
    live: 'https://hotel-management-five-beige.vercel.app',
    github: 'https://github.com/122012453148/hotel-management',
    portals: [
      { name: 'Customer', icon: '👤', url: 'https://hotel-management-five-beige.vercel.app' },
      { name: 'Manager', icon: '🧑💼', url: 'https://hotel-management-five-beige.vercel.app/manager-login' },
      { name: 'Admin', icon: '🛡️', url: 'https://hotel-management-five-beige.vercel.app/admin' }
    ]
  },
  {
    name: 'MTBMS',
    category: 'Enterprise MERN Application',
    description: 'An enterprise business management platform that handles inventory tracking, vendors, materials, employees, workflows, dashboards, reports, and role-based access.',
    tech: [
      { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
      { name: 'Express.js', icon: <SiExpress className="text-white" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      { name: 'JWT', icon: <SiJsonwebtokens className="text-[#FF0000]" /> }
    ],
    image: '/mtbms-preview.png',
    featured: false,
    live: 'https://mtbms.vercel.app',
    github: 'https://github.com/122012453148/mtbms',
    portals: []
  }
];
