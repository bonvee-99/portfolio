const resume = {
  intro: [
    "My name is Ben Vinnick and I am a 3rd year Computer Science student at the University of British Columbia. I am currently on Co-op working as a Software Developer. I have also worked as a CS teaching assistant at UBC for over a year.",
    "I am mainly interested in backend development and software architecture. I also like Muay Thai, bass, hockey, plants, and video games."
  ],
  experience: [
    {
      type: "experience",
      company: "Thinkwell Studio Montreal",
      title: "Software Developer (Co-op)",
      dateRange: "July 2022 - August 2023",
      location: "Montreal, Canada (Remote)",
      description: [
        "Collaborated on Feltboard content management app for experience design industry with Node and Vue",
        "Setup Datadog monitoring and alerting in GKE clusters, configuring integrations, synthetic tests, and monitors",
        "Developed payload analytics feature with GCP Cloud Functions, IoT Core, and Pub/Sub to track payload deliverability and latency across multiple services",
        "Deployed analytics feature with Terraform and connected it to Datadog",
        "Created TypeScript validation tool to maintain backward compatibility of payloads",
        "Set up and deployed image resize proxy using Docker, Nginx, and GKE",
        "Implemented a YAML parser to validate user input in new mapping feature",
        "Wrote tests with 100% coverage for multiple backend features using Mocha and Chai",
        "Refactored Node GraphQL backend to support new enrollment system"
      ]
    },
    {
      type: "experience",
      company: "University of British Columbia",
      title: "Teaching Assistant",
      dateRange: "September 2021 - December 2022",
      location: "Vancouver, Canada",
      description: [
        "Taught fundamental programming skills and structures with Racket",
        "Led weekly labs and office hours for over 1200 students over three academic semesters",
        "Received 100% favourable rating from over 70 students"
      ]
    }
  ],
  projects: [
    {
      type: "project",
      title: "DLS",
      dateRange: "July 2023 - Present",
      ghLink: "https://github.com/bonvee-99/dls",
      description: [
        "Co-created Rust CLI to share secrets with other developers over websockets",
        "Secured messaging with TLS and end-to-end encryption"
      ]
    },
    {
      type: "project",
      title: "Essentially",
      dateRange: "Jan 2023 - Present",
      ghLink: "https://github.com/ubclaunchpad/Essentially",
      gifFile: "essentially",
      description: [
        "Collaborated on Chrome extension that provides web page summaries",
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
        "Co-created web app with Next and Node to allow UBC students to compare their course schedules side by side",
        "Users can seamlessly share their weekly schedules through iCal file uploads and dynamic calendar links"
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
        "Independently created web app that automatically generates macros for media captioning",
        "Used every Vancouver Canucks home game by professional NHL photographers"
      ]
    },
    {
      type: "project",
      title: "Same Here",
      dateRange: "Aug 2021 ‑ Dec 2021",
      ghLink: "https://github.com/bonvee-99/samehere2",
      imageFile: 'samehere-image',
      description: [
        "Independently developed full stack web application to provide support platform for users with schizophrenia", 
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
        "Independently designed desktop UFC game with Java Swing",
        "Incorporated Object-oriented design practices, Test-driven development, and local persistent storage with JSON"
      ]
    }
  ],
  skills: {
    Languages: [ "TypeScript", "Python", "Rust", "Java", "C", "Bash"],
    Tools: [ "Docker", "Kubernetes", "Terraform", "GCP", "AWS", "Node", "Vue", "React", "MongoDB", "PostgreSQl", "Apollo GraphQL" ]
  },
  education: [
    {
      type: "education",
      school: "University of British Columbia",
      degree: "Bachelor of Computer Science",
      dateRange: "September 2019 - April 2025",
      location: "Vancouver, BC",
      faculty: "Science",
      cumGpa: "3.9",
      awards: "Dean's Honour List (2019-2021)",
      courses: [
        "Software Construction (Java)", 
        "Software Engineering (TypeScript)",
        "Algorithms & Data Structures (C++)",
        "Computer Hardware and Operating Systems (C)",
        "Computer Networking (C)",
        "Relational Databases"
      ]
    }
  ],
  extracurriculars: [
    {
      title: "UBC Launch Pad",
      description: "Backend developer",
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
