export const homeContent = {
  meta: {
    title: 'Oscar Dyremyhr – Portfolio and Blog',
    description:
      'Portfolio and Blog',
  },
  typed: [
    `I craft data platforms and infrastructures`,
    `peruse my <a href="/blog">blog posts</a>`,
    `learn a bit <a href="/about">about me</a>`,
    `browse my <a href="/about#timeline">work history</a>`,
    'checkout my <a href="/about#certifications">cetifications</a>',
    `check out the <a href="/uses">tools I use</a>`,
    `delve into my <a href="https://github.com/ossinova" rel="noopener noreferrer">GitHub</a>`,
    `follow me on <a href="https://www.linkedin.com/in/oscar-dyremyhr/" rel="noopener noreferrer">LinkedIn</a>`,
  ],
  title: 'Oscar Dyremyhr',
  description:
    'Portfolio and Blog',
  items: [
    {
      path: '/blog',
      title: 'Blog',
      target: '_self',
    },
    {
      path: '/about',
      title: 'About',
      target: '_self',
      style: 'reverse',
    },
  ],
  featured: {
    title: 'Featured Post',
  },
  latest: {
    title: 'Latest Post',
  },
};

export const blogContent = {
  heading: 'Blog',
  meta: {
    title: 'Blog – Oscar Dyremyhr',
    description:
      'Thoughts on data engineering, coding and markdown projects.',
  },
  error: {
    database: '⚠️ Database Error: Posts Could not be loaded.',
    auth: '⚠️ Authentication Error: Must be logged in to view this page',
  },
  search: {
    placeholder: 'Search title or #category',
    noresult: 'No posts found.',
    clear: 'Clear search',
    clearFilter: 'Clear filter',
  },
};

export const blogPostContent = {
  meta: {
    title: ' – Oscar Dyremyhr',
  },
  title: {
    draft: 'Draft –',
  },
  xUrl: 'https://x.com/oscardyremyhr',
};

export const aboutContent = {
  meta: {
    title: 'About – Oscar Dyremyhr',
    description: `Oscar Dyremyhr's bio, mission statement, skills, stack, experience, availability, and career timeline.`,
    github: 'GitHub',
    x: 'X',
    linkedin: 'LinkedIn',
  },
  heading: 'About',
  avatar: {
    title: 'Oscar Dyremyhr',
    img: '/avatar/oscar-dyremyhr.jpg',
  },
  social: {
    title: 'Social',
    items: [
      {
        path: 'https://github.com/ossinova',
        title: 'GitHub',
        cName: 'iconGithub icon',
      },
      {
        path: 'https://x.com/oscardyremyhr',
        title: 'X',
        cName: 'iconX icon',
      },
      {
        path: 'https://www.linkedin.com/in/oscar-dyremyhr/',
        title: 'LinkedIn',
        cName: 'iconLinkedin icon',
      },
    ],
  },
  bio: {
    subheading: `Hey there, I'm Oscar 👋`,
    content: `I'm a data engineer driven by the challenge of building exceptional data frameworks and infrastructures. This blog serves as my digital canvas to chronicle my professional path, engage in transparent learning, and contribute my expertise to the data engineering community.`,
    items: [
      {
        path: '/resume',
        title: 'Download Resume',
        rel: 'noopener noreferrer',
        target: '_blank',
        icon: 'download',
      },
    ],
  },
  resume: {
    title: 'Resume',
  },
  skills: {
    title: 'Proficiencies',
    items: [
      'Data Engineering',
      'Python',
      'SQL',
      'PySpark',
      'Azure',
      'DevOps',
      'Git',
      'Atlassian',
      'Web Development',
      'React',
    ],
  },
  datastack: {
    items: [
      'Databricks',
      'Azure Data Factory',
      'Azure Data Lake Storage',
      'Azure SQL Database',
    ],
  },
   webstack: {
    items: [
      'Node.js',
      'Three.js',
      'Prisma ORM',
      'PostgreSQL',
      'Git',
      'SWR',
      'SEO',
      'RESTful APIs',
      'Vercel',
      'Supabase',
    ],
  },
  experience: {
    title: 'Experience',
    items: [
      "With a robust three-year track record in data engineering within Helthjem and Capgemini's Insights & Data division, my role involves harnessing data's transformative power for client business enhancement.",
      "My tenure has been marked by the construction of intricate data pipelines, ETL processes, and data storage solutions across AWS, GCP, and Azure, employing the latest in technology. My fervor lies in the realm of data engineering and analytics, with a commitment to lifelong learning and skill enhancement evidenced by the achievement of 8 Databricks badges (See below).",
      "Armed with a suite of tools including Python, R, Tableau, PowerBI, SQL, and Spark, I excel in translating data insights into strategic business actions. I'm dedicated to crafting top-tier, scalable, and forward-thinking data solutions that drive value for my clients and colleagues, echoing the innovative spirit found in today's dynamic connection between humans and digital technologies.",
    ],
  },
  availability: {
    title: 'Current Project',
    text: 'Software Engineer II @',
    text2: 'Nike Innovation Center',
    title2: 'Mission:',
    location: 'Remote or in-office in Portland, Ore. area.',
    link: 'https://lebronjamesinnovationcenter.nike.com/',
    items: [
      '• Develop fullstack digital prototypes.',
      '• Build high quality user interfaces.',
      '• Push the boundaries of modern web tech.',
    ],
  },
  certifications: {
    title: 'Certifications',
    items: [
      {
        path: 'https://credentials.databricks.com/a11b9fe6-b21f-4f87-9c24-55c2dd606bf7#gs.07bw4b',
        title: 'Databricks Certified Data Engineer Professional',
        issued: 'Databricks @ June 27, 2023',
        imageUrl: '/certs/dbx_engineer_pro.png',
      },
      {
        path: 'https://credentials.databricks.com/edc89e6f-7af4-4580-9b92-0c033cdbadef#gs.07byuf',
        title: 'Databricks Certified Data Engineer Associate',
        issued: 'Databricks @ June 22, 2023',
        imageUrl: '/certs/dbx_engineer_ass.png',
      },
      {
        path: 'https://credentials.databricks.com/29b9e0dc-f7e5-4f25-ba69-3aa925dbe875#gs.079z03',
        title: 'Databricks Certified Data Analyst Associate',
        issued: 'Databricks @ June 29, 2023',
        imageUrl: '/certs/dbx_analyst_ass.png',
      },
      {
        path: 'https://credentials.databricks.com/875164da-5d6c-4fe5-a23e-e904037901df#gs.09qhbu',
        title: 'Databricks Academy Accreditation - Generative AI Fundamentals',
        issued: 'Databricks @ June 30, 2023',
        imageUrl: '/certs/dbx_accred_ai.png',
      },
      {
        path: 'https://credentials.databricks.com/ee9ae9cd-3546-4a8d-8845-4977667a2366#gs.09qml1',
        title: 'Databricks Academy Accreditation - Azure Databricks Platform Architect',
        issued: 'Databricks @ June 20, 2023',
        imageUrl: '/certs/dbx_accred_architect.png',
      },
      {
        path: 'https://credentials.databricks.com/a3754aac-107e-421e-a796-df2dff25a642#gs.09qk5f',
        title: 'Databricks Academy Accreditation - Databricks Lakehouse Fundamentals',
        issued: 'Databricks @ Oct 25, 2022',
        imageUrl: '/certs/dbx_accred_fund.png',
      },
    ],
  },
  contact: {
    title: 'Contact',
    email: {
      title: 'Show Email Address',
    },
    copiedToClipboard: 'Copied to clipboard ✅',
    items: [
      {
        path: 'https://x.com/messages/compose?recipient_id=23831468',
        title: 'X',
        rel: 'noopener noreferrer',
        target: '_blank',
        handle: '@oscardyremyhr',
      },
    ],
  },
};

export const timelineContent = {
  meta: {
    title: 'Timeline',
  },
  fullStory: {
    text: 'Read the full story',
    link: '/blog/my-journey-to-data-engineering-a-decade-of-growth-and-learning',
  },
  items: [
    {
      title: 'Senior Consultant @ Capgemini',
      content:
        'Consulting on IT based client projects, with a focus on insights and data.',
      cName: 'event',
    },
    {
      content: 'Present',
      cName: 'date',
    },
    {
      content: '2021',
      cName: 'date',
    },
    {
      title: 'Consultant @ Capgemini',
      content:
        'Consulting on IT based client projects, with a focus on insights and data.',
      cName: 'event',
    },
    {
      title: 'Junior Data Engieer @ Helthjem',
      content:
        'Developed a data platform in AWS.',
      cName: 'event',
    },
    {
      content: '2020',
      cName: 'date',
    },
    {
      content: '2018',
      cName: 'date',
    },
    {
      title: 'MSc in Business Analytics @ BI',
      content:
        'Returned home to do my Masters in IT + Business.',
      cName: 'event',
    },
    {
      title: 'BSc in Information Sciennnces & Technology @ Penn State',
      content:
        'Traveled to the States to do my Bachelor in IT.',
      cName: 'event',
    },
    {
      content: '2013',
      cName: 'date',
    },
    {
      content: '2002',
      cName: 'date',
    },
    {
      title: 'First Computer',
      content:
        'My dad got a Apple iMac. Started browsing the web and playing flash games.',
      cName: 'event',
    },
    {
      title: 'Born',
      content:
        'Came to life May 20th in Oslo, Norway.',
      cName: 'event',
    },
    {
      content: '1995',
      cName: 'date',
    },
    
  ],
};

export const thanksContent = {
  meta: {
    title: 'Thank You – Oscar Dyremyhr',
    description: 'Your contribution is greatly appreciated!',
  },
  heading: 'Thank You.',
  copy: 'Your contribution to the project is greatly appreciated!',
};

export const usesContent = {
  meta: {
    title: 'Uses – Oscar Dyremyhr',
    description: 'A list of gear, tools, and software I use.',
  },
  heading: 'Uses',
  subheading: 'An overwiew of the tools and technology I use',
  devices: {
    content: `### Devices
  #### Laptop
  - 2016 13" MacBook Pro (silver)
  ##### Specs:
  - 3.3GHz Dual-Core Intel i7
  - 16GB RAM
  - 500GB Flash Storage
  - MacOS Monterey
  ---
  #### Desktop
  - Self-built PC
  ##### Specs:
  - 3.8GHz 6-Core Intel i7 3930K
  - 32GB Corsair Vengeance DDR3 RAM
  - Samsung 850 Evo 500GB SSD
  - Geforce GTX 1080 Founders Edition
  - Motu Audio Express
  - 2x KRK VXT 8
  - Microsoft Windows 10
  ---
  #### Phone
  - iPhone 13 Pro Max
  ##### Specs:
  - 128GB Storage
  ---
  #### Headphones
  - [Beyerdynamic DT770Pro 80ohm](https://north-america.beyerdynamic.com/dt-770-pro.html)
  - [Sennheiser HD25-1 II](https://en-us.sennheiser.com/on-ear-dj-headphone-hd25)
  - [Apple AirPods Pro 2nd Gen - USB-C](https://www.apple.com/airpods-pro/)
  `,
  },
  tools: {
    content: `### Tools
  #### IDE
  - [VS Code](https://code.visualstudio.com/)
  ##### Data Egineering Extensions:
  - [Jupyter](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)
  - [Databricks](https://marketplace.visualstudio.com/items?itemName=databricks.databricks) 
  - [PyTest & Unittest](https://code.visualstudio.com/docs/python/testing)
  - [PyLance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)
  - [Black](https://marketplace.visualstudio.com/items?itemName=ms-python.black-formatter)
  ##### Web App Extensions:
  - [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - [CSS-in-JS](https://marketplace.visualstudio.com/items?itemName=paulmolluzzo.convert-css-in-js)
  - [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)
  - [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  ##### Common Extensions:
  - [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
  - [Tokyo Night](https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night)
  - [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
  - [IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
  ---
  #### Browser
  - [Google Chrome](https://www.google.com/chrome/)
  ##### Extensions (Chrome):
  - [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  - [uBlock Origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
  - [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
  - [Stylebot](https://chrome.google.com/webstore/detail/stylebot/oiaejidbmkiecgbjeifoejpgmdaleoha)

  `,
  },
  stack: {
    content: `### Stack

  #### Data Engineering
  - [Databricks](https://databricks.com/)
  - [Python](https://python.org/)
  - [SQL](https://www.w3schools.com/sql/)
  - [PySpark](https://spark.apache.org/docs/latest/api/python/index.html)
  - [Azure](https://azure.microsoft.com/en-us)
  - [Github & Git](https://github.com/)
  - [DevOps](https://azure.microsoft.com/en-us/products/devops)
  - [Atlassian](https://www.atlassian.com/)

  ---
  #### Web App
  - [Next.js](https://nextjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Emotion](https://emotion.sh/docs/introduction)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [PostgreSQL](https://www.postgresql.org/)
  - [Supabase](https://supabase.com)
  - [Prisma](https://www.prisma.io/)
  - [SWR](https://swr.vercel.app/)
  - [React Markdown](https://remarkjs.github.io/react-markdown/)
  - [React Syntax Highlighter](https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
  - [Vercel](https://vercel.com)

  ---
  #### CLI
  - Terminal (~ZSH)
  - [Powerlevel10k](https://github.com/romkatv/powerlevel10k)
  - [GitHub CLI](https://cli.github.com/)
  - [Vercel CLI](https://vercel.com/cli)
  - [Supabase CLI](https://supabase.com/docs/reference/cli)

  ---
  #### AI
  - [ChatGPT](https://chat.openai.com/chat)
  - [GitHub Copilot](https://copilot.github.com/)
  `,
  },
  software: {
    content: `### Software
  
  #### Markdown
  - [iA Writer](https://ia.net/writer)
  - [InkDrop](https://inkdrop.app/)

  #### Design
  - [Figma](https://www.figma.com/)
  
  #### Communication
  - [Teams](https://teams.microsoft.com/)
  - [Discord](https://discord.com/)
  
  #### Music & Podcasts
  - [Apple Music](https://music.apple.com/)
  - [YouTube Music](https://music.youtube.com)
  - [Apple Podcasts](https://www.apple.com/apple-podcasts/)

  ---
  `,
  },
};

export const errorContent = {
  notFound: {
    meta: {
      title: 'Page Not Found – Oscar Dyremyhr',
    },
    title: '404',
    text: `🤔 Page not found`,
    link: {
      path: '/',
      title: 'Return Home',
    },
    quote: `"The best thing about a boolean is even if you are wrong, you are only off by a bit."`,
    author: 'Unknown',
  },
  internalServerError: {
    meta: {
      title: 'Internal Server Error – Oscar Dyremyhr',
    },
    title: '500',
    text: `😵 Internal server error`,
    link: {
      path: '/',
      title: 'Return Home',
    },
    quote: `"Whoops, something has gone awry. I'll have this patched up in no time..."`,
    author: 'Oscar',
  },
};

export const footer = {
  logo: {
    alt: 'Oscar Dyremyhr Logo',
  },
  headings: {
    nav: 'Explore',
    social: 'Connect',
    poweredby: 'Powered By',
    contact: 'Contact',
  },
  poweredby: [
    {
      path: 'https://nextjs.org/',
      title: 'Next.js',
    },
    {
      path: 'https://next-auth.js.org/',
      title: 'NextAuth.js',
    },
    {
      path: 'https://vercel.com/',
      title: 'Vercel',
    },
    {
      path: 'https://www.prisma.io/',
      title: 'Prisma',
    },
    {
      path: 'https://supabase.com/',
      title: 'Supabase',
    },
    {
      path: 'https://threejs.org/',
      title: 'Three.js',
    },
  ],
  social: [
    {
      path: 'https://github.com/ossinova',
      title: 'GitHub',
    },
    {
      path: 'https://x.com/oscardyremyhr',
      title: 'X',
    },
    {
      path: 'https://linkedin.com/in/oscardyremyhr',
      title: 'LinkedIn',
    },
    {
      path: '/resume',
      title: 'Resume',
    },
  ],
  copyright: {
    text: 'Copyright © ',
    name: '— Oscar Dyremyhr',
    inspired: {
      name: 'Inspired by amirardalan',
      path: 'https://amirardalan.com',
      title: "Amir's Blog",
    },
  },
};

export const breadcrumbContent = {
  blog: 'Blog',
  create: 'Create',
  drafts: 'Drafts',
  edit: 'Edit',
};

// Donate
export const donate = {
  qr: 'data:image/png;base64,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',
  text: '98605552',
  address: '98605552',
  copied: 'Copied to clipboard ✅',
  meta: 'Copy VIPPS address',
};

// Admin
export const adminContent = {
  meta: {
    title: ' – Oscar Dyremyhr',
  },
  controls: {
    publish: 'Publish',
    unpublish: 'Unpublish',
    edit: 'Edit',
    delete: 'Delete',
    confirm: 'Confirm',
    cancel: 'Cancel',
    update: 'Update',
    save: 'Save',
    checkbox: {
      featured: 'Display on homepage. Can only feature one post at a time.',
      updateDate: 'If unchecked, original post date will display on post.',
    },
  },
  input: {
    placeholder: {
      title: 'Title',
      slug: 'URL/Slug',
      teaser: 'Teaser',
      content: 'Content',
    },
  },
  edit: {
    meta: {
      title: 'Edit',
    },
  },
  create: {
    meta: {
      title: 'Create – Oscar Dyremyhr',
    },
  },
  drafts: {
    meta: {
      title: 'Drafts – Oscar Dyremyhr',
    },
    notice: `Unpublished Draft`,
    empty: `No drafts. Nice and tidy! Perhaps`,
    empty2: 'try writing',
    empty3: 'one?',
  },
};
