const resume = {
  intro: [
    "I'm Ben Vinnick, a 4th-year Computer Science student at UBC based in Vancouver, BC. With hands-on experience as a Software Developer Intern at TAIT and a Teaching Assistant at the University of British Columbia, I’ve gained the skills to be an impactful contributor no matter the team I’m on.",
    "At TAIT, I worked on both frontend and backend systems, creating user-friendly dashboards, optimizing media storage, and enhancing asset management workflows. As a Teaching Assistant, I guided hundreds of students through foundational programming concepts, helping them build confidence in topics like recursion, graph traversal, and debugging.",
    "Currently completing my last semester of my Bachelor of Science in Computer Science, I’m working toward becoming a Software Architect, eager to design scalable systems and deliver meaningful, innovative solutions.",
  ],
  experience: [
    {
      type: "experience",
      company: "TAIT",
      title: "Software Developer Intern",
      dateRange: "May 2024 - August 2024",
      location: "Montreal, Canada (Remote)",
      description: [
        "Collaborated on Feltboard, a Digital CMS for the Experience Design industry used by Google",
        "Optimized storage efficiency by implementing shared media buckets, reducing redundant uploads by up to 5X",
        "Enhanced user workflow by creating a “save as” feature, allowing users to easily replicate and modify data structures",
        "Streamlined asset management by implementing media replacement, facilitating seamless updates without disrupting ongoing processes"
      ]
    },
    {
      type: "experience",
      company: "TAIT",
      title: "Software Developer Intern",
      dateRange: "July 2022 - August 2023",
      location: "Montreal, Canada (Remote)",
      description: [
        "Developed a frontend dashboard using Vue to allow users to monitor key metrics within their connected devices",
        "Facilitated dynamic schema relationships within the backend, empowering users to effortlessly create and manage intricate content structures by referencing one schema from another",
        "Implemented queries and mutations for the GraphQL API to support a new device enrollment system",
        "Designed a YAML parser to validate user input and provide guidance for precise data mapping",
        "Developed a validation tool with TypeScript to maintain backward compatibility of payloads sent to 3rd-party devices",
        "Implemented unit tests for GraphQL queries and mutations using Mocha, Chai, and Sinon",
        "Deployed an image resize proxy using Docker, Nginx, and GKE to reduce service strain and optimize page load times",
        "Developed payload analytics feature with GCP Cloud Functions and Pub/Sub to track payload latency across services",
        "Deployed analytics feature with Terraform and connected it to Datadog for streamlined monitoring and analysis"
      ]
    },
    {
      type: "experience",
      company: "University of British Columbia",
      title: "Teaching Assistant",
      dateRange: "September 2021 - December 2022",
      location: "Vancouver, Canada",
      description: [
        "Taught fundamental programming skills and concepts such as recursion, graph traversal, testing, and debugging",
        "Received a 100% favourable rating from > 70 students",
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
        "Utilized by professional NHL photographers during every Vancouver Canucks home game for the past 3 seasons"
      ]
    },
    {
      type: "project",
      title: "DLS",
      dateRange: "July 2023 - Present",
      ghLink: "https://github.com/bonvee-99/dls",
      description: [
        "Co-created a Rust CLI designed for secure secret sharing among developers over Websockets",
        "Implemented end-to-end encryption using RSA public/private key pairs to ensure the security of shared secrets",
        "Introduced the ability for users to join rooms through dynamically generated URLs"
      ]
    }
  ],
  skills: {
    Languages: ["Java", "TypeScript", "JavaScript", "Java", "Python", "Rust", "Bash", "SQL", "NoSQL", "GraphQL", "HTML", "CSS"],
    Frameworks: ["Node", "Vue", "React", "JUnit", "Mocha", "Chai"],
    Other: ["Git", "Docker", "Kubernetes", "GCP", "AWS", "Terraform", "Jenkins", "Datadog", "Jira"]
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
        "Intermediate Algorithm Design & Analysis",
        "Computer Hardware & Operating Systems",
        "Applied Machine Learning",
        "Relational Databases",
        "Computer Networking",
        "Parallel Computation",
        "Computer Security", 
        "Distributed Systems",
      ]
    }
  ],
  extracurriculars: [
    {
      title: "UBC Launch Pad",
      description: "Marketing Lead",
      dateRange: "Sept 2023 - April 2024"
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
      dateRange: "Sept 2019 - March 2020"
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
