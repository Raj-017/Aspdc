// College Data Store for Apex Institute of Science & Technology (AIST)

const CollegeData = {
  info: {
    name: "Apex Institute of Science & Technology",
    shortName: "AIST",
    tagline: "Empowering Minds, Engineering Tomorrow",
    established: "1988",
    accreditation: "NAAC A++ Grade (CGPA 3.84) | NBA Accredited | NIRF Top 20",
    affiliation: "Autonomous Institution affiliated with State Technical University",
    location: "Knowledge City, Tech Valley Campus, Bangalore - 560100",
    phone: "+91 (080) 4123-8900 / +91 (080) 4123-8901",
    email: "admissions@apex-institute.edu.in",
    stats: {
      students: "9,800+",
      faculty: "430+",
      facultyPhd: "88%",
      campusAcres: "85 Acres",
      placementRate: "98.4%",
      highestPackage: "₹54.2 LPA",
      averagePackage: "₹12.6 LPA",
      recruiters: "220+",
      researchLabs: "42",
      patentsPublished: "185+"
    }
  },

  departments: [
    { id: "all", name: "All Departments" },
    { id: "cse", name: "Computer Science & Engineering" },
    { id: "ai_ds", name: "Artificial Intelligence & Data Science" },
    { id: "ece", name: "Electronics & Communication" },
    { id: "mech", name: "Mechanical & Mechatronics" },
    { id: "biotech", name: "Biotechnology & Bioinformatics" },
    { id: "mgmt", name: "School of Management & Business" }
  ],

  admissions: {
    academicYear: "2026 - 2027",
    applicationDeadline: "May 30, 2026",
    counselingDate: "June 15, 2026",
    classesCommence: "August 01, 2026",
    helpline: "+91 98860 12345",
    programs: [
      {
        id: "btech-cse",
        level: "Undergraduate",
        degree: "B.Tech",
        specialization: "Computer Science & Engineering",
        departmentId: "cse",
        duration: "4 Years (8 Semesters)",
        totalIntake: 240,
        enrolledSeats: 198,
        tuitionFeePerYear: "₹1,95,000",
        eligibility: "10+2 with Physics, Mathematics & Chemistry with minimum 65% marks. Valid JEE Main or State CET rank.",
        intakeBreakdown: {
          meritQuota: 120,
          entranceExamQuota: 84,
          sportsNriQuota: 36
        },
        highlights: ["Specializations in Cloud & Cyber Security", "Industry capstone with Microsoft & AWS", "Average Package: ₹14.5 LPA"]
      },
      {
        id: "btech-ai-ds",
        level: "Undergraduate",
        degree: "B.Tech",
        specialization: "Artificial Intelligence & Data Science",
        departmentId: "ai_ds",
        duration: "4 Years (8 Semesters)",
        totalIntake: 180,
        enrolledSeats: 152,
        tuitionFeePerYear: "₹1,95,000",
        eligibility: "10+2 with 65% aggregate in PCM. Valid JEE Main / CET score required.",
        intakeBreakdown: {
          meritQuota: 90,
          entranceExamQuota: 65,
          sportsNriQuota: 25
        },
        highlights: ["Dedicated High-Performance GPU Supercluster", "Curriculum partnered with NVIDIA Deep Learning Institute", "Highest package ₹54.2 LPA"]
      },
      {
        id: "btech-ece",
        level: "Undergraduate",
        degree: "B.Tech",
        specialization: "Electronics & Communication Engineering",
        departmentId: "ece",
        duration: "4 Years (8 Semesters)",
        totalIntake: 180,
        enrolledSeats: 130,
        tuitionFeePerYear: "₹1,75,000",
        eligibility: "10+2 with 60% aggregate in PCM. Valid CET / JEE score.",
        intakeBreakdown: {
          meritQuota: 90,
          entranceExamQuota: 65,
          sportsNriQuota: 25
        },
        highlights: ["VLSI Design Center & Embedded IoT Lab (Qualcomm supported)", "Robotics & Drone prototyping track", "High core industry placement rate"]
      },
      {
        id: "btech-mech",
        level: "Undergraduate",
        degree: "B.Tech",
        specialization: "Mechanical & Mechatronics Engineering",
        departmentId: "mech",
        duration: "4 Years (8 Semesters)",
        totalIntake: 120,
        enrolledSeats: 82,
        tuitionFeePerYear: "₹1,50,000",
        eligibility: "10+2 with minimum 60% in Physics, Chemistry, and Mathematics.",
        intakeBreakdown: {
          meritQuota: 60,
          entranceExamQuota: 45,
          sportsNriQuota: 15
        },
        highlights: ["Formula Student Racing & Baja SAE workspace", "Industrial 3D Printing & CNC Automation Hub", "Industry partners: Bosch, Siemens, L&T"]
      },
      {
        id: "btech-biotech",
        level: "Undergraduate",
        degree: "B.Tech",
        specialization: "Biotechnology & Bioinformatics",
        departmentId: "biotech",
        duration: "4 Years (8 Semesters)",
        totalIntake: 60,
        enrolledSeats: 48,
        tuitionFeePerYear: "₹1,60,000",
        eligibility: "10+2 with PCB/PCM minimum 60% marks from a recognized board.",
        intakeBreakdown: {
          meritQuota: 30,
          entranceExamQuota: 22,
          sportsNriQuota: 8
        },
        highlights: ["Bio-spectroscopy & Genetic Engineering Cleanrooms", "Tie-ups with Biocon & Serum Institute for internships", "Computational Drug Discovery track"]
      },
      {
        id: "mtech-cse",
        level: "Postgraduate",
        degree: "M.Tech",
        specialization: "Computer Science (Machine Intelligence)",
        departmentId: "cse",
        duration: "2 Years (4 Semesters)",
        totalIntake: 60,
        enrolledSeats: 45,
        tuitionFeePerYear: "₹1,40,000",
        eligibility: "B.E. / B.Tech in CSE/IT/ECE with 60% marks and valid GATE score.",
        intakeBreakdown: {
          meritQuota: 36,
          entranceExamQuota: 18,
          sportsNriQuota: 6
        },
        highlights: ["Monthly stipend of ₹12,400 for GATE qualified scholars", "Direct entry into sponsored Ph.D fellowship programs"]
      },
      {
        id: "mtech-vlsi",
        level: "Postgraduate",
        degree: "M.Tech",
        specialization: "VLSI Design & Embedded Systems",
        departmentId: "ece",
        duration: "2 Years (4 Semesters)",
        totalIntake: 30,
        enrolledSeats: 26,
        tuitionFeePerYear: "₹1,40,000",
        eligibility: "B.E. / B.Tech in ECE/EEE/Instrumentation with minimum 60% aggregate.",
        intakeBreakdown: {
          meritQuota: 18,
          entranceExamQuota: 9,
          sportsNriQuota: 3
        },
        highlights: ["Cadence, Synopsys & Mentor Graphics EDA Suites", "100% internship-to-placement conversion in semiconductor MNCs"]
      },
      {
        id: "mba-tech",
        level: "Postgraduate",
        degree: "MBA",
        specialization: "Technology Management & Business Analytics",
        departmentId: "mgmt",
        duration: "2 Years (4 Semesters)",
        totalIntake: 120,
        enrolledSeats: 110,
        tuitionFeePerYear: "₹2,20,000",
        eligibility: "Recognized Bachelor's degree (any discipline) with min 50%. CAT / XAT / CMAT / MAT qualified.",
        intakeBreakdown: {
          meritQuota: 60,
          entranceExamQuota: 45,
          sportsNriQuota: 15
        },
        highlights: ["Dual-specialization in Fintech, Product Management, or Analytics", "International immersion exchange option in Germany & Singapore"]
      }
    ]
  },

  faculties: [
    {
      id: "fac-1",
      name: "Dr. Arvind S. Raman",
      designation: "Dean of Academic Affairs & Professor",
      departmentId: "cse",
      departmentName: "Computer Science & Engineering",
      qualification: "Ph.D. in Computer Science (IISc Bangalore), M.Tech (IIT Madras)",
      experience: "24 Years",
      specialization: "Distributed Systems, Autonomous Computing & Cloud Security",
      email: "a.raman@apex-institute.edu.in",
      publications: 48,
      patents: 6,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      bio: "Dr. Raman has published widely in IEEE and ACM transactions, has supervised 14 Ph.D. dissertations, and leads the Indo-German Cyber Defense initiative.",
      courses: ["Advanced Distributed Computing", "Cloud Infrastructure Architecture", "Operating Systems Internals"]
    },
    {
      id: "fac-2",
      name: "Dr. Priyamvada Sen",
      designation: "Head of Department & Professor",
      departmentId: "ai_ds",
      departmentName: "Artificial Intelligence & Data Science",
      qualification: "Ph.D. in Deep Learning (Stanford University Post-doc, IIT Bombay)",
      experience: "18 Years",
      specialization: "Multimodal AI, Computer Vision, Generative Models",
      email: "p.sen@apex-institute.edu.in",
      publications: 62,
      patents: 9,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      bio: "Principal Investigator for the Center of Excellence in Machine Intelligence, recipient of the National Young Scientist Award and recipient of NVIDIA AI Research Grant.",
      courses: ["Deep Learning & Neural Networks", "Advanced Computer Vision", "Ethics in Generative AI"]
    },
    {
      id: "fac-3",
      name: "Prof. Rajeshwar Kulkarni",
      designation: "Professor & Director of Innovation Center",
      departmentId: "ece",
      departmentName: "Electronics & Communication",
      qualification: "Ph.D. in Microelectronics (Purdue University), B.Tech (IIT Roorkee)",
      experience: "21 Years",
      specialization: "VLSI Design, Low Power SoC Architecture, Quantum Devices",
      email: "r.kulkarni@apex-institute.edu.in",
      publications: 39,
      patents: 12,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      bio: "Former Principal Architect at Texas Instruments, now heading the Semiconductor Incubation Lab that has helped incubate 7 deep-tech hardware startups.",
      courses: ["VLSI System Design", "RF Circuit Design", "Semiconductor Device Physics"]
    },
    {
      id: "fac-4",
      name: "Dr. Meenakshi Sundaram",
      designation: "Associate Professor & Dean of Student Welfare",
      departmentId: "mech",
      departmentName: "Mechanical & Mechatronics",
      qualification: "Ph.D. in Robotics (Tokyo Institute of Technology, Japan)",
      experience: "15 Years",
      specialization: "Bipedal Robotics, Autonomous Mobile Vehicles, Kinematics",
      email: "m.sundaram@apex-institute.edu.in",
      publications: 31,
      patents: 4,
      avatar: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80",
      bio: "Leads the University RoboSub and Formula Student teams. Faculty mentor for the winning team at the International Autonomous Robotics Challenge 2025.",
      courses: ["Robotics Kinematics & Dynamics", "Mechatronics System Design", "Industrial Automation"]
    },
    {
      id: "fac-5",
      name: "Dr. Shalini Deshmukh",
      designation: "Professor & Lead Biotech Researcher",
      departmentId: "biotech",
      departmentName: "Biotechnology & Bioinformatics",
      qualification: "Ph.D. in Molecular Biology (Cambridge University, UK)",
      experience: "16 Years",
      specialization: "CRISPR Gene Editing, Bio-computational Modeling, Vaccine Design",
      email: "s.deshmukh@apex-institute.edu.in",
      publications: 44,
      patents: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      bio: "Chief consultant for leading bio-pharmaceutical research clusters, holding international grants from Welcome Trust and ICMR.",
      courses: ["Molecular Genetic Engineering", "Bioinformatics Algorithms", "Immunotechnology"]
    },
    {
      id: "fac-6",
      name: "Prof. Kenneth Douglas",
      designation: "Dean, School of Management",
      departmentId: "mgmt",
      departmentName: "School of Management & Business",
      qualification: "Ph.D. (Wharton Business School), MBA (IIM Ahmedabad)",
      experience: "26 Years",
      specialization: "Corporate Strategy, Venture Capital, Fintech Ecosystems",
      email: "k.douglas@apex-institute.edu.in",
      publications: 35,
      patents: 1,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      bio: "Advisory board member for leading global venture capital firms, published author in Harvard Business Review and Sloan Management Review.",
      courses: ["Strategic Technology Management", "Fintech Innovations", "Entrepreneurial Venture Scaling"]
    },
    {
      id: "fac-7",
      name: "Dr. Ananya Mukherjee",
      designation: "Assistant Professor",
      departmentId: "cse",
      departmentName: "Computer Science & Engineering",
      qualification: "Ph.D. in Cyber Security & Cryptography (Carnegie Mellon)",
      experience: "9 Years",
      specialization: "Zero-Knowledge Proofs, Post-Quantum Cryptography",
      email: "a.mukherjee@apex-institute.edu.in",
      publications: 22,
      patents: 3,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      bio: "Specialist in next-generation cryptographic primitives, coach for the University's Collegiate Cyber Defense competition team.",
      courses: ["Cryptography & Network Security", "Blockchain Architectures", "Secure Coding Practices"]
    },
    {
      id: "fac-8",
      name: "Prof. Vikramaditya Rathore",
      designation: "Associate Professor & Research Chair",
      departmentId: "ai_ds",
      departmentName: "Artificial Intelligence & Data Science",
      qualification: "Ph.D. (IIT Delhi), MS (Technical University of Munich)",
      experience: "12 Years",
      specialization: "Natural Language Processing, Large Language Model Optimization",
      email: "v.rathore@apex-institute.edu.in",
      publications: 37,
      patents: 2,
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
      bio: "Leads open-source initiatives in regional language tokenization and lightweight edge AI reasoning models.",
      courses: ["Natural Language Processing", "Information Retrieval", "Machine Learning Systems"]
    }
  ],

  campusInsights: [
    {
      id: "library",
      category: "academic",
      title: "Rabindranath Tagore Central Digital Library",
      badge: "6-Floor Mega Complex",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
      description: "A state-of-the-art intellectual sanctuary stocking over 350,000 physical volumes, 50,000+ e-journals, dedicated thesis archives, and 24/7 silent study cubicles.",
      keySpecs: [
        "1,200 Seating Capacity with ergonomic workstations",
        "Full digital access to IEEE Xplore, ScienceDirect, ACM, Springer",
        "RFID Automated Book Return and Borrowing Kiosks",
        "Multimedia Studio & Audio-Visual Recording Pods",
        "Dedicated quiet study zones & group collaboration rooms"
      ],
      timings: "Open 24/7 during Exam Months, 07:00 AM - 11:30 PM Regular Days",
      location: "Academic Quad, Block B"
    },
    {
      id: "rd-labs",
      category: "academic",
      title: "Advanced Research Labs & Maker Spaces",
      badge: "42 Specialized Labs",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      description: "Cutting-edge testing facilities and prototyping workshops housing multi-axis CNC machines, 3D laser scanners, clean rooms, and an NVIDIA A100 GPU compute grid.",
      keySpecs: [
        "NVIDIA DGX Supercomputing Cluster with 1.2 PFLOPS throughput",
        "Cleanroom ISO Class 6 for Microfabrication & Nanotech",
        "Wind Tunnel & Aerodynamics Testing Facility",
        "IoT & Industrial Embedded Prototyping Benches",
        "Automotive dyno and battery testing cells"
      ],
      timings: "08:00 AM - 10:00 PM (24-Hour Access for Approved Projects)",
      location: "Science & Innovation Tower, Level -1 & 3"
    },
    {
      id: "hostels",
      category: "residential",
      title: "Smart Residential Hostels & Dining Commons",
      badge: "Separate Boys & Girls Halls",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      description: "Safe, scenic, fully-furnished on-campus housing with single, twin, and triple air-conditioned suites. High-speed Wi-Fi, biometric access, and multi-cuisine hygienic dining.",
      keySpecs: [
        "Accommodation capacity for 4,200 residential students",
        "Centralized solar water heating & 100% green power backup",
        "4 Multi-cuisine Dining Halls (North, South, Continental, Healthy Diet)",
        "In-house laundromats, 24/7 security with CCTV surveillance",
        "Recreation lounges with pool tables, TV pods & cafeteria"
      ],
      timings: "24/7 Security & Warden Desk | Gate Curfew: 10:30 PM",
      location: "East Campus Green Park"
    },
    {
      id: "auditorium",
      category: "cultural",
      title: "Dr. APJ Abdul Kalam Grand Auditorium",
      badge: "2,500 Capacity Arena",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      description: "Acoustically engineered world-class convention center hosting international symposiums, annual cultural extravaganzas, hackathons, and corporate leadership talks.",
      keySpecs: [
        "Meyer Sound spatial audio and motorized stage lighting grid",
        "Dual 4K Laser Projection video walls for keynote streaming",
        "Simultaneous interpretation booths for multilingual conferences",
        "Green rooms and backstage rehearsal suites",
        "Connected 600-person banquet and exhibition gallery"
      ],
      timings: "Event Specific Bookings",
      location: "Central Administration Square"
    },
    {
      id: "incubator",
      category: "innovation",
      title: "Apex Horizon Startup Incubation Center",
      badge: "Supported by Startup India & DST",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      description: "Catalyst for campus entrepreneurs providing seed grants up to ₹25 Lakhs, legal IP advisory, mentorship from unicorn founders, and co-working desks.",
      keySpecs: [
        "Over 45 startups incubated with total valuation over ₹180 Crores",
        "Patent filing facilitation cell with 100% university grant subsidy",
        "Angel investor demo days every semester",
        "Hardware prototyping lab and software testbeds"
      ],
      timings: "24/7 Open for Incubated Teams",
      location: "Venture Pavilion, 4th Floor"
    },
    {
      id: "health",
      category: "wellness",
      title: "Apollo-Partnered Campus Health & Wellness Hospital",
      badge: "24/7 Medical Care",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      description: "Full-service on-campus healthcare facility staffed with full-time medical doctors, qualified nurses, basic emergency trauma care, and mental wellness counseling.",
      keySpecs: [
        "15 Inpatient observation beds and dedicated isolation units",
        "Two fully equipped 24/7 ACLS Emergency Ambulances",
        "Daily visiting specialists (Dentist, Ophthalmologist, Psychiatrist)",
        "Discounted pharmacy and blood testing diagnostic unit",
        "Free confidential student counseling and stress-relief guidance"
      ],
      timings: "24 Hours / 7 Days Emergency Services",
      location: "West Gate Medical Enclave"
    }
  ],

  sports: {
    overview: "At Apex Institute, sports and athletics are vital to student life and holistic wellness. Our 18-acre sports arena caters to national athletes and recreational enthusiasts alike.",
    director: "Col. (Retd.) Sanjeev Shekhawat, Olympian & Chief Director of Athletics",
    timings: "05:30 AM - 09:30 AM & 04:30 PM - 09:30 PM Daily",
    achievements: [
      "Inter-University State Championship Gold in Football (2024, 2025)",
      "National Collegiate Basketball Runners-Up (South Zone)",
      "3 Students represented India in World University Games (Badminton & Archery)",
      "Annual Inter-College Sports Fest 'Olympus' attracts 3,500+ participants"
    ],
    facilities: [
      {
        id: "football-turf",
        name: "FIFA-Standard Floodlit Football Stadium",
        type: "Outdoor",
        specs: "105m x 68m all-weather FIFA Pro artificial turf with 3,000 spectator gallery, digital scoreboard, and LED match floodlights.",
        image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
        activities: ["Football Leagues", "Inter-Department Cup", "Intramural Training", "Rugby Sevens"],
        equipmentAvailable: "Match balls, training cones, agility ladders, goalie training kits"
      },
      {
        id: "olympic-pool",
        name: "Olympic-Sized 50m Swimming Complex",
        type: "Aquatics",
        specs: "10-lane temperature-regulated 50m x 25m swimming pool, 5m diving platform, computerized ozone filtration system, and certified lifeguards on duty.",
        image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=800&q=80",
        activities: ["Freestyle, Butterfly, Breaststroke Training", "Water Polo", "Swimming Competitions", "Beginner Coaching"],
        equipmentAvailable: "Kickboards, pull buoys, swim fins, timing sensors, rescue tubes"
      },
      {
        id: "cricket-ground",
        name: "Sir Vivian Richards Cricket Arena & Nets",
        type: "Outdoor",
        specs: "BCCI-regulation natural grass outfield, 3 natural turf match pitches, and 6 practice net lanes equipped with automated bowling machines.",
        image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
        activities: ["T20 Tournaments", "Inter-Collegiate Red & White Ball matches", "Net practice"],
        equipmentAvailable: "Automated bowling machines, sight screens, safety helmets, protective padding"
      },
      {
        id: "badminton-complex",
        name: "Indoor Wooden Badminton & Squash Courts",
        type: "Indoor",
        specs: "4 BWF-standard Yonex synthetic rubberised wooden courts, 2 international glass-back squash courts, air-conditioned stadium with spectator viewing balcony.",
        image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
        activities: ["Singles & Doubles Badminton", "Squash Ladder", "Weekend Tournaments"],
        equipmentAvailable: "Rackets, nylon & feather shuttlecocks, squash balls, stringing service"
      },
      {
        id: "gym-fitness",
        name: "High-Performance Gymnasium & Strength Lab",
        type: "Indoor Fitness",
        specs: "8,000 sq.ft modern fitness center equipped with Technogym and Hammer Strength equipment, powerlifting platforms, cardio theater, and certified personal trainers.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        activities: ["Strength & Conditioning", "Crossfit", "HIIT Training", "Body Composition Analysis"],
        equipmentAvailable: "Olympic barbells, bumper plates, cable machines, rowing ergometers, treadmills"
      },
      {
        id: "court-games",
        name: "FIBA Basketball & Tennis Courts",
        type: "Outdoor Multi-Court",
        specs: "3 Synthetic acrylic cushioned basketball courts with spring-loaded backboards, plus 2 synthetic Decoturf tennis courts under high-mast LED lights.",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
        activities: ["3x3 Streetball", "Inter-Collegiate Tennis", "Basketball League", "Night Tournaments"],
        equipmentAvailable: "Basketballs, tennis balls, ball hopper, court squeegees"
      }
    ]
  },

  placements: {
    highestPackage: "₹54.20 LPA",
    averagePackage: "₹12.60 LPA",
    medianPackage: "₹10.50 LPA",
    totalOffers: "1,420+",
    placementPercentage: "98.4%",
    topRecruiters: [
      { name: "Google", role: "Software Engineer", package: "₹48.0 LPA" },
      { name: "Microsoft", role: "Cloud Solution Architect", package: "₹54.2 LPA" },
      { name: "Amazon", role: "SDE-1 & ML Engineer", package: "₹45.0 LPA" },
      { name: "NVIDIA", role: "AI & System Architect", package: "₹42.5 LPA" },
      { name: "Qualcomm", role: "Hardware VLSI Engineer", package: "₹36.0 LPA" },
      { name: "Bosch", role: "Automotive Embedded Systems", package: "₹18.0 LPA" },
      { name: "Deloitte", role: "Technology Consultant", package: "₹16.5 LPA" },
      { name: "Goldman Sachs", role: "Quantitative Analyst", package: "₹34.0 LPA" }
    ]
  },

  notices: [
    {
      id: "n-1",
      title: "Undergraduate & Postgraduate Admission Notification 2026-27",
      date: "May 12, 2026",
      category: "Admissions",
      important: true,
      description: "Applications are invited for B.Tech, M.Tech, and MBA programs for the academic session 2026-27. Last date for submission of online application is May 30, 2026."
    },
    {
      id: "n-2",
      title: "Annual Sports Olympiad 'Olympus 2026' Schedule Announced",
      date: "May 10, 2026",
      category: "Sports",
      important: false,
      description: "Inter-department matches begin from next Monday. All department captains must submit team rosters to the Sports Directorate by Friday."
    },
    {
      id: "n-3",
      title: "Faculty Research Seed Grant Sanctioned (Round II)",
      date: "May 05, 2026",
      category: "Research",
      important: true,
      description: "14 research proposals in the domains of Edge Computing, Green Hydrogen, and Precision Medicine have been approved with total funding of ₹1.8 Crores."
    },
    {
      id: "n-4",
      title: "Semester End Examination Timetable Released for Even Semesters",
      date: "April 28, 2026",
      category: "Academics",
      important: false,
      description: "Students can download the detailed schedule from their Student Portal or the Exam Cell notice board."
    }
  ]
};

// Export for window access in browser
if (typeof window !== 'undefined') {
  window.CollegeData = CollegeData;
}
