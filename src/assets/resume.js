const resume = {
  experience: [
    {
      type: "experience",
      company: "Thinkwell Studio Montreal",
      title: "Software Developer (Co-op)",
      dateRange: "July 2022 - Present",
      location: "Vancouver / Montreal, Canada (Hybrid)",
      description: [
        "Documented Datadog Agent installation for production deployment to GKE",
        "Configured Datadog integrations, SLOs, RUM, synthetic tests, and monitors",
        "Developed code utilizing GCP Cloud Functions, IoT Core, MQTT bridge, and Pub/Sub to track payload deliverability and latency across multiple services, and connected the system to Datadog for streamlined monitoring",
        "Leveraged Telegraf and InfluxDB to establish an internal monitoring system and orchestrated its deployment through a GKE cluster using Terraform and Helm",
        "Researched and implemented an image resize proxy using Docker and Nginx and configured it for deployment with GKE",
        "Implemented a YAML validation feature and created unit tests with 100% coverage",
        "Refactored Node and GraphQL code to support a new enrollment system",
        "Collaborated with UI/UX designers when adding features to a Vue web app",
        "Presented features to the team as well as outside stakeholders at Google"
      ]
    },
    {
      type: "experience",
      company: "University of British Columbia",
      title: "Teaching Assistant",
      dateRange: "September 2021 - December 2022",
      location: "Vancouver, Canada",
      description: [
        "Coordinated weekly labs of 30 students through effective communication with professors and other TAs",
        "Received perfect evaluations from over 80% of students in categories such as communication, preparedness, and teaching ability",
        "Independently conducted weekly office hours to help students with introductory programming concepts using Racket"
      ]
    }
  ],
  projects: [
    {
      type: "project",
      title: "Essentially",
      dateRange: "Jan 2023 - Present",
      ghLink: "https://github.com/ubclaunchpad/Essentially",
      gifFile: "essentially",
      description: [
        "Collaborated on a Chrome extension that provides web page summaries",
        "Deployed via AWS CDK, Lambda, and API Gateway and performed Node code refactoring during the process"
      ]
    },
    {
      type: "project",
      title: "Are You Taking",
      dateRange: "July 2022",
      ghLink: "https://github.com/bonvee-99/ayt",
      gifFile: "ayt-2",
      description: [
        "Co-created a webapp with Next and Node to allow UBC students to compare their course schedules",
        "Deployed via Heroku"
      ]
    },
    {
      type: "project",
      title: "Sports Macros",
      dateRange: "Oct 2021 - Present",
      ghLink: "https://github.com/bonvee-99/nhl-macros-web",
      gifFile: "sports-macros",
      webLink: "https://bonvee-nhl-macros.s3.us-west-1.amazonaws.com/macros/dist/index.html",
      description: [
        "Independently created a web app using HTML/CSS that automatically generates macros for media captioning",
        "Used every Vancouver Canucks home game by professional NHL photographers",
        "Deployed via Amazon S3"
      ]
    },
    {
      type: "project",
      title: "Same Here",
      dateRange: "Aug 2021 ‑ Dec 2021",
      ghLink: "https://github.com/bonvee-99/samehere2",
      imageFile: 'samehere-image',
      description: [
        "Independently developed a full stack web application to provide a support platform for users with schizophrenia", 
        "Technical features include email verification, routing, authentication, and authorization with JWT tokens"
      ]
    },
    {
      type: "project",
      title: "UFC World (Course Project)",
      dateRange: "Jan 2021 - May 2021",
      ghLink: "https://github.com/bonvee-99/ufc-world",
      gifFile: "ufc-world",
      description: [
        "Independently designed a desktop UFC game with Java Swing",
        "Incorporated Object-oriented design practices, Test-driven development, and local persistent storage with JSON"
      ]
    }
  ],
  skills: {
    Languages: [ "TypeScript", "Go", "Java", "C", "Bash"],
    "Frontend": ["Vue", "React", "Vuetify", "Bootstrap", "Redux Toolkit"],
    "Backend": ["Apollo GraphQL", "Node/Express", "PostgreSQL", "MongoDB"],
    "Tools & Envs": ["Docker", "Kubernetes", "Terraform", "Unity", "Git", "Nginx", "Jenkins" ],
    "Cloud Providers": ["GCP", "AWS", "Heroku"],
    "Testing": ["Mocha", "JUnit", "Jest", "LLDB", "Valgrind"]
  },
  education: [
    {
      type: "education",
      school: "University of British Columbia",
      degree: "Bachelor of Computer Science",
      dateRange: "Sept 2019 - 2024",
      location: "Vancouver, BC",
      faculty: "Science",
      cumGpa: "84%",
      awards: "Dean's Honour List (2019-2021)",
      courses: ["Intermediate Algorithm Design and Analysis", "Introduction to Computer Systems", "Basic Algorithms and Data Structures", "Software Construction", "Models of Computation", "Computations, Programs, and Programming"
      ]
    }
  ],
  extracurriculars: [
    {
      title: "UBC Launch Pad",
      description: "Student-run software club that collaborates on application",
      dateRange: "Jan 2023 - Present"
    },
    {
      title: "WKC",
      description: "Continous Sparring Kickboxing Competitor",
      dateRange: "May 2022"
    },
    {
      title: "UBC Todd Ice Hockey League",
      description: "Three Time Winners, Tier 1",
      dateRange: "2019-2022"
    },
    {
      title: "UBC Technical Career Fair",
      description: "Support Team",
      dateRange: "Jan 2021"
    },
    {
      title: "Hack the 6ix",
      description: "CockroachDB Sponser Prize",
      dateRange: "Aug 2021"
    },
    {
      title: "Phi Gamma Delta",
      description: "Freshman Philanthropy Chairman",
      dateRange: "Sept 2019 - March 2022"
    },
    {
      title: "Canuck Place Children's Hospice",
      description: "Peer Volunteer",
      dateRange: "Jan 2018 - May 2019"
    },
    {
      title: "Bumpin Bakery",
      description: "Led youth team to help the less fortunate",
      dateRange: "Jan 2016 - 2019"
    }
  ]
}

export default resume
