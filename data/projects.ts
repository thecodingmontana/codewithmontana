import type { Project, TechStack } from '~/types'

export const projects: Project[] = [
  {
    name: 'Dogdom',
    tagline: 'An elegant mobile app built for dog lovers, with smooth interactions and playful design.',
    description: 'Dogdom is a cross-platform mobile app for dog lovers. It blends modern UI patterns, responsive layouts, and performance-first engineering to deliver a fun and functional experience for users who want to interact with dogs and dog-related content.',
    highlights: [
      'Built using Expo and React Native for seamless Android/iOS deployment.',
      'Responsive design with Nativewind (Tailwind CSS for React Native).',
      'Fast load times and intuitive navigation optimized for mobile UX.',
    ],
    stack: [
      {
        name: 'Expo',
        icon: 'simple-icons:expo',
      },
      {
        name: 'React',
        icon: 'devicon:react',
      },
      {
        name: 'React Native',
        icon: 'devicon:reactnative-wordmark',
      },
      {
        name: 'Nativewind',
        icon: 'devicon:tailwindcss',
      },
      {
        name: 'TypeScript',
        icon: 'logos:typescript-icon',
      },
    ],
    github: 'https://github.com/thecodingmontana/dogdom',
    color: '#F97316',
    is_working: true,
    image_url: '/images/dogdom.png',
  },
  {
    name: 'Convertle',
    tagline: 'Convert images, videos, and audio — without limits.',
    description: 'Convertle is an all-in-one media conversion tool for creators. Users can transform any format of image, video, or audio directly from their browser using FFmpeg and enjoy a smooth experience with zero constraints.',
    highlights: [
      'Powered by FFmpeg under the hood for accurate and fast conversions.',
      'UI built with Shadcn and TypeScript for maintainability and DX.',
      'Zero-limits conversion pipeline with Next.js App Router.',
    ],
    stack: [
      {
        name: 'Next.js',
        icon: 'simple-icons:expo',
      },
      {
        name: 'React',
        icon: 'devicon:react',
      },
      {
        name: 'Tailwind CSS',
        icon: 'devicon:tailwindcss',
      },
      {
        name: 'TypeScript',
        icon: 'logos:typescript-icon',
      },
      {
        name: 'FFmpeg',
        icon: 'logos:ffmpeg-icon',
      },
    ],
    github: 'https://github.com/thecodingmontana/dogdom.git',
    color: '#E2E4F6',
    is_working: true,
    website: 'https://github.com/thecodingmontana/convertle',
    image_url: 'images/convertle.png',
  },
  {
    name: 'Montflix Rebirth',
    tagline: 'Reimagining the movie platform experience with Angular 19.',
    description: 'Montflix Rebirth is a high-speed movie discovery app built with the latest Angular features. It offers real-time browsing powered by the TMDB API and a highly optimized UI built with Tailwind CSS v4.',
    highlights: [
      'Angular 19 with Angular Signals for reactive state handling.',
      'TMDB API for live movie data with dynamic search and filters.',
      'Responsive UI with Tailwind CSS v4 for a cinema-like feel.',
    ],
    stack: [
      {
        name: 'Angular',
        icon: 'logos:angular-icon',
      },
      {
        name: 'Tailwind CSS',
        icon: 'devicon:tailwindcss',
      },
      {
        name: 'TypeScript',
        icon: 'logos:typescript-icon',
      },
      {
        name: 'Signals',
        icon: 'devicon:angularjs',
      },
      {
        name: 'TMDB API',
        icon: 'catppuccin:api-blueprint',
      },
    ],
    github: 'https://github.com/thecodingmontana/montflix-rebirth',
    color: '#b25a80',
    is_working: true,
    website: 'https://montflix-rebirth.vercel.app/',
    image_url: '/images/montflix-rebirth.png',
  },
  {
    name: 'Todos',
    tagline: 'A local-first todo app with offline-first syncing and modern DX.',
    description: 'Todos is a productivity-focused app built for resilience. It works offline by default, syncs with a Nuxt.js backend using Drizzle ORM, and ensures your task list never misses a beat — even with poor connectivity.',
    highlights: [
      'Offline-first storage and sync using RxDB.',
      'Drizzle ORM and Nuxt.js on the backend for real-time syncing.',
      'Clean UI optimized for speed and usability.',
    ],
    stack: [
      {
        name: 'Nuxt.js',
        icon: 'logos:nuxt-icon',
      },
      {
        name: 'Vue',
        icon: 'logos:vue',
      },
      {
        name: 'Drizzle ORM',
        icon: 'material-icon-theme:drizzle',
      },
      {
        name: 'Tailwind CSS',
        icon: 'devicon:tailwindcss',
      },
      {
        name: 'TypeScript',
        icon: 'logos:typescript-icon',
      },
      {
        name: 'Nuxt Auth Utils',
        icon: 'devicon:nuxtjs',
      },
      {
        name: 'RxDB',
        icon: 'logos:rxdb',
      },
      {
        name: 'Shadcn UI',
        icon: 'simple-icons:shadcnui',
      },
      {
        name: 'PostgreSQL',
        icon: 'devicon:postgresql',
      },
    ],
    github: 'https://github.com/thecodingmontana/todos',
    color: '#3d46be',
    is_working: true,
    website: 'https://nuxt-local-first-todos.vercel.app',
    image_url: '/images/todos.png',
  },
  {
    name: 'Jonathan',
    tagline: 'A minimal, motion-rich photography portfolio to showcase creative excellence.',
    description: 'Jonathan is a photography portfolio built to be clean, immersive, and expressive. It combines motion effects with lightweight image handling to ensure stunning visuals and quick load times.',
    highlights: [
      'Nuxt 3 with Nuxt Image for high-performance image optimization.',
      'Tailwind CSS and smooth animation sequences.',
      'SEO and mobile-friendly layout with fast content delivery.',
    ],
    stack: [
      {
        name: 'Nuxt.js',
        icon: 'logos:nuxt-icon',
      },
      {
        name: 'Vue',
        icon: 'logos:vue',
      },
      {
        name: 'Tailwind CSS',
        icon: 'devicon:tailwindcss',
      },
      {
        name: 'TypeScript',
        icon: 'logos:typescript-icon',
      },
      {
        name: 'Nuxt Image',
        icon: 'devicon:nuxtjs',
      },
      {
        name: 'Motion',
        icon: 'simple-icons:framer',
      },
    ],
    github: 'https://github.com/thecodingmontana/jonathan-ke',
    color: '#E70E02',
    is_working: true,
    website: 'https://jonathan-ke.vercel.app',
    image_url: '/images/jonathan.png',
  },
  {
    name: 'Nuxt Lucia Auth',
    tagline: 'A plug-and-play authentication system for Nuxt projects.',
    description: 'Nuxt Lucia Auth is a full-stack authentication kit built for developers who want a robust, secure, and flexible auth setup in Nuxt.js. It comes with OAuth, credentials, email verification, and PostgreSQL integration out of the box.',
    highlights: [
      'Credential + OAuth authentication using Lucia.',
      'PostgreSQL + Drizzle ORM for typed backend.',
      'Email templates with Nodemailer + built-in routes and validation.',
    ],
    stack: [
      {
        name: 'Nuxt.js',
        icon: 'logos:nuxt-icon',
      },
      {
        name: 'Vue',
        icon: 'logos:vue',
      },
      {
        name: 'Drizzle ORM',
        icon: 'material-icon-theme:drizzle',
      },
      {
        name: 'Tailwind CSS',
        icon: 'devicon:tailwindcss',
      },
      {
        name: 'TypeScript',
        icon: 'logos:typescript-icon',
      },
      {
        name: 'Lucia Auth',
        icon: 'simple-icons:lucia',
      },
      {
        name: 'Shadcn UI',
        icon: 'simple-icons:shadcnui',
      },
      {
        name: 'PostgreSQL',
        icon: 'devicon:postgresql',
      },
      {
        name: 'Pinia',
        icon: 'logos:pinia',
      },
    ],
    github: 'https://github.com/thecodingmontana/nuxt-lucia-auth',
    color: '#FFFD82',
    is_working: true,
    website: 'https://nuxt-lucia-auth.vercel.app/',
    image_url: '/images/nuxt-lucia-auth.png',
  },
  {
    name: 'Jadoo',
    tagline: 'A modern travel agency landing page built to inspire exploration.',
    description: 'Jadoo is a beautiful, responsive travel landing page built with Nuxt 3 and enhanced with subtle motion. It targets conversion and visual storytelling for travel brands.',
    highlights: [
      'Modern layout with fluid transitions.',
      'Performance-focused with Nuxt 3 and static generation.',
      'Clean animations and tailored content sections.',
    ],
    stack: [
      {
        name: 'Nuxt.js',
        icon: 'logos:nuxt-icon',
      },
      {
        name: 'Vue',
        icon: 'logos:vue',
      },
      {
        name: 'Tailwind CSS',
        icon: 'devicon:tailwindcss',
      },
      {
        name: 'TypeScript',
        icon: 'logos:typescript-icon',
      },
      {
        name: 'Nuxt Image',
        icon: 'devicon:nuxtjs',
      },
    ],
    github: 'https://github.com/thecodingmontana/jadoo',
    color: '#C1666B',
    is_working: true,
    website: 'https://jadoo-ke.vercel.app',
    image_url: '/images/jadoo.png',
  },
  {
    name: 'KreativeStores',
    tagline: 'Helping creators manage, promote, and monetize their influence.',
    description: 'KreativeStores is a SaaS platform for content creators to manage their digital presence. It includes tools for monetization, promotion, and performance analytics — all designed for scalability and impact.',
    highlights: [
      'Tools for content scheduling, campaign tracking, and payout analytics.',
      'Customizable store pages for creators.',
      'Designed to support large user bases with scalable architecture.',
    ],
    stack: [
      {
        name: 'Nuxt.js',
        icon: 'logos:nuxt-icon',
      },
      {
        name: 'Vue',
        icon: 'logos:vue',
      },
      {
        name: 'Express.js',
        icon: 'simple-icons:express',
      },
      {
        name: 'Tailwind CSS',
        icon: 'devicon:tailwindcss',
      },
      {
        name: 'TypeScript',
        icon: 'logos:typescript-icon',
      },
      {
        name: 'Shadcn UI',
        icon: 'simple-icons:shadcnui',
      },
      {
        name: 'Nuxt Image',
        icon: 'devicon:nuxtjs',
      },
      {
        name: 'Pinia',
        icon: 'logos:pinia',
      },
    ],
    github: '',
    color: '#D4CDF4',
    is_working: true,
    website: 'https://www.kreativestores.com',
    image_url: '/images/kreativestores.png',
  },
  {
    name: 'Apiwap',
    tagline: 'Automate WhatsApp with powerful APIs and scheduling tools.',
    description: 'Apiwap is a WhatsApp automation platform that allows businesses to send, schedule, and manage automated messages. It exposes a clean REST API and WebSocket interface for real-time interaction.',
    highlights: [
      'API-first design with developer-friendly docs.',
      'WebSocket support for real-time updates.',
      'Role-based dashboard with stats and message logs.',
    ],
    stack: [
      {
        name: 'Vue',
        icon: 'logos:vue',
      },
      {
        name: 'Express.js',
        icon: 'simple-icons:express',
      },
      {
        name: 'Tailwind CSS',
        icon: 'devicon:tailwindcss',
      },
      {
        name: 'TypeScript',
        icon: 'logos:typescript-icon',
      },
      {
        name: 'Pinia',
        icon: 'logos:pinia',
      },
    ],
    github: '',
    color: '#0f8661',
    is_working: true,
    website: 'https://apiwap.com',
    image_url: '/images/apiwap.png',
  },
  {
    name: 'Nuxt GitHub Clone',
    tagline: 'A GitHub-inspired UI with real GitHub data and full auth.',
    description: 'Nuxt GitHub Clone mimics GitHub’s core UI/UX, using live GitHub APIs for real content. It includes auth, user dashboards, repo views, and responsive design.',
    highlights: [
      'GitHub OAuth authentication and repo fetching.',
      'Responsive layout with Tailwind CSS.',
      'Pinia for global state, with SSR support.',
    ],
    stack: [
      {
        name: 'Nuxt.js',
        icon: 'logos:nuxt-icon',
      },
      {
        name: 'Vue',
        icon: 'logos:vue',
      },
      {
        name: '@sidebase/nuxt-auth',
        icon: 'devicon:nuxtjs',
      },
      {
        name: 'Tailwind CSS',
        icon: 'devicon:tailwindcss',
      },
      {
        name: 'TypeScript',
        icon: 'logos:typescript-icon',
      },
      {
        name: 'Nuxt Image',
        icon: 'devicon:nuxtjs',
      },
      {
        name: 'Pinia',
        icon: 'logos:pinia',
      },
    ],
    github: 'https://github.com/thecodingmontana/nuxt-github-clone',
    color: '#da2f7b',
    is_working: false,
    website: 'https://nuxt-github-clone-ke.vercel.app',
    image_url: '',
  },
  {
    name: 'Nuxt Firebase Auth Starter',
    tagline: 'Kickstart your Nuxt app with Firebase-powered authentication.',
    description: 'A pre-configured Nuxt starter template featuring Firebase authentication, route guards, and responsive UI. Designed to reduce boilerplate for projects needing Firebase auth.',
    highlights: [
      'Firebase ready and Tailwind CSS pre-integrated.',
      'Full auth flow with guards and session persistence.',
      'Built-in UI components and error handling.',
    ],
    stack: [
      {
        name: 'Nuxt.js',
        icon: 'logos:nuxt-icon',
      },
      {
        name: 'Vue',
        icon: 'logos:vue',
      },
      {
        name: 'Firebase',
        icon: 'devicon:firebase',
      },
      {
        name: 'Tailwind CSS',
        icon: 'devicon:tailwindcss',
      },
      {
        name: 'TypeScript',
        icon: 'logos:typescript-icon',
      },
      {
        name: 'Shadcn UI',
        icon: 'simple-icons:shadcnui',
      },
      {
        name: 'Pinia',
        icon: 'logos:pinia',
      },
    ],
    github: 'https://github.com/thecodingmontana/nuxt-firebase-auth',
    color: '#18F2B2',
    is_working: true,
    website: 'https://nuxt-firebase-auth-starter.vercel.app',
    image_url: '/images/nuxt-firebase-auth.png',
  },
  {
    name: 'SnapEasy',
    tagline: 'One-click beautiful screenshots of any webpage.',
    description: 'SnapEasy is a utility tool to capture full-page or partial screenshots of websites. Built for simplicity and speed, it\'s perfect for designers, developers, or marketers.',
    highlights: [
      'Blazing-fast Nuxt 3 architecture.',
      'Uses Puppeteer for accurate page captures.',
      'Download and share screenshots instantly.',
    ],
    stack: [
      {
        name: 'Nuxt.js',
        icon: 'logos:nuxt-icon',
      },
      {
        name: 'Vue',
        icon: 'logos:vue',
      },
      {
        name: 'Puppeteer',
        icon: 'devicon:puppeteer',
      },
      {
        name: 'Tailwind CSS',
        icon: 'devicon:tailwindcss',
      },
      {
        name: 'TypeScript',
        icon: 'logos:typescript-icon',
      },
      {
        name: 'Shadcn UI',
        icon: 'simple-icons:shadcnui',
      },
    ],
    github: 'https://github.com/thecodingmontana/snapeasy',
    color: '#2FE6DE',
    is_working: true,
    website: 'https://snapeasy.vercel.app',
    image_url: '/images/snap-easy.png',
  },
  {
    name: 'Gmail Clone',
    tagline: 'A Gmail-style email UI powered by Firebase.',
    description: 'Gmail Clone replicates Gmail\'s clean email interface and real-time updates using Firebase Firestore and Auth. It’s fast, familiar, and a great UI showcase.',
    highlights: [
      'Authentication and mail sync via Firebase.',
      'Responsive layout with inbox, sent, and draft views.',
      'Search and filter UI with Tailwind CSS.',
    ],
    stack: [
      {
        name: 'Nuxt.js',
        icon: 'logos:nuxt-icon',
      },
      {
        name: 'Vue',
        icon: 'logos:vue',
      },
      {
        name: 'Firebase',
        icon: 'devicon:firebase',
      },
      {
        name: 'Tailwind CSS',
        icon: 'devicon:tailwindcss',
      },
      {
        name: 'TypeScript',
        icon: 'logos:typescript-icon',
      },
      {
        name: 'Shadcn UI',
        icon: 'simple-icons:shadcnui',
      },
      {
        name: 'Pinia',
        icon: 'logos:pinia',
      },
    ],
    github: 'https://github.com/thecodingmontana/nuxt-gmail-clone',
    color: '#FAE1DF',
    is_working: true,
    website: 'https://nuxt-gmail-clone.vercel.app',
    image_url: '/images/nuxt-gmail-clone.png',
  },
  {
    name: 'Twitter Clone (React)',
    tagline: 'A real-time Twitter clone built with React and Firebase.',
    description: 'This project emulates Twitter’s core features — tweeting, feeds, likes — with real-time updates using Firebase. Built as a modern single-page app.',
    highlights: [
      'Live tweet feed and like system.',
      'Realtime Firestore sync with minimal delay.',
      'Responsive UI styled with Tailwind.',
    ],
    stack: [
      {
        name: 'React',
        icon: 'devicon:react',
      },
      {
        name: 'Tailwind CSS',
        icon: 'devicon:tailwindcss',
      },
      {
        name: 'JavaScript',
        icon: 'logos:javascript',
      },
      {
        name: 'Firebase',
        icon: 'devicon:firebase',
      },
      {
        name: 'Redux',
        icon: 'logos:redux',
      },
    ],
    github: 'https://github.com/thecodingmontana/react-twitter-clone',
    color: '#E4C3AD',
    is_working: false,
    website: 'https://the-twitter-clone-ke.vercel.app',
    image_url: '/images/vue-twitter.png',
  },
  {
    name: 'Twitter Clone (Vue)',
    tagline: 'A Vue-powered Twitter clone with live updates and clean design.',
    description: 'A feature-rich Twitter clone built with Vue and Pinia. It uses Firebase for backend services and offers responsive mobile-first design.',
    highlights: [
      'Vue Composition API with real-time updates.',
      'Firebase auth and tweet syncing.',
      'Tailwind-powered layout optimized for mobile.',
    ],
    stack: [
      {
        name: 'Vue',
        icon: 'logos:vue',
      },
      {
        name: 'Tailwind CSS',
        icon: 'devicon:tailwindcss',
      },
      {
        name: 'JavaScript',
        icon: 'logos:javascript',
      },
      {
        name: 'Firebase',
        icon: 'devicon:firebase',
      },
      {
        name: 'Pinia',
        icon: 'logos:pinia',
      },
    ],
    github: 'https://github.com/thecodingmontana/vue-twitter-clone',
    color: '#928779',
    is_working: true,
    website: 'https://vue-twitter-ke.vercel.app',
    image_url: '/images/vue-twitter.png',
  },
]

export const techStack: TechStack[] = [
  {
    name: 'ReactJS',
    icon: 'logos:react',
  },
  {
    name: 'VueJS',
    icon: 'logos:vue',
  },
  {
    name: 'React Query',
    icon: 'logos:react-query',
  },
  {
    name: 'Vue Query',
    icon: 'logos:react-query-icon',
  },
  {
    name: 'Next.js',
    icon: 'logos:nextjs-icon',
  },
  {
    name: 'Nuxt.js',
    icon: 'logos:nuxt-icon',
  },
  {
    name: 'Redux',
    icon: 'logos:redux',
  },
  {
    name: 'Zustand',
    icon: 'devicon:zustand',
  },
  {
    name: 'Zod',
    icon: 'logos:zod',
  },
  {
    name: 'TypeScript',
    icon: 'logos:typescript-icon',
  },
  {
    name: 'Angular',
    icon: 'logos:angular-icon',
  },
  {
    name: 'Node.js',
    icon: 'logos:nodejs-icon-alt',
  },
  {
    name: 'Express.js',
    icon: 'simple-icons:express',
  },
  {
    name: 'Nest.js',
    icon: 'logos:nestjs',
  },
  {
    name: 'Git',
    icon: 'logos:git-icon',
  },
  {
    name: 'GitHub',
    icon: 'simple-icons:github',
  },
  {
    name: 'Expo',
    icon: 'simple-icons:expo',
  },
  {
    name: 'React Native',
    icon: 'devicon:reactnative-wordmark',
  },
  {
    name: 'pnpm',
    icon: 'devicon:pnpm',
  },
  {
    name: 'Linux',
    icon: 'logos:linux-tux',
  },
  {
    name: 'PostgreSQL',
    icon: 'devicon:postgresql',
  },
  {
    name: 'MySQL',
    icon: 'logos:mysql',
  },
  {
    name: 'Prisma',
    icon: 'simple-icons:prisma',
  },
  {
    name: 'Golang',
    icon: 'logos:gopher',
  },
  {
    name: 'Docker',
    icon: 'logos:docker-icon',
  },
]
