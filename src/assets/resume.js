const resume = {
  intro: [
    "My name is Ben Vinnick and I am a 3rd year Computer Science student at the University of British Columbia. I am on the lookout for a summer 2024 internship, prioritizing mentorship, community, and the chance to contribute to a genuinely impactful product that makes a positive difference in people's lives.",
    "I have 14 months of experience working as a Software Developer for Thinkwell Studio Montreal where I took on diverse responsibilities, performing tasks in backend, frontend, and devops domains. I have also worked as a Computer Science teaching assistant at UBC for 3 semesters where I taught introductory CS concepts with Racket.",
  ],
  experience: [
    {
      type: "experience",
      company: "Thinkwell Studio Montreal",
      title: "Software Developer (Co-op)",
      dateRange: "July 2022 - August 2023",
      location: "Montreal, Canada (Remote)",
      description: [
        "Collaborated on Feltboard, a Digital CMS for the Experience Design industry, utilizing Node.js and Vue.js",
        "Facilitated dynamic schema relationships within the CMS, empowering clients to effortlessly create and manage intricate data structures by linking one schema to another",
        "Implemented Node.js GraphQL queries and mutations to support a new enrollment system with IoT Core",
        "Designed a YAML parser to validate user input and provide guidance for precise data mapping",
        "Implemented real-time monitoring for a client service, displaying crucial metrics such as payload reception, errors, uptime, and system performance indicators",
        "Developed a TypeScript validation tool to maintain backward compatibility of payloads used by third-party applications",
        "Wrote tests with > 90% coverage for multiple backend features using Mocha and Chai",
        "Developed a payload analytics feature with GCP Cloud Functions and Pub/Sub to track payload latency across services",
        "Deployed analytics feature with Terraform and connected it to Datadog for streamlined monitoring and analysis",
        "Orchestrated Datadog monitoring and alerting in GKE clusters, enhancing system visibility and system reliability",
        "Deployed an image resize proxy using Docker, Nginx, and GKE to reduce service strain and optimize page load times",
      ]
    },
    {
      type: "experience",
      company: "University of British Columbia",
      title: "Teaching Assistant",
      dateRange: "September 2021 - December 2022",
      location: "Vancouver, Canada",
      description: [
        "Taught fundamental programming skills with Racket, receiving a 100% favourable rating from > 70 students",
        "Led weekly labs and office hours for over 1200 students over three academic semesters"
      ]
    }
  ],
  projects: [
    {
      type: "project",
      title: "Sports Macros",
      dateRange: "Oct 2021 - Present",
      ghLink: "https://github.com/bonvee-99/nhl-macros-web",
      gifFile: "sports-macros",
      webLink: "https://bonvee-nhl-macros.s3.us-west-1.amazonaws.com/dist/index.html",
      description: [
        "Independently created a web application with TypeScript, tailored for media professionals",
        "Facilitates effortless generation of macros, optimizing the media captioning workflow within Photo Mechanic",
        "Utilized by professional NHL photographers during every Vancouver Canucks home game, streamlining the captioning process with personalized macros"
      ]
    },
    {
      type: "project",
      title: "DLS",
      dateRange: "July 2023 - Present",
      ghLink: "https://github.com/bonvee-99/dls",
      description: [
        "Co-created a Rust Command-Line Interface designed for secure secret sharing among developers over websockets",
        "Implemented end-to-end encryption using RSA public/private key pairs to ensure the confidentiality and security of shared secrets",
        "Introduced the ability for users to join rooms through dynamically generated URLs"
      ]
    }
  ],
  skills: {
    Languages: [ "JavaScript/TypeScript", "Python", "Rust", "Java", "C", "Bash", "SQL", "NoSQL", "GraphQL", "HTML", "CSS"],
    Tools: [ "Node", "Docker", "Kubernetes", "Terraform", "GCP", "AWS", "MongoDB", "PostgreSQL", "Vue", "React", "Linux", "Git", "Datadog", "MS Office" ]
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
        "Algorithm Design & Analysis", 
        "Computer Hardware & Operating Systems (C)",
        "Relational Databases (SQL)",
        "Computer Networking (C)"
      ]
    }
  ],
  extracurriculars: [
    {
      title: "UBC Launch Pad",
      description: "Marketing Lead",
      dateRange: "Sept 2023 - Present"
    },
    {
      title: "UBC Launch Pad",
      description: "Backend Developer",
      dateRange: "Jan 2023 - May 2023"
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
