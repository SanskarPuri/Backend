const sampleCourses = [
  {
    title: "JavaScript Fundamentals",
    description:
      "This course covers the fundamentals of JavaScript from scratch. Students will learn variables, data types, operators, loops, functions, arrays, objects and DOM manipulation. By the end of the course, you will be able to build interactive web pages and solve beginner-level programming problems confidently.",
    instructor: "Aman Sharma",
    duration: "6 weeks",
    price: 1499,
    img:
      "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Python for Beginners",
    description:
      "Learn Python programming from the ground up. This course introduces syntax, conditional statements, loops, functions, lists, dictionaries and file handling. Students will also work on small projects to strengthen their problem-solving skills and gain practical experience.",
    instructor: "Priya Verma",
    duration: "8 weeks",
    price: 1999,
    img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935"
  },
  {
    title: "Web Development Bootcamp",
    description:
      "A complete beginner-friendly course that teaches HTML, CSS and JavaScript. Students will build responsive websites, learn layouts using Flexbox and Grid, create forms and develop interactive user interfaces while following modern web development practices.",
    instructor: "Rahul Gupta",
    duration: "10 weeks",
    price: 2999,
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "Data Structures and Algorithms",
    description:
      "This course focuses on building strong problem-solving skills. Topics include arrays, linked lists, stacks, queues, trees, graphs, recursion and sorting algorithms. Students will practice coding challenges that are frequently asked in technical interviews.",
    instructor: "Neha Kapoor",
    duration: "12 weeks",
    price: 3499,
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
  },
  {
    title: "MongoDB Essentials",
    description:
      "Learn how to design and manage databases using MongoDB. This course covers collections, documents, CRUD operations, schema design, Mongoose integration and relationships between different collections in a Node.js application.",
    instructor: "Vikram Singh",
    duration: "4 weeks",
    price: 1299,
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
  },
  {
    title: "Node.js and Express",
    description:
      "Build backend applications using Node.js and Express. Students will learn routing, middleware, REST APIs, server-side rendering, authentication basics and how to connect applications with MongoDB databases.",
    instructor: "Ankit Mishra",
    duration: "8 weeks",
    price: 2199,
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c"
  },
  {
    title: "Machine Learning Basics",
    description:
      "An introductory course to machine learning concepts. Learn about supervised learning, unsupervised learning, regression, classification and model evaluation while working on beginner-friendly datasets and practical examples.",
    instructor: "Sneha Patel",
    duration: "10 weeks",
    price: 3999,
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  },
  {
    title: "React Basics",
    description:
      "Learn the fundamentals of React including components, JSX, props, state and hooks. Build reusable UI components and understand how modern frontend applications are structured and managed.",
    instructor: "Karan Malhotra",
    duration: "6 weeks",
    price: 1799,
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee"
  },
  {
    title: "Advanced React with Redux",
    description:
      "Take your React skills further by learning Redux for state management, React Router for navigation, and performance optimization techniques. Build a full-scale single-page application from scratch.",
    instructor: "Divya Nair",
    duration: "8 weeks",
    price: 2499,
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    title: "TypeScript for JavaScript Developers",
    description:
      "Learn how to add static typing to your JavaScript projects using TypeScript. Topics include interfaces, generics, type inference, decorators and integrating TypeScript with React and Node.js projects.",
    instructor: "Rohit Bhatia",
    duration: "5 weeks",
    price: 1599,
    img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713"
  },
  {
    title: "Java Programming Masterclass",
    description:
      "A comprehensive course covering core Java concepts including OOP, collections, exception handling, multithreading and file I/O. Ideal for students preparing for enterprise application development or interviews.",
    instructor: "Suresh Iyer",
    duration: "10 weeks",
    price: 2799,
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
  },
  {
    title: "C++ for Competitive Programming",
    description:
      "Master C++ with a focus on competitive programming. Learn STL, time complexity analysis, dynamic programming, greedy algorithms and graph theory through practical problem-solving sessions.",
    instructor: "Manish Tripathi",
    duration: "12 weeks",
    price: 2999,
    img: "https://images.unsplash.com/photo-1542903660-eedba2cda473"
  },
  {
    title: "SQL and Database Management",
    description:
      "Learn relational database concepts, SQL queries, joins, indexing, normalization and database design. Hands-on practice with MySQL and PostgreSQL to manage real-world datasets effectively.",
    instructor: "Anjali Desai",
    duration: "6 weeks",
    price: 1399,
    img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d"
  },
  {
    title: "DevOps and CI/CD Pipelines",
    description:
      "Understand the fundamentals of DevOps culture and tools. Learn Docker, Kubernetes basics, Jenkins, Git workflows and how to set up continuous integration and continuous deployment pipelines.",
    instructor: "Harish Reddy",
    duration: "9 weeks",
    price: 3299,
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692"
  },
  {
    title: "AWS Cloud Practitioner",
    description:
      "Get started with cloud computing using AWS. Learn about EC2, S3, IAM, Lambda, VPC and other core services while preparing for the AWS Cloud Practitioner certification exam.",
    instructor: "Pooja Agarwal",
    duration: "7 weeks",
    price: 2899,
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
  },
  {
    title: "UI/UX Design Fundamentals",
    description:
      "Learn the principles of user interface and user experience design. Topics include wireframing, prototyping, color theory, typography and usability testing using tools like Figma.",
    instructor: "Ritika Joshi",
    duration: "6 weeks",
    price: 1899,
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5"
  },
  {
    title: "Flutter App Development",
    description:
      "Build cross-platform mobile applications using Flutter and Dart. Learn widgets, state management, navigation, API integration and how to publish apps to the Play Store and App Store.",
    instructor: "Siddharth Rao",
    duration: "9 weeks",
    price: 2599,
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3"
  },
  {
    title: "Cybersecurity Essentials",
    description:
      "An introduction to cybersecurity concepts including network security, ethical hacking basics, cryptography, malware analysis and best practices for protecting systems and data.",
    instructor: "Arjun Khanna",
    duration: "8 weeks",
    price: 3199,
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
  },
  {
    title: "Next.js for Production Apps",
    description:
      "Learn to build server-rendered and statically generated React applications using Next.js. Topics include routing, API routes, SSR, SSG, image optimization and deployment on Vercel.",
    instructor: "Tanvi Mehta",
    duration: "6 weeks",
    price: 2099,
    img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0"
  },
  {
    title: "Django for Web Development",
    description:
      "Build robust web applications using Django, a high-level Python web framework. Learn models, views, templates, the Django ORM, authentication and deploying Django apps to production.",
    instructor: "Kavita Sharma",
    duration: "8 weeks",
    price: 2299,
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e"
  },
  {
    title: "Git and GitHub Mastery",
    description:
      "Learn version control with Git and collaboration using GitHub. Topics include branching, merging, rebasing, pull requests, resolving conflicts and contributing to open-source projects.",
    instructor: "Nikhil Bansal",
    duration: "3 weeks",
    price: 999,
    img: "https://images.unsplash.com/photo-1556075798-4825dfaaf498"
  },
  {
    title: "GraphQL API Development",
    description:
      "Learn to design and build efficient APIs using GraphQL. Topics include schemas, resolvers, queries, mutations, subscriptions and integrating GraphQL with React and Node.js applications.",
    instructor: "Meera Iyer",
    duration: "5 weeks",
    price: 1799,
    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd"
  }
];

module.exports = sampleCourses;