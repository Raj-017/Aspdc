// ===================================================================
// Adani University - Central Data Store
// Theme Colors: Blue (#0B74B0), Purple (#75479C), Magenta/Pink (#BD3861)
// ===================================================================

const CollegeData = {
  info: {
    name: "Adani University",
    shortName: "AU",
    tagline: "Nation Building Through Education, Technology & Global Innovation",
    established: "2014",
    accreditation: "NAAC A+ Grade | UGC Recognized | AICTE Approved | NIRF Top Ranked",
    affiliation: "State Private University Established under Gujarat Private Universities Act",
    location: "Adani Shantigram, S.G. Highway, Ahmedabad - 382421, Gujarat, India",
    phone: "+91 79 2555 6000 / +91 79 2555 6001",
    email: "admissions@adaniuni.ac.in",
    videoTour: "https://assets.mixkit.co/videos/preview/mixkit-students-walking-in-a-university-campus-43384-large.mp4",
    stats: {
      students: "8,500+",
      faculty: "380+",
      facultyPhd: "86%",
      campusAcres: "600-Acre Integrated Shantigram Township",
      placementRate: "98.7%",
      highestPackage: "₹52.5 LPA",
      averagePackage: "₹11.8 LPA",
      recruiters: "240+",
      researchLabs: "38",
      patentsPublished: "160+"
    }
  },

  departments: [
    { id: "all", name: "All Departments" },
    { id: "cse", name: "Computer Science & Engineering (AI & ML)" },
    { id: "infra", name: "Civil & Infrastructure Engineering" },
    { id: "energy", name: "Energy Science & Renewable Systems" },
    { id: "ict", name: "Information & Communication Technology" },
    { id: "mgmt", name: "Faculty of Management Sciences" }
  ],

  // =================================================================
  // TOP RANKERS IN EACH TERM / SEMESTER
  // =================================================================
  topRankers: {
    terms: [
      { id: "term-1", name: "Term 1 (Semester I)" },
      { id: "term-2", name: "Term 2 (Semester II)" },
      { id: "term-3", name: "Term 3 (Semester III)" },
      { id: "term-4", name: "Term 4 (Semester IV)" },
      { id: "term-5", name: "Term 5 (Semester V)" },
      { id: "term-6", name: "Term 6 (Semester VI)" }
    ],
    rankers: [
      // Term 1 Rankers
      {
        id: "tr-101",
        termId: "term-1",
        rank: 1,
        medal: "gold",
        name: "Aarav Patel",
        rollNo: "AU25CSE014",
        department: "Computer Science & AI",
        cgpa: "9.94",
        credits: "22 / 22",
        award: "Chancellor's Gold Medal & 100% Academic Merit Scholarship",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
        quote: "Focused consistent problem solving and peer discussions in the Adani R&D lab helped me master the foundational credits."
      },
      {
        id: "tr-102",
        termId: "term-1",
        rank: 2,
        medal: "silver",
        name: "Meera Trivedi",
        rollNo: "AU25ICT029",
        department: "Information & Communication Tech",
        cgpa: "9.86",
        credits: "22 / 22",
        award: "Dean's List of Excellence & Academic Citation",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        quote: "The open mentorship by our professors made mastering engineering physics and data structures intuitive."
      },
      {
        id: "tr-103",
        termId: "term-1",
        rank: 3,
        medal: "bronze",
        name: "Rohan Deshmukh",
        rollNo: "AU25INF008",
        department: "Civil & Infrastructure Engg",
        cgpa: "9.80",
        credits: "22 / 22",
        award: "Departmental High Achiever Award",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        quote: "Hands-on survey projects in Shantigram gave me deep practical clarity on engineering mechanics."
      },

      // Term 2 Rankers
      {
        id: "tr-201",
        termId: "term-2",
        rank: 1,
        medal: "gold",
        name: "Ananya Iyer",
        rollNo: "AU24CSE042",
        department: "Computer Science & Engineering",
        cgpa: "9.96",
        credits: "24 / 24",
        award: "Chairman's Trophy for Academic Brilliance & Research Fellowship",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
        quote: "Building real-time algorithms alongside coursework made the semester thoroughly rewarding."
      },
      {
        id: "tr-202",
        termId: "term-2",
        rank: 2,
        medal: "silver",
        name: "Devendra Shah",
        rollNo: "AU24EN011",
        department: "Energy Science & Renewable Systems",
        cgpa: "9.89",
        credits: "24 / 24",
        award: "Dean's Merit Citation & Solar Lab Fellowship",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        quote: "Hands-on projects with Adani Solar micro-grids made green thermodynamics come alive."
      },
      {
        id: "tr-203",
        termId: "term-2",
        rank: 3,
        medal: "bronze",
        name: "Kavya Menon",
        rollNo: "AU24MBA019",
        department: "Faculty of Management Sciences",
        cgpa: "9.82",
        credits: "24 / 24",
        award: "Adani Business School Honors List",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        quote: "Deep financial modeling case studies in term 2 set the tone for strategic thinking."
      },

      // Term 3 Rankers
      {
        id: "tr-301",
        termId: "term-3",
        rank: 1,
        medal: "gold",
        name: "Siddharth Verma",
        rollNo: "AU23CSE005",
        department: "Computer Science (AI & ML)",
        cgpa: "9.98",
        credits: "25 / 25",
        award: "President's Medal for Flawless Academic Record",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
        quote: "Consistent coursework revision and participating in the Adani Hackathon pushed my limits."
      },
      {
        id: "tr-302",
        termId: "term-3",
        rank: 2,
        medal: "silver",
        name: "Pooja Kulkarni",
        rollNo: "AU23INF034",
        department: "Infrastructure Engineering",
        cgpa: "9.90",
        credits: "25 / 25",
        award: "Smart Cities Research Excellence Award",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
        quote: "Analyzing multi-modal transit systems in term 3 gave me practical mastery over structural theory."
      },
      {
        id: "tr-303",
        termId: "term-3",
        rank: 3,
        medal: "bronze",
        name: "Aditya Mehta",
        rollNo: "AU23ICT017",
        department: "Information & Communication Tech",
        cgpa: "9.84",
        credits: "25 / 25",
        award: "Dean's Honor Roll Citation",
        avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
        quote: "Collaborative group labs and mentor hours in IoT systems made all the difference."
      },

      // Term 4 Rankers
      {
        id: "tr-401",
        termId: "term-4",
        rank: 1,
        medal: "gold",
        name: "Ishita Singhania",
        rollNo: "AU22CSE031",
        department: "Computer Science & Engineering",
        cgpa: "9.95",
        credits: "24 / 24",
        award: "Academic Star Award & Global Internship Sponsor",
        avatar: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80",
        quote: "Adani University's focus on cloud architecture and distributed computing paved my way to top scores."
      },
      {
        id: "tr-402",
        termId: "term-4",
        rank: 2,
        medal: "silver",
        name: "Varun Jha",
        rollNo: "AU22EN004",
        department: "Energy Science & Smart Grids",
        cgpa: "9.88",
        credits: "24 / 24",
        award: "Green Hydrogen Research Fellowship",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
        quote: "Applying machine learning to renewable energy simulations elevated my understanding."
      },
      {
        id: "tr-403",
        termId: "term-4",
        rank: 3,
        medal: "bronze",
        name: "Sneha Nair",
        rollNo: "AU22MBA009",
        department: "Faculty of Management Sciences",
        cgpa: "9.81",
        credits: "24 / 24",
        award: "Dean's Business Excellence Citation",
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
        quote: "Real case studies in supply chain management and infrastructure finance created an inspiring learning curve."
      },

      // Term 5 Rankers
      {
        id: "tr-501",
        termId: "term-5",
        rank: 1,
        medal: "gold",
        name: "Karan Malhotra",
        rollNo: "AU21CSE002",
        department: "Computer Science (AI & ML)",
        cgpa: "9.97",
        credits: "26 / 26",
        award: "Dean of Engineering Gold Shield & Google Placement Pre-Offer",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
        quote: "Our deep-tech research publications directly counted toward our semester evaluations."
      },
      {
        id: "tr-502",
        termId: "term-5",
        rank: 2,
        medal: "silver",
        name: "Ritika Joshi",
        rollNo: "AU21INF019",
        department: "Infrastructure Engineering",
        cgpa: "9.91",
        credits: "26 / 26",
        award: "L&T Infrastructure Scholar Award",
        avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80",
        quote: "Working on metro rail simulation models in semester 5 solidified my design fundamentals."
      },
      {
        id: "tr-503",
        termId: "term-5",
        rank: 3,
        medal: "bronze",
        name: "Nikhil Chawla",
        rollNo: "AU21ICT022",
        department: "Information & Communication Tech",
        cgpa: "9.85",
        credits: "26 / 26",
        award: "IoT Patent Achievement Citation",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
        quote: "Consistent practical test execution gave me confidence across every subject exam."
      },

      // Term 6 Rankers
      {
        id: "tr-601",
        termId: "term-6",
        rank: 1,
        medal: "gold",
        name: "Tanvi Saxena",
        rollNo: "AU20CSE027",
        department: "Computer Science & Engineering",
        cgpa: "9.98",
        credits: "24 / 24",
        award: "Valedictorian Nominee & Microsoft SDE Fellowship",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
        quote: "Final year capstone research under Dr. Sen gave me a 10.0 SGPA in both advanced electives."
      },
      {
        id: "tr-602",
        termId: "term-6",
        rank: 2,
        medal: "silver",
        name: "Pranav Bhatt",
        rollNo: "AU20EN015",
        department: "Energy Science & Systems",
        cgpa: "9.90",
        credits: "24 / 24",
        award: "Adani Green Energy Innovation Award",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        quote: "Publishing two international papers while managing core credits helped me earn a spot in the Dean's list."
      },
      {
        id: "tr-603",
        termId: "term-6",
        rank: 3,
        medal: "bronze",
        name: "Deepali Rao",
        rollNo: "AU20INF003",
        department: "Infrastructure Engineering",
        cgpa: "9.86",
        credits: "24 / 24",
        award: "Adani Shantigram Urban Planning Scholar",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        quote: "Rigorous coursework coupled with live site visits made scoring consistently rewarding."
      }
    ]
  },

  // =================================================================
  // ADMISSION & INTAKE INFORMATION
  // =================================================================
  admissions: {
    academicYear: "2026 - 2027",
    applicationDeadline: "June 10, 2026",
    counselingDate: "June 25, 2026",
    classesCommence: "August 03, 2026",
    helpline: "+91 79 2555 6000",
    programs: [
      {
        id: "btech-cse-ai",
        level: "Undergraduate",
        degree: "B.Tech",
        specialization: "Computer Science & Engineering (AI & ML)",
        departmentId: "cse",
        duration: "4 Years (8 Terms)",
        totalIntake: 240,
        enrolledSeats: 210,
        tuitionFeePerYear: "₹2,10,000",
        eligibility: "10+2 with Physics, Mathematics & Chemistry with minimum 65% aggregate. Valid GUJCET / JEE Main rank.",
        intakeBreakdown: {
          meritQuota: 120,
          entranceExamQuota: 84,
          sportsNriQuota: 36
        },
        highlights: ["Adani AI High-Performance GPU Cluster", "Curriculum supported by NVIDIA & Google Cloud", "Average Package: ₹14.8 LPA"]
      },
      {
        id: "btech-infra",
        level: "Undergraduate",
        degree: "B.Tech",
        specialization: "Civil & Infrastructure Engineering",
        departmentId: "infra",
        duration: "4 Years (8 Terms)",
        totalIntake: 120,
        enrolledSeats: 94,
        tuitionFeePerYear: "₹1,75,000",
        eligibility: "10+2 with minimum 60% aggregate in PCM. Valid JEE Main / GUJCET score.",
        intakeBreakdown: {
          meritQuota: 60,
          entranceExamQuota: 45,
          sportsNriQuota: 15
        },
        highlights: ["Direct immersion in Adani Ports, Airports & High-Speed Rail Projects", "BIM 3D Modeling & Smart City Simulation Labs", "100% Core Industry Placements"]
      },
      {
        id: "btech-energy",
        level: "Undergraduate",
        degree: "B.Tech",
        specialization: "Energy Science & Renewable Systems",
        departmentId: "energy",
        duration: "4 Years (8 Terms)",
        totalIntake: 90,
        enrolledSeats: 72,
        tuitionFeePerYear: "₹1,85,000",
        eligibility: "10+2 with PCM minimum 60% from recognized state/central board.",
        intakeBreakdown: {
          meritQuota: 45,
          entranceExamQuota: 33,
          sportsNriQuota: 12
        },
        highlights: ["Green Hydrogen & Battery Energy Storage Labs", "Partnership with Adani Green Energy Khavda Mega Project", "Sponsored Research Internships"]
      },
      {
        id: "btech-ict",
        level: "Undergraduate",
        degree: "B.Tech",
        specialization: "Information & Communication Technology",
        departmentId: "ict",
        duration: "4 Years (8 Terms)",
        totalIntake: 180,
        enrolledSeats: 148,
        tuitionFeePerYear: "₹1,95,000",
        eligibility: "10+2 with 60% in PCM. Valid JEE Main / GUJCET rank.",
        intakeBreakdown: {
          meritQuota: 90,
          entranceExamQuota: 65,
          sportsNriQuota: 25
        },
        highlights: ["5G Wireless Testbed & Smart Sensor Networks", "Cyber Defense & Cloud Automation Labs", "Highest package ₹52.5 LPA"]
      },
      {
        id: "mtech-cse",
        level: "Postgraduate",
        degree: "M.Tech",
        specialization: "Artificial Intelligence & Distributed Data Systems",
        departmentId: "cse",
        duration: "2 Years (4 Terms)",
        totalIntake: 45,
        enrolledSeats: 38,
        tuitionFeePerYear: "₹1,50,000",
        eligibility: "B.E. / B.Tech in CSE / IT / ECE with minimum 60%. Valid GATE score holders receive monthly stipend of ₹12,400.",
        intakeBreakdown: {
          meritQuota: 25,
          entranceExamQuota: 15,
          sportsNriQuota: 5
        },
        highlights: ["Fully funded Ph.D track progression", "Industry thesis with Adani AI Labs & Tech Titans"]
      },
      {
        id: "mba-infra",
        level: "Postgraduate",
        degree: "MBA",
        specialization: "Infrastructure Management & Business Analytics",
        departmentId: "mgmt",
        duration: "2 Years (4 Terms)",
        totalIntake: 120,
        enrolledSeats: 112,
        tuitionFeePerYear: "₹2,40,000",
        eligibility: "Recognized Bachelor's Degree with minimum 50% marks. CAT / XAT / CMAT / MAT / GMAT scores accepted.",
        intakeBreakdown: {
          meritQuota: 60,
          entranceExamQuota: 45,
          sportsNriQuota: 15
        },
        highlights: ["India's premier MBA specialized in Infrastructure & Logistics", "Executive guest lectures from Fortune 500 leadership", "Highest CTC: ₹26.5 LPA"]
      }
    ]
  },

  // =================================================================
  // FACULTIES DIRECTORY
  // =================================================================
  faculties: [
    {
      id: "fac-1",
      name: "Dr. Arvind S. Raman",
      designation: "Dean of Technology & Professor",
      departmentId: "cse",
      departmentName: "Computer Science & Engineering (AI & ML)",
      qualification: "Ph.D. in Computer Science (IISc Bangalore), M.Tech (IIT Madras)",
      experience: "24 Years",
      specialization: "Distributed Systems, Autonomous AI & Cloud Security",
      email: "a.raman@adaniuni.ac.in",
      publications: 48,
      patents: 6,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      bio: "Dr. Raman spearheads Adani University's Center of Excellence in Intelligent Systems and has supervised 14 Ph.D. dissertations.",
      courses: ["High-Performance Computing", "Distributed Cloud Architecture", "Advanced OS Internals"]
    },
    {
      id: "fac-2",
      name: "Dr. Priyamvada Sen",
      designation: "Head of AI Department & Research Chair",
      departmentId: "cse",
      departmentName: "Computer Science & Engineering (AI & ML)",
      qualification: "Ph.D. in Deep Learning (Stanford Post-Doc, IIT Bombay)",
      experience: "18 Years",
      specialization: "Multimodal AI, Computer Vision, Generative Models",
      email: "p.sen@adaniuni.ac.in",
      publications: 62,
      patents: 9,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      bio: "Principal Investigator for the Adani GPU Supercomputing Grid, National Science Academy Fellow, and mentor for 8 international AI hackathon winning teams.",
      courses: ["Deep Learning & Neural Networks", "Computer Vision Systems", "Generative AI Foundations"]
    },
    {
      id: "fac-3",
      name: "Prof. Rajeshwar Kulkarni",
      designation: "Dean of Infrastructure Engineering",
      departmentId: "infra",
      departmentName: "Civil & Infrastructure Engineering",
      qualification: "Ph.D. in Mega-Infrastructure Systems (Purdue University), B.Tech (IIT Roorkee)",
      experience: "22 Years",
      specialization: "Smart Port Engineering, High-Speed Transit, BIM Geotechnics",
      email: "r.kulkarni@adaniuni.ac.in",
      publications: 42,
      patents: 11,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      bio: "Consultant for international port corridor development and recipient of the National Infrastructure Educator Award.",
      courses: ["Port & Harbor Engineering", "High-Speed Rail Geotechnics", "BIM Infrastructure Design"]
    },
    {
      id: "fac-4",
      name: "Dr. Shalini Deshmukh",
      designation: "Director, Center for Green Energy & Sustainability",
      departmentId: "energy",
      departmentName: "Energy Science & Renewable Systems",
      qualification: "Ph.D. in Renewable Energy & Electrochemistry (Cambridge University)",
      experience: "16 Years",
      specialization: "Green Hydrogen Fuel Cells, Grid-Scale Energy Storage",
      email: "s.deshmukh@adaniuni.ac.in",
      publications: 44,
      patents: 7,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      bio: "Leads joint research between Adani Green Energy and international renewable consortiums with over ₹8.5 Crores in research grants.",
      courses: ["Hydrogen Energy Technologies", "Smart Grid Dynamics", "Electrochemical Energy Storage"]
    },
    {
      id: "fac-5",
      name: "Prof. Kenneth Douglas",
      designation: "Dean, Faculty of Management Sciences",
      departmentId: "mgmt",
      departmentName: "Faculty of Management Sciences",
      qualification: "Ph.D. (Wharton Business School), MBA (IIM Ahmedabad)",
      experience: "26 Years",
      specialization: "Infrastructure Project Financing, Supply Chain Logistics",
      email: "k.douglas@adaniuni.ac.in",
      publications: 35,
      patents: 2,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      bio: "Former strategic advisor to World Bank infrastructure funds and author of leading cases in infrastructure monetization.",
      courses: ["Project Finance & Public-Private Partnerships", "Global Supply Chain Logistics", "Strategic Management"]
    },
    {
      id: "fac-6",
      name: "Dr. Ananya Mukherjee",
      designation: "Associate Professor, ICT",
      departmentId: "ict",
      departmentName: "Information & Communication Technology",
      qualification: "Ph.D. in Cyber-Physical Systems (Carnegie Mellon)",
      experience: "11 Years",
      specialization: "5G/6G Networks, Edge Computing & IoT Security",
      email: "a.mukherjee@adaniuni.ac.in",
      publications: 29,
      patents: 4,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      bio: "Specializes in secure telemetry for mission-critical infrastructure like power grids and air traffic controls.",
      courses: ["5G Wireless Architectures", "IoT Security & Edge Networks", "Cyber Resilience"]
    }
  ],

  // =================================================================
  // CAMPUS INSIGHTS & INFRASTRUCTURE
  // =================================================================
  campusInsights: [
    {
      id: "library",
      category: "academic",
      title: "Adani Knowledge Center & Central Digital Library",
      badge: "5-Floor Ultra-Modern Hub",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
      description: "Equipped with over 280,000 physical volumes, 40,000+ IEEE/ScienceDirect e-journals, Bloomberg financial terminals, and 24/7 collaborative pods.",
      keySpecs: [
        "1,000+ Ergonomic study suites with gigabit Wi-Fi",
        "RFID automated self-checkout and book drop kiosks",
        "12 Bloomberg Financial & Commodity Market terminals",
        "Acoustic group discussion pods & VR innovation room"
      ],
      timings: "Open 24/7 during Exam Months, 07:00 AM - 11:30 PM Regular Days",
      location: "Academic Quad, Shantigram Boulevard"
    },
    {
      id: "ai-supercomputing",
      category: "academic",
      title: "Adani AI & High-Performance Supercomputing Grid",
      badge: "1.5 PFLOPS Compute Power",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      description: "Houses NVIDIA A100 GPU clusters and petabyte storage grids enabling large language model fine-tuning, drone telemetry, and real-time smart city analysis.",
      keySpecs: [
        "NVIDIA DGX GPU Supercomputer for deep learning",
        "Cleanroom ISO-6 prototyping facility",
        "Real-time Smart City telemetry visualization wall",
        "Drone prototyping wind tunnel and avionics testing bench"
      ],
      timings: "08:00 AM - 10:00 PM (24/7 for Approved Capstone Teams)",
      location: "Technology Tower, Level 2"
    },
    {
      id: "hostels",
      category: "residential",
      title: "Shantigram Eco-Residences & Dining Commons",
      badge: "Air-Conditioned Suites",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      description: "Scenic residential blocks set amid lush green landscapes of Shantigram. High-speed fiber internet, multi-cuisine dining commons, biometric access, and laundromats.",
      keySpecs: [
        "3,500+ Resident capacity across twin and single AC rooms",
        "100% Solar-powered water heating and eco-waste recycling",
        "Multi-cuisine pure vegetarian & global culinary dining counters",
        "24/7 Security surveillance with electronic access card gates"
      ],
      timings: "24/7 Student Concierge & Health Desk",
      location: "Shantigram Township Green Sector"
    },
    {
      id: "auditorium",
      category: "cultural",
      title: "Gautam Adani Convention Center & Amphitheater",
      badge: "2,200 Capacity Mega Hall",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      description: "State-of-the-art auditorium featuring motorized acoustic panels, 4K digital cinema laser projection, and multi-channel spatial sound for international symposia.",
      keySpecs: [
        "2,200 Tiered motorized executive seating",
        "Simultaneous interpretation booths for international delegates",
        "Adjacent 500-guest VIP networking banqueting lounge",
        "Connected outdoor Greco-Roman amphitheater for cultural fests"
      ],
      timings: "Event-based access",
      location: "Central Campus Plaza"
    },
    {
      id: "incubator",
      category: "innovation",
      title: "Adani Innovation Hub & Venture Studio",
      badge: "₹20 Cr Seed Fund Pool",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      description: "Incubating disruptive student ideas in Cleantech, Agri-tech, Logistics, and Artificial Intelligence with direct venture capital syndicates and IP patent backing.",
      keySpecs: [
        "Over 40 student-led startups funded and incubated",
        "Direct mentorship from senior Adani Group executives",
        "Free legal and patent filing facilitation office",
        "Co-working lounges with 3D printers and laser cutters"
      ],
      timings: "24/7 Access for Incubated Founders",
      location: "Venture Pavilion, 3rd Floor"
    }
  ],

  // =================================================================
  // SPORTS FACILITY & ATHLETICS
  // =================================================================
  sports: {
    overview: "Adani University boasts world-class sporting facilities nestled within the sprawling Shantigram estate. Our arenas inspire physical fitness, competitive teamwork, and athletic excellence.",
    director: "Col. (Retd.) Sanjeev Shekhawat, Olympian & Sports Director",
    timings: "05:30 AM - 09:30 AM & 04:30 PM - 09:30 PM Daily",
    achievements: [
      "All-India Inter-University Football Champions (Western Zone 2025)",
      "National Collegiate Cricket League Runners-Up",
      "State Table Tennis & Badminton Gold Medals",
      "Annual National Sports Carnival 'Adani Spardha' with 3,000+ athletes"
    ],
    facilities: [
      {
        id: "cricket-ground",
        name: "Shantigram International Cricket Arena & Nets",
        type: "Outdoor",
        specs: "BCCI standard natural turf match pitches, lush 75-meter boundary, 2,500-seat spectator pavilion, and 6 practice net bays with automated bowling machines.",
        image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
        activities: ["T20 Inter-University Cups", "Weekend League", "Automated Batting Sessions"],
        equipmentAvailable: "Electronic bowling machines, safety gear, match balls"
      },
      {
        id: "football-turf",
        name: "FIFA-Standard Floodlit Football Turf",
        type: "Outdoor",
        specs: "105m x 68m all-weather synthetic turf equipped with stadium-grade high-mast LED lighting and digital scoreboard.",
        image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
        activities: ["Intramural Soccer", "Inter-Collegiate Tournament", "Rugby & Athletics"],
        equipmentAvailable: "Training cones, agility ladders, match balls, keeper kits"
      },
      {
        id: "olympic-pool",
        name: "Olympic-Length 50m Aquatics Complex",
        type: "Aquatics",
        specs: "10-lane temperature-controlled 50m competition pool with modern ozone purification, 5m diving tower, and certified FINA lifeguards.",
        image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=800&q=80",
        activities: ["Competitive Swimming", "Water Polo", "Beginner Training"],
        equipmentAvailable: "Kickboards, pull buoys, swim fins, timing sensors"
      },
      {
        id: "badminton-complex",
        name: "Indoor Wooden Badminton & Squash Courts",
        type: "Indoor",
        specs: "4 BWF-certified wooden synthetic sprung courts, 2 glass-backed squash courts, climate-controlled arena with viewing gallery.",
        image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
        activities: ["Singles & Doubles Badminton", "Squash Ladder Matches"],
        equipmentAvailable: "Yonex racquets, feather & nylon shuttlecocks, court stringer"
      },
      {
        id: "gym-fitness",
        name: "Adani High-Performance Fitness & Wellness Center",
        type: "Fitness",
        specs: "8,500 sq.ft state-of-the-art strength and cardio center outfitted with Technogym biomechanical equipment, CrossFit rigs, and certified physical trainers.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        activities: ["Strength Training", "Functional CrossFit", "Yoga & Mindfulness"],
        equipmentAvailable: "Olympic barbells, bumper plates, cardio rowers, dumbbells"
      },
      {
        id: "court-games",
        name: "Decoturf Tennis & FIBA Basketball Complex",
        type: "Outdoor Multi-Court",
        specs: "3 Cushioned acrylic basketball courts with spring-loaded hoops, alongside 2 professional Decoturf tennis courts under night floodlights.",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
        activities: ["3-on-3 Streetball", "Tennis Tournaments", "Night League Matches"],
        equipmentAvailable: "Wilson basketballs, tennis balls, ball machines"
      }
    ]
  },

  // =================================================================
  // PLACEMENTS & CAREER HUB
  // =================================================================
  placements: {
    highestPackage: "₹52.50 LPA",
    averagePackage: "₹11.80 LPA",
    medianPackage: "₹10.20 LPA",
    totalOffers: "1,280+",
    placementPercentage: "98.7%",
    topRecruiters: [
      { name: "Google", role: "Software Engineer (Cloud)", package: "₹48.0 LPA" },
      { name: "Microsoft", role: "AI & Distributed Systems", package: "₹52.5 LPA" },
      { name: "Adani Enterprises", role: "Management Trainee & Tech Lead", package: "₹24.0 LPA" },
      { name: "Amazon", role: "SDE-1 & Logistics Systems", package: "₹44.0 LPA" },
      { name: "Larsen & Toubro", role: "Senior Infrastructure Engineer", package: "₹16.5 LPA" },
      { name: "NVIDIA", role: "AI Hardware & Deep Learning", package: "₹42.0 LPA" },
      { name: "Deloitte", role: "Technology & Risk Consultant", package: "₹15.8 LPA" },
      { name: "Goldman Sachs", role: "Quantitative Financial Analyst", package: "₹34.0 LPA" }
    ]
  },

  // =================================================================
  // NOTICES & CIRCULARS
  // =================================================================
  notices: [
    {
      id: "n-1",
      title: "Adani University Admissions 2026-27 Announced for B.Tech & MBA",
      date: "May 15, 2026",
      category: "Admissions",
      important: true,
      description: "Applications are invited for Computer Science (AI & ML), Infrastructure Engineering, Energy Systems, and MBA. Merit scholarships up to 100% tuition waiver available."
    },
    {
      id: "n-2",
      title: "Dean's Honor Roll & Top Rankers Award Ceremony for Term 4 & 5",
      date: "May 10, 2026",
      category: "Academics",
      important: true,
      description: "Chancellor Gold Medals and Dean's citations will be presented to the term top rankers at the Gautam Adani Convention Center next Friday."
    },
    {
      id: "n-3",
      title: "National Inter-Collegiate Sports Fest 'Adani Spardha 2026' Schedule",
      date: "May 06, 2026",
      category: "Sports",
      important: false,
      description: "Cricket, football, badminton, and swimming fixtures released. Registration open for all university departments."
    },
    {
      id: "n-4",
      title: "Seed Research Grant Allocations for Sustainable Infrastructure",
      date: "April 29, 2026",
      category: "Research",
      important: false,
      description: "Adani Innovation Studio awards ₹3.2 Crores in seed grants to 12 student-faculty research teams."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.CollegeData = CollegeData;
}
