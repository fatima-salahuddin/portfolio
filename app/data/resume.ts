export const resumeData = {
    profile: {
        name: "Fatima Salahuddin",
        role: "Computer Science Undergraduate",
        email: "fatimasalahuddinmirza@gmail.com",
        phone: "+92 3146682902",
        location: "Karachi, Pakistan",
        linkedin: "https://www.linkedin.com/in/fatima-salahuddin-/",
        github: "", // To be filled if available or inferred from projects
        summary: "Computer Science undergraduate passionate about practical problem-solving, with growing experience in software development, systems programming, and cross-functional collaboration. Rector’s List, Gold Medalist, and 100% merit scholarship holder at FAST NUCES.",
        avatar: "/avatar-placeholder.png", // We will need a placeholder image
    },
    education: [
        {
            institution: "National University of Computer and Emerging Sciences (NUCES, FAST)",
            degree: "Bachelor of Science in Computer Science",
            location: "Karachi, Pakistan",
            year: "2024 - 2027",
            gpa: "", // Not specified
            honors: ["Rector’s List", "Gold Medalist", "100% merit scholarship"],
        },
        {
            institution: "BAMM PECHS Govt. College",
            degree: "High School in Pre-Engineering",
            location: "Karachi, Pakistan",
            year: "2021 – 2023",
            grade: "3rd position BIEK Intermediate Board",
        },
    ],
    experience: [
        {
            company: "Digital Literacy Instructor (Consultant)",
            role: "Tabuk, Saudi Arabia (Remote)",
            year: "Jan 2024 – Oct 2025",
            description: "Delivered a comprehensive ICT and digital literacy curriculum for students aged 8–17, training over 30 students in computer fundamentals, internet safety, digital communication, and design tools. Created 10+ interactive lesson plans and project-based modules.",
        },
        {
            company: "Private Tutor",
            role: "CS, Python & Math Tutor",
            year: "Jun 2023 – Present",
            description: "Tutored over 50 students in programming logic, ICT, and mathematics. Employed personalized strategies to enhance academic performance and maintained regular communication with parents.",
        },
    ],
    projects: [
        {
            title: "E-Commerce Website Database System",
            slug: "ecommerce-website-database-system",
            tech: ["React", "Node.js", "Flask", "Oracle DB"],
            description: "Developed a full-stack e-commerce platform with authentication, product management, and CRUD operations. Integrated React frontend with Node.js & Flask backend and Oracle Database.",
            details: {
                problem: "Existing e-commerce templates lacked the specific database rigor required for high-volume transaction management and complex inventory schemas.",
                solution: "Built a custom full-stack solution integrating a robust Oracle Database backend with a modern React frontend. This allowed for precise control over transaction integrity and scalable product management.",
                features: [
                    "User Authentication & Role Management (Admin/Customer)",
                    "Dynamic Product Inventory with CRUD capabilities",
                    "Secure Shopping Cart & Checkout Flow",
                    "Complex SQL Queries for Sales Reporting",
                    "Responsive React UI with Tailwind CSS"
                ]
            },
            category: "Full Stack",
            link: "#", // To be updated
            repo: "#",
            image: "/ecommerce.png",
        },
        {
            title: "FairGAN Model (AI Project)",
            slug: "fairgan-model",
            tech: ["TensorFlow", "Streamlit", "Python"],
            description: "Developed a Generative Adversarial Network (GAN) with a double-headed discriminator to improve output evaluation. Built a Streamlit dashboard for interactive visualization and optimized the training loop for synthetic data generation.",
            details: {
                problem: "Standard recommendation systems often propagate historical biases, leading to unfair suggestions for underrepresented groups.",
                solution: "Implemented FairGAN, a fairness-aware Generative Adversarial Network. The model uses a Generator to create user profiles and a double-headed Discriminator to simultaneously critique realism and fairness.",
                features: [
                    "Double-Headed Discriminator Architecture",
                    "Fairness-aware User Representation Learning",
                    "Interactive Streamlit Dashboard for Fairness Visualization",
                    "Optimized Training Loop with custom Loss Functions",
                    "Synthetic Data Generation for Privacy Preservation"
                ]
            },
            category: "AI/ML",
            link: "#",
            repo: "#",
            image: "/gan.png",
        },
        {
            title: "Network Load Balancer",
            slug: "network-load-balancer",
            tech: ["Python", "Networking", "Algorithms"],
            description: "Designed a network load balancer for efficient traffic distribution. Implemented optimized algorithms with performance analysis to manage network traffic effectively.",
            details: {
                problem: "Single-server architectures cannot handle high traffic surges, leading to downtime and latency.",
                solution: "Developed a custom Load Balancer in Python that distributes incoming traffic across a cluster of servers using configurable algorithms (Round Robin, Least Connections).",
                features: [
                    "Round Robin & Weighted Round Robin Algorithms",
                    "Real-time Health Checking of Backend Servers",
                    "Traffic Visualization Dashboard with Live Graphs",
                    "Comprehensive Logging & Performance metrics",
                    "Socket Programming for maximizing throughput"
                ]
            },
            category: "Systems",
            link: "#",
            repo: "#",
            image: "/cn_project.jpeg",
        },
        {
            title: "Matrix Calculator",
            slug: "matrix-calculator",
            tech: ["x86 Assembly", "Irvine32"],
            description: "Developed a matrix calculator in x86 Assembly Language using Irvine32. Implemented menu-driven operations like addition, multiplication, and determinant calculation.",
            details: {
                problem: "Performing matrix operations at the hardware level is complex but necessary for understanding low-level optimization.",
                solution: "Wrote a highly optimized x86 Assembly program using the Irvine32 library to perform complex matrix math directly on the CPU registers.",
                features: [
                    "Matrix Addition, Subtraction, and Multiplication",
                    "Determinant Calculation for N x N matrices",
                    "Menu-Driven CLI Interface",
                    "Optimized Register Usage for Speed",
                    "Error Handling for Invalid Dimensions"
                ]
            },
            category: "Systems",
            link: "#",
            repo: "#",
            image: "/matrix calculator.png",
        },
        {
            title: "Advanced Producer-Consumer Kernel Module",
            slug: "kernel-module",
            tech: ["C", "Linux Kernel", "Semaphores"],
            description: "Developed a Linux kernel module implementing a priority-based producer-consumer system using kernel threads, semaphores, and spinlocks. Simulated interrupt handling and enabled real-time configuration via sysfs and debugfs.",
            details: {
                problem: "Understanding process synchronization and race conditions requires direct kernel-level manipulation.",
                solution: "Implemented a loadable Linux Kernel Module (LKM) that manages producer-consumer threads with strict synchronization primitives to prevent deadlocks and race conditions.",
                features: [
                    "Kernel Thread Management (kthread)",
                    "Synchronization via Semaphores & Spinlocks",
                    "Priority-based Task Scheduling",
                    "Sysfs Interface for Runtime Configuration",
                    "Debugfs Integration for State Monitoring"
                ]
            },
            category: "Operating Systems",
            link: "#",
            repo: "#",
            image: "/os_kernel_module.png",
        },
    ],
    skills: {
        languages: ["C/C++", "Python", "SQL", "JavaScript", "Assembly (x86)", "Bash"],
        frontend: ["React", "HTML", "CSS", "Tailwind CSS"],
        backend: ["Node.js", "Flask", "REST APIs", "MongoDB", "Oracle DB"],
        tools: ["Git", "Linux", "Photoshop", "Illustrator", "Canva"],
        concepts: ["DSA", "OOP", "Systems Programming", "AI & ML"],
    },
    certifications: [
        "Google AI Essentials",
        "AI Seekho (Google Cloud – AI & ML Training)",
        "C Programming Fundamentals (UC Santa Cruz)",
        "Python for Beginners",
    ],
    interests: ["Graphic Design", "Content Writing", "Community Outreach", "F1", "AI", "Exploring New Ideas"],
};
