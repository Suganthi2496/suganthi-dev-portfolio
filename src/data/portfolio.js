// Central content for the portfolio. Edit here to update the site.

export const profile = {
  name: 'Suganthi S',
  title: 'Senior Backend Developer',
  tagline: 'Python · FastAPI · Microservices',
  resume: '/Suganthi Backend Developer.pdf',
  location: 'Bengaluru, Karnataka, 560027',
  email: 'suganthi2496@gmail.com',
  phone: '+91 87787 32134',
  phoneHref: '+918778732134',
  linkedin: 'https://www.linkedin.com/in/suganthi2496',
  linkedinLabel: 'in/suganthi2496',
}

export const stats = [
  { value: 7, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '+', label: 'Microservices & APIs' },
  { value: 6, suffix: '', label: 'Databases & Search Engines' },
]

export const about = {
  paragraphs: [
    "I'm a <strong>Senior Backend Developer</strong> based in Bengaluru with over <strong>7 years</strong> of experience turning complex business requirements into reliable, scalable systems. My core strength is the backend: designing <strong>microservices architectures</strong>, optimizing database schemas and indexing strategies, and building <strong>REST APIs</strong> that stay fast as data and traffic grow.",
    "I work primarily in <strong>Python (FastAPI)</strong> and have deep roots in <strong>PHP (CodeIgniter / Laravel)</strong> from maintaining and modernizing legacy systems. I've delivered real-time communication (WebSockets, 100ms video), integrated payments (Stripe, RevenueCat, Razorpay, PhonePe), and built search platforms with <strong>Elasticsearch</strong> and <strong>Typesense</strong>.",
    "While backend is my focus, I'm comfortable across the full stack and ship production UIs with <strong>React.js</strong> and <strong>Next.js</strong>. I also leverage AI-assisted tooling (Cursor, Claude Code) to accelerate development, code review, and system design.",
  ],
  highlights: [
    { icon: '🚀', text: 'Scalable microservices & high-performance REST APIs' },
    { icon: '🗄️', text: 'Database design, indexing & query optimization' },
    { icon: '⚡', text: 'Redis caching, real-time WebSockets & 100ms video call integration' },
    { icon: '💳', text: 'Payment & subscription integrations (Stripe, RevenueCat, Razorpay, PhonePe)' },
  ],
  facts: [
    { k: '📍 Location', v: 'Bengaluru, Karnataka' },
    { k: '💼 Current', v: 'Sr. Backend Dev' },
    { k: '🎯 Focus', v: 'Python · FastAPI' },
    { k: '🌐 Languages', v: 'English · Tamil' },
    { k: '✅ Status', v: 'Open to work', accent: true },
  ],
}

export const experience = [
  {
    role: 'Senior Backend Developer',
    period: 'Apr 2025 – Present',
    company: 'Bosswallah Technologies Pvt Ltd',
    note: '(formerly Bossworks)',
    place: 'Bengaluru',
    points: [
      'Lead architecture & development of scalable backend services using Python (FastAPI) and a microservices architecture.',
      'Design and optimize database schemas, indexing strategies, and data models for high-performance applications.',
      'Integrate and manage subscription & payment workflows with <strong>Stripe</strong> and <strong>RevenueCat</strong>.',
      'Architect scalable REST APIs, authentication systems, and third-party integrations.',
      'Drive technical decision-making, code-quality standards, and backend best practices across teams.',
      'Leverage AI tools (Cursor, Claude Code) to accelerate development, reviews, debugging & system design.',
    ],
    tags: ['FastAPI', 'Microservices', 'Stripe', 'RevenueCat', 'System Design'],
  },
  {
    role: 'Backend Developer',
    period: 'Jul 2021 – Apr 2025',
    company: 'Bosswallah Technologies Pvt Ltd',
    note: '(formerly ffreedom App)',
    place: 'Bengaluru',
    points: [
      'Built scalable microservices and REST APIs with Python (FastAPI) while maintaining legacy PHP (CodeIgniter) systems.',
      'Developed CRM platforms, dashboards, and frontend applications using React.js.',
      'Optimized performance across MySQL, MongoDB, Redis, Elasticsearch & Typesense.',
      'Automated analytics workflows with Mage AI; integrated payment gateways (Razorpay, PhonePe).',
      'Delivered real-time communication via WebSockets, 100ms, Exotel & Gupshup.',
    ],
    tags: ['FastAPI', 'React.js', 'Elasticsearch', 'Typesense', 'WebSockets', 'Redis'],
  },
  {
    role: 'Junior PHP Developer',
    period: 'Oct 2018 – Apr 2021',
    company: 'Pixel Tech',
    note: '',
    place: 'Chennai',
    points: [
      'Developed and maintained web applications using Core PHP, WordPress, OpenCart & CodeIgniter.',
      'Built responsive, user-friendly interfaces with HTML, CSS, JavaScript & jQuery.',
      'Collaborated with clients to gather requirements and deliver customized web solutions.',
      'Integrated APIs and followed coding standards for scalable, maintainable applications.',
    ],
    tags: ['PHP', 'CodeIgniter', 'WordPress', 'OpenCart', 'jQuery'],
  },
]

export const featuredSkills = {
  icon: '⚙️',
  title: 'Backend & APIs',
  badge: 'Core strength',
  bars: [
    { label: 'Python · FastAPI', level: 95 },
    { label: 'REST API Design', level: 95 },
    { label: 'Microservices Architecture', level: 90 },
    { label: 'PHP · CodeIgniter / Laravel', level: 88 },
    { label: 'WebSockets & Real-time', level: 85 },
    { label: 'Authentication & Security', level: 85 },
  ],
}

export const skillGroups = [
  {
    icon: '🗄️',
    title: 'Databases & Search',
    chips: ['MySQL', 'MongoDB', 'ClickHouse', 'Redis', 'Elasticsearch', 'Typesense'],
  },
  {
    icon: '🖥️',
    title: 'Frontend',
    chips: ['React.js', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'jQuery'],
  },
  {
    icon: '🔌',
    title: 'Integrations',
    chips: ['Stripe', 'RevenueCat', 'Razorpay', 'PhonePe', '100ms', 'Exotel', 'Gupshup', 'MoEngage', 'Adjust'],
  },
  {
    icon: '🛠️',
    title: 'Tools & Platforms',
    chips: ['Docker', 'Kafka', 'CDC', 'AWS', 'GCP', 'Git', 'Jira', 'FFmpeg', 'Mage AI'],
  },
  {
    icon: '🤖',
    title: 'AI-Assisted Dev',
    chips: ['Cursor', 'Claude Code'],
  },
]

export const projects = [
  {
    icon: '🚀',
    title: 'Bossworks & Bosswallah Platform',
    tagline: 'AI-powered platforms helping entrepreneurs start, manage & scale businesses.',
    points: [
      'Independently designed & built the complete <strong>User Feedback & Helpdesk System</strong> (React.js + FastAPI).',
      'Built scalable backend microservices and REST APIs; designed schemas across MySQL, MongoDB, Redis & ClickHouse.',
      'Integrated <strong>Stripe</strong> & <strong>RevenueCat</strong> for subscriptions and payments.',
      'Built onboarding, reporting & business-automation modules; automated analytics with Mage AI.',
    ],
    tags: ['FastAPI', 'React.js', 'MySQL', 'MongoDB', 'Redis', 'ClickHouse', 'Stripe', 'RevenueCat'],
  },
  {
    icon: '💬',
    title: 'Communication & Search Platform',
    tagline: 'Real-time expert chat/video consultations with intelligent content discovery.',
    points: [
      'Developed real-time chat & video consultation features using <strong>WebSockets</strong>, Redis & <strong>100ms</strong>.',
      'Designed scalable FastAPI microservices and search APIs over <strong>Elasticsearch</strong> & <strong>Typesense</strong>.',
      'Built search APIs supporting filtering, ranking & autocomplete.',
      'Optimized indexing & query response times for large datasets, improving discoverability across web & mobile.',
    ],
    tags: ['FastAPI', 'WebSockets', 'Redis', 'Elasticsearch', 'Typesense', '100ms'],
  },
  {
    icon: '📊',
    title: 'Internal CRM Platform',
    tagline: 'Centralized system for employees, incentives, salaries, comms & course ops.',
    points: [
      'Built & enhanced modules for employee, salary, incentive & course management.',
      'Built a cloud-based <strong>click-to-call</strong> solution integrating multiple telecom providers.',
      'Implemented Redis caching to cut DB load; developed Elasticsearch indexing for fast retrieval.',
      'Integrated MoEngage notifications & reporting dashboards for operational insight.',
    ],
    tags: ['PHP · CodeIgniter', 'React.js', 'MySQL', 'Redis', 'Elasticsearch', 'MoEngage'],
  },
  {
    icon: '🌐',
    title: 'Corporate & E-Commerce Websites',
    tagline: 'Responsive, high-performance web solutions for multiple clients.',
    points: [
      'Developed dynamic websites & e-commerce apps with Core PHP, WordPress & OpenCart.',
      'Built responsive UIs with HTML, CSS, JavaScript & jQuery.',
      'Customized themes, plugins & OpenCart modules to client requirements.',
      'Optimized performance, SEO & database structure for a better user experience.',
    ],
    tags: ['PHP', 'WordPress', 'OpenCart', 'JavaScript', 'jQuery', 'MySQL'],
  },
]

export const education = [
  {
    year: '2013 – 2017',
    title: 'B.E. in Computer Science & Engineering',
    place: 'University College of Engineering, Anna University · Panruti, TN',
    score: '69%',
  },
  {
    year: '2011 – 2012',
    title: 'H.S.C (12th)',
    place: 'N.L.C Girls HSS · Neyveli, TN',
    score: '81.6%',
  },
  {
    year: '2010 – 2011',
    title: 'S.S.L.C (10th)',
    place: "St. Joseph's High School · Neyveli, TN",
    score: '86.8%',
  },
]

export const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
]
