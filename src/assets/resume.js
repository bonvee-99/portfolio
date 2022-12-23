const resume = {
  experience: [
    {
      type: "experience",
      company: "Thinkwell Studio Montreal",
      title: "Software Developer (Co-op)",
      dateRange: "July 2022 - Present",
      location: "Vancouver / Montreal, Canada (Hybrid)",
      description: [
        "Implemented various features and functionalities for the Front-end and Back-end components of the GCP deployed and managed Feltboard Platform",
        "Researched and implemented an image resize proxy using Docker and Nginx and configured it for deployment with GKE",
        "Worked closely with Vue.js, Apollo GraphQL, Mongo, Express, and a variety of cloud services within GCP such as Cloud Storage, IoT Core, GKE, and Pub/Sub",
        "Reached 100% coverage when implementing tests for a YAML validation feature",
        "Presented features to the team as well as outside shareholders through forms such as tech-briefs and virtual presentations",
        "Collaborated with Product Designers, a QA Developer, a Software Architect, and other Software Developers in an Agile environment"
      ]
    },
    {
      type: "experience",
      company: "University of British Columbia",
      title: "Teaching Assistant",
      dateRange: "September 2021 - December 2022",
      location: "Vancouver, Canada",
      description: [
        "Coordinated weekly labs of 30 students through effective communication with professors and other TAs, receiving perfect evaluations from over 80% of students in categories such as preparedness and teaching ability",
        "Independently conducted weekly office hours to help students with introductory programming concepts using Racket"
      ]
    }
  ],
  projects: [
    {
      type: "project",
      title: "Are You Taking",
      tools: "TypeScript/JavaScript, Node/Express, PostgreSQL, Next, Heroku",
      dateRange: "July 2021/July 2022",
      ghLink: "https://github.com/bonvee-99/ayt",
      gifFile: "ayt-2",
      description: [
        "Collaborated to create a full stack web application that lets UBC students compare their course schedules",
        "Implemented Dynamic Routing on the Front-end with Next to allow for the creation and use of many shared calendars"
      ]
    },
    {
      type: "project",
      title: "Sports Macros",
      tools: "TypeScript, HTML/CSS, AWS",
      dateRange: "Oct 2021 - Present",
      ghLink: "https://github.com/bonvee-99/nhl-macros-web",
      gifFile: "sports-macros",
      webLink: "https://bonvee-nhl-macros.s3.us-west-1.amazonaws.com/macros/dist/index.html",
      description: [
        "Independently created a web application that automatically generates macros for media captioning and is used every Vancouver Canucks home game by professional NHL photographers"
      ]
    },
    {
      type: "project",
      title: "Same Here",
      tools: "JavaScript, Node/Express, PostgreSQL, React, Redux Toolkit, Heroku",
      dateRange: "Aug 2021 ‑ Dec 2021",
      ghLink: "https://github.com/bonvee-99/samehere2",
      imageFile: 'samehere-image',
      description: [
        "Independently developed a full stack web application to provide a specialized support platform for users with schizophrenia", 
        "Technical features include email verification, routing, authentication, and authorization with JWT tokens"
      ]
    },
    {
      type: "project",
      title: "UFC World",
      tools: "Java, Swing, JUnit",
      dateRange: "Jan 2021 - May 2021",
      ghLink: "https://github.com/bonvee-99/ufc-world",
      gifFile: "ufc-world",
      description: [
        "Independently designed a desktop application using Object-oriented design practices, Test-driven development, and local persistent storage with JSON"
      ]
    }
  ],
  skills: {
    Languages: [ "TypeScript", "Java", "Go", "Python", "C", "C++", "GraphQL", "SQL" ],
    "Front-end": ["Vue", "React", "Apollo Client", "HTML/CSS", "Vuetify", "Bootstrap", "Redux Toolkit"],
    "Back-end": ["Apollo Server", "Node/Express", "PostgreSQL", "MongoDB"],
    "Tools & Envs": ["Docker", "Kubernetes", "Linux", "Unity", "Git", "Nginx", "Jenkins", "Latex", "Neovim"],
    "Cloud Providers": ["GCP", "AWS", "Heroku"],
    "Testing": ["Mocha", "JUnit", "Jest", "LLDB", "Valgrind"]
  },
  education: [
    {
      type: "education",
      school: "University of British Columbia",
      degree: "Bachelor of Computer Science",
      dateRange: "Sept 2019 - 2025",
      location: "Vancouver, BC",
      faculty: "Science",
      cumGpa: "84%",
      awards: "Dean's Honour List (2019-2021)",
      courses: ["Intermediate Algorithm Design and Analysis", "Introduction to Computer Systems", "Basic Algorithms and Data Structures", "Software Construction", "Models of Computation", "Computations, Programs, and Programming"
      ]
    }
  ],
  extracurriculars: [ 
    "WKC Continous Sparring Kickboxing (2022)",
    "UBC Todd Ice Hockey League, Tier 1, Three Time Winners (Intramurals)",
    "Cuse Hacks (2022)",
    "Hack the 6ix, CockroachDB Sponser Prize (2021)"
  ]
}

export default resume
