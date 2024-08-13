import aboutpic from "./components/Access/ambuj.jpeg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#',
  title: 'AS-folio',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Ambuj Srivastava',
  role: 'Full stack developer',
  description:
    "Skilled in MERN Stack, Reactjs, Django, HTML, CSS, JavaScript, Python, DSA and C. Pursuing B.Tech in Computer Science and Engineering. Dedicated to delivering seamless user experiences and innovative web solutions. Let's connect and build something great together!",
  resume: 'https://drive.google.com/file/d/1SUb94adVF1jzkZt89_wNyDAWhFo0nMe0/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/ambuj-srivastava-6ab000259',
    github: 'https://github.com/Ambuj2311',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'The Daily NewsPaper',
    description:
      'A dynamic web application built with HTML, CSS, Bootstrap, and Django. It features an interactive layout for browsing and reading the latest news articles, offering users a seamless news experience.',
    stack: ['Django','HTML','CSS','Bootstrap', 'Google Map API'],
    sourceCode: 'https://github.com/Ambuj2311/The_Daily_Newspaper',
    livePreview: '#',
  },
  {
    name: 'Nature Nurture',
    description:
      'A visually appealing website developed with HTML, CSS, Bootstrap, and Django. It provides interactive content on environmental conservation and sustainable practices, engaging users with resources and tips on protecting nature.',
    stack: ['Django','HTML','CSS','Bootstrap', 'Google Map API'],
    sourceCode: 'https://github.com/Morganbb104/Event_Planner_project2',
    livePreview: 'https://obscure-chamber-98928.herokuapp.com/',
  },
  {
    name: 'ToDo List',
    description:
      'An interactive task management application created with ReactJS. It enables users to dynamically organize and track their daily tasks with an engaging and user-friendly interface.',
    stack: ['HTML','CSS','JavaScript', 'React'],
    sourceCode: 'https://github.com/stone-com/Resource-Planner',
    livePreview: '#',
  },
  {
    name: 'AS-folio',
    description:
      'A personal portfolio website designed with ReactJS. It showcases my skills, projects, and achievements in a dynamic and interactive manner, offering an engaging experience for visitors to explore your work.',
    stack: ['HTML','CSS','JavaScript', 'React'],
    sourceCode: 'https://github.com/stone-com/Resource-Planner',
    
  },
  {
    name: 'Face Recognition and Attendance System',
    description:
      'An advanced system utilizing OpenCV for dynamic face recognition to automate attendance tracking. It provides an interactive and efficient way to identify individuals and record their presence with precision.',
    stack: ['OpenCV', 'Machine Learning'],
    sourceCode: 'https://github.com/Morganbb104/M7-project2-musictore-recommendations-Huang_Chengchien',
    livePreview: 'https://cheng32-musicstore-catalog.herokuapp.com/track',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C',
  'Python',
  'DSA',
  'HTML',
  'CSS',
  'JavaScript',
  'Django',
  'MERN Stack',
  'MySQL',
  'MongoDB',
  'React',
  'Git',
  'Git-Hub'

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'https://www.asrimbuj@gmail.com',
}

export { header, about, projects, skills, contact, }
