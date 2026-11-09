/**
 * Edit your portfolio content here; UI components read from this file.
 * All missing/private details intentionally stay empty until you confirm them.
 */
export const portfolio = {
  name: 'Sk Sarfaraj Ali',
  shortName: 'Sarfaraj',
  initials: 'SA',
  roles: ['Software Developer', 'Frontend Developer'],
  location: 'Indore, India',
  education: {
    degree: 'B.Tech in Computer Science & Engineering',
    college: 'Indore Institute of Science and Technology (IIST)',
    graduation: '2028',
  },
  intro: 'I build thoughtful, responsive web experiences and enjoy turning ideas into clean, functional interfaces.',
  about: 'I am a Computer Science & Engineering student with an interest in frontend development and software engineering. I enjoy learning by building real projects, improving details, and making digital experiences intuitive across devices.',
  profileImage: `${import.meta.env.BASE_URL}images/profile.jpg`,
  resumeUrl: '', // To enable resume: put your PDF in public/resume.pdf and set '/resume.pdf'.
  contact: {
    email: 'sksarfarajali824@gmail.com', // Previously provided; confirm before publishing.
    phone: '+919832722644', // Private by default; set showPhone true only if you want this public.
    showPhone: false,
    github: 'https://github.com/sarfaraj666',
    linkedin: 'https://www.linkedin.com/in/sk-sarfaraj-ali0666/', // Check the profile URL before publishing.
  },
  skills: [
    { category: 'Programming', caption: 'Logic, problem solving & fundamentals', items: ['C', 'C++', 'Java', 'Python (Basic)'] },
    { category: 'Frontend Development', caption: 'Responsive interfaces for the web', items: ['HTML', 'CSS', 'JavaScript'] },
    { category: 'Tools & Workflow', caption: 'Tools I use while building', items: ['Git', 'GitHub', 'VS Code'] },
  ],
  projects: [
    {
      id: 'feality',
      number: '01',
      name: 'FEALITY ITALY',
      category: 'Frontend Development · Luxury Interiors',
      description: 'A responsive luxury interior design frontend showcasing kitchen, wardrobe and vanity collections through an editorial visual experience.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      liveUrl: 'https://sarfaraj666.github.io/FEALITY_ITALY/',
      githubUrl: 'https://github.com/sarfaraj666/FEALITY_ITALY',
      screenshot: '', // Replace with '/images/feality.webp' once you upload an authentic screenshot.
      theme: 'interior',
    },
    {
      id: 'portfolio',
      number: '02',
      name: 'Personal Portfolio',
      category: 'Frontend Development · Personal Website',
      description: 'A responsive personal website created with HTML, CSS and JavaScript to present skills, projects and ways to get in touch.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://sarfaraj666.github.io/Portfolio-/',
      githubUrl: '', // Add the exact repo link when confirmed; never guess.
      screenshot: '', // Replace with '/images/portfolio.webp' after you provide a screenshot.
      theme: 'portfolio',
    },
  ],
};
