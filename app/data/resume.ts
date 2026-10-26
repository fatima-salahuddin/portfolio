// Single source of content for the whole site. Edit here; pages read from it.

export type Figure = { value: string; label: string };

export type Project = {
    slug: string;
    title: string;
    kind: "production" | "project";
    context: string; // who it was for, or which course
    role: string;
    period: string;
    status?: string;
    summary: string;
    problem: string;
    decisions: { title: string; body: string }[];
    figures?: Figure[];
    stack: string[];
    image?: { src: string; alt: string; caption: string };
    links: { label: string; href: string }[];
    note?: string;
};

export const resumeData = {
    profile: {
        name: "Fatima Salahuddin",
        role: "Full-stack developer",
        headline: "I build the software that small companies run on.",
        intro:
            "Payroll, invoicing, attendance, accounting and point-of-sale systems, designed with the people who use them and in daily use in Kuwait and Iraq. Final-year Computer Science at FAST-NUCES Karachi.",
        email: "fatimasalahuddinmirza@gmail.com",
        location: "Karachi, Pakistan",
        availability: "Open to remote roles",
        linkedin: "https://www.linkedin.com/in/fatima-salahuddin-/",
        github: "https://github.com/fatima-salahuddin",
        resume: "/Fatima_Salahuddin_Resume.pdf",
    },

    about: [
        "Most of what I build sits where software meets a real operation: an accountant's spreadsheet, a fingerprint reader on a camp wall, a waiter's tablet on bad Wi-Fi. I sit with the people who do the work, learn the rules they actually follow, and turn them into systems they trust with their money.",
        "I work mostly in Laravel and React, and reach for Node, Python and Electron when the problem needs them. I care about the unglamorous parts: data migrated without losing a row, money stored without rounding errors, and a system that still works when the internet does not.",
        "Before and alongside development I have taught ICT and Python to 30+ students and tutored 50+ more, and I lead design for several student societies at FAST.",
    ],

    education: {
        degree: "BS Computer Science",
        institution: "National University of Computer and Emerging Sciences (FAST-NUCES), Karachi",
        period: "Graduating 2027",
        notes: ["CGPA 3.8 / 4.0", "Rector's List", "Gold Medalist", "100% merit scholarship"],
    },

    work: [
        {
            slug: "facility-platform",
            title: "Facility Management Platform",
            kind: "production",
            context: "Planet Care, camp and catering operations in Kuwait",
            role: "Sole developer",
            period: "2026 to now",
            status: "In daily use",
            summary:
                "The operations and finance system for a camp and catering company: card-reader attendance, payroll, client invoicing, payables, double-entry accounting, kitchen costing, a grocery point of sale and automated reports.",
            problem:
                "The company ran on dozens of Excel workbooks and a fingerprint reader nobody could export from. Payroll, invoices and kitchen costs were rebuilt by hand every month, and numbers disagreed between files.",
            decisions: [
                {
                    title: "An offline-first POS that cannot lose a sale",
                    body: "The shop's internet drops, so the Electron POS writes every sale to local SQLite first and syncs sales and stock with the API every 5 minutes. When several tills produced phantom stock, I traced it to the sync path and moved stock rules server-side so no client can apply them twice.",
                },
                {
                    title: "Attendance straight from the hardware",
                    body: "ZKTeco readers push punches to the API over their ADMS protocol, and small Python agents pull from devices that cannot push. Both feed one ingestion service that de-duplicates punches, so payroll reads from one clean source.",
                },
                {
                    title: "Spreadsheets in, spreadsheets out",
                    body: "I wrote parsers for the company's real workbooks to migrate history in, and Excel exports back out, so accountants keep the formats they trust while the system holds the truth.",
                },
                {
                    title: "Reports that arrive by themselves",
                    body: "A Node service on Railway logs in to WhatsApp, fetches the daily sales PDF from the API on a schedule and sends it to the owners' group.",
                },
            ],
            figures: [
                { value: "~21", label: "modules" },
                { value: "~480", label: "API routes" },
                { value: "103", label: "data models" },
                { value: "1", label: "developer" },
            ],
            stack: ["Laravel 12", "React", "MySQL", "Electron", "SQLite", "Capacitor", "Node", "Python", "Railway"],
            links: [{ label: "Case study on GitHub", href: "https://github.com/fatima-salahuddin/facility-platform-showcase" }],
            note: "Source code belongs to the client. I can walk through it on a call.",
        },
        {
            slug: "hr-operations-platform",
            title: "HR and Operations Platform",
            kind: "production",
            context: "Planet Care, manpower for oilfield-services clients in Iraq",
            role: "Sole developer",
            period: "2026 to now",
            status: "In daily use",
            summary:
                "Employees, attendance, payroll with PDF salary slips, client invoicing, expenses, air and service tickets, documents and monthly profit and loss, replacing three years of Excel master files.",
            problem:
                "Salary sheets, invoices and P&L lived in different workbooks going back to 2023. Rates changed mid-year, salaries were sometimes held and released later, and nobody could say with confidence what a given month had really cost.",
            decisions: [
                {
                    title: "Three years of history, reconciled",
                    body: "I imported the real workbooks into PostgreSQL, then produced month-by-month comparison sheets (system against original) for payslips, gross salary and profit until every difference was explained or fixed.",
                },
                {
                    title: "Rates that change over time",
                    body: "Rates and departments are stored as dated history, and payroll reads the rate that applied in that month, so a payslip from 2024 still reproduces exactly.",
                },
                {
                    title: "Edge cases as data, not hacks",
                    body: "Advances, held salaries and arrears are their own records linked to the slips they affect, so a salary released three months later shows correctly on both slips and in the P&L.",
                },
                {
                    title: "One source for pay and billing",
                    body: "The same attendance record drives what the employee is paid and what the client is invoiced, and every change is written to an audit log.",
                },
            ],
            figures: [
                { value: "14", label: "modules" },
                { value: "~140", label: "API routes" },
                { value: "3 yrs", label: "of history migrated" },
                { value: "1", label: "developer" },
            ],
            stack: ["Laravel 11", "PostgreSQL", "React", "JWT", "Docker", "Cloudinary", "Railway"],
            links: [{ label: "Case study on GitHub", href: "https://github.com/fatima-salahuddin/hr-operations-platform-showcase" }],
            note: "Source code belongs to the client. I can walk through it on a call.",
        },
        {
            slug: "restaurant-pos",
            title: "Restaurant POS and Kitchen Display",
            kind: "production",
            context: "Eastern Palace, a Chinese hotpot restaurant in Kuwait",
            role: "Sole developer",
            period: "2026",
            summary:
                "A real-time point of sale for the restaurant floor: waiters order from any tablet, tickets appear on station screens in the kitchen, and one billing terminal settles bills and runs the cash drawer.",
            problem:
                "Hotpot guests keep adding ingredients through the meal, the Wi-Fi is unreliable, and the owners work in three languages. Off-the-shelf systems handled none of those well.",
            decisions: [
                {
                    title: "Orders that survive bad Wi-Fi",
                    body: "A tablet can send an order, lose the reply and retry. Submission is idempotent, so a retry never creates a duplicate ticket or a double charge.",
                },
                {
                    title: "Money without rounding errors",
                    body: "Every amount is stored and summed as integer fils (1 KD = 1000 fils), so totals, discounts and split payments across Cash, KNET and Card always add up.",
                },
                {
                    title: "Each send is its own ticket",
                    body: "Mid-meal additions arrive at the right station (Hotpot, Kitchen, BBQ, Drinks) as new timed chits, while the bill keeps one running tab.",
                },
                {
                    title: "Built for the owners' decisions",
                    body: "Menu and prices in English, Chinese and Arabic (right to left), tax, service and promotions are settings, not code. Shifts close with a Z-report, and the database snapshots itself every 6 hours.",
                },
            ],
            figures: [
                { value: "4", label: "kitchen stations" },
                { value: "3", label: "languages" },
                { value: "3", label: "tender types per bill" },
                { value: "6 h", label: "automatic backups" },
            ],
            stack: ["Node", "Express", "Socket.IO", "SQLite (WAL)", "React", "Vite"],
            links: [{ label: "Case study on GitHub", href: "https://github.com/fatima-salahuddin/restaurant-pos-showcase" }],
            note: "Source code belongs to the client. I can walk through it on a call.",
        },
    ] as Project[],

    projects: [
        {
            slug: "pocketprof",
            title: "PocketProf",
            kind: "project",
            context: "Final year project, FAST-NUCES, team of three",
            role: "Developer",
            period: "2026 to 2027",
            status: "Phase 1 released",
            summary:
                "A course assistant that answers only from a teacher's own Google Classroom material, cites the exact slide or page, and says so when the material does not cover the question.",
            problem:
                "General chatbots answer course questions confidently from the open web, which is wrong for a class with its own syllabus, notation and deadlines.",
            decisions: [
                {
                    title: "Grounded, and checked in code",
                    body: "Answers must cite their sources. An answer with no valid citation is treated as unsupported, and if the model fails the student sees the retrieved passages, never an unsupported answer.",
                },
                {
                    title: "Two gates for saying no",
                    body: "Retrieval declines when nothing scores above a calibrated threshold, without calling the model at all; the model's own sentinel catches on-topic questions the course never taught.",
                },
                {
                    title: "Incremental by construction",
                    body: "Each document's source version and SHA-256 are kept in a ledger, so re-checking an unchanged class takes 0.5 s instead of the 23 s of a first read.",
                },
                {
                    title: "Isolation is structural",
                    body: "Every course has its own vector collection, and every returned passage is checked again against the course before it reaches a prompt.",
                },
            ],
            figures: [
                { value: "97.5%", label: "answer-or-decline accuracy" },
                { value: "0%", label: "unsupported answers" },
                { value: "1.3 s", label: "median answer time" },
                { value: "59", label: "automated tests" },
            ],
            stack: ["Python", "FastAPI", "Qdrant", "SQLAlchemy", "React", "TypeScript", "Docker Compose"],
            links: [{ label: "Code on GitHub", href: "https://github.com/fatima-salahuddin/pocketprof" }],
            note: "Figures are the phase 1 baseline on a 40-query set, 21 Oct 2026.",
        },
        {
            slug: "fairgan",
            title: "FairGAN-Rec",
            kind: "project",
            context: "Recommender Systems coursework, FAST-NUCES",
            role: "Developer",
            period: "2025",
            summary:
                "A movie recommender trained adversarially, so that its user representation keeps what matters for taste and drops what gives away the user's gender.",
            problem:
                "Recommenders learn from past behaviour, so they can quietly serve one group of users better than another.",
            decisions: [
                {
                    title: "A double-headed discriminator",
                    body: "One head judges whether a user embedding looks real, the other tries to guess gender from it. The generator is trained to recommend well and defeat the gender head.",
                },
                {
                    title: "Measured on two axes",
                    body: "Accuracy as RMSE on held-out ratings, fairness as statistical parity between groups.",
                },
                {
                    title: "Usable, not just trained",
                    body: "A Flask app and a Streamlit dashboard serve recommendations from the trained checkpoints.",
                },
            ],
            stack: ["PyTorch", "Python", "Flask", "Streamlit", "MovieLens"],
            image: { src: "/gan.png", alt: "FairGAN system architecture diagram", caption: "System architecture: data layer, generator, recommender and fairness analysis." },
            links: [{ label: "Code on GitHub", href: "https://github.com/fatima-salahuddin/Rs_project" }],
        },
        {
            slug: "ecommerce-marketplace",
            title: "E-Commerce Marketplace",
            kind: "project",
            context: "Software Engineering coursework, FAST-NUCES, with Rimsha Amjad",
            role: "Developer",
            period: "2025",
            summary:
                "A marketplace for customers, sellers and admins on an Oracle database, where the database itself keeps orders and stock consistent.",
            problem:
                "Two shoppers buying the last item at the same moment must not both succeed, and stock must never go negative whatever the application does.",
            decisions: [
                {
                    title: "Checkout that cannot oversell",
                    body: "A PL/SQL procedure locks the product rows with SELECT ... FOR UPDATE before reducing stock, inside one transaction.",
                },
                {
                    title: "Rules in the database",
                    body: "Triggers block negative stock, audit every price change and keep each seller's sales totals current.",
                },
                {
                    title: "Documented like a real project",
                    body: "PRD, app flow, tech stack, frontend guidelines, backend schema and implementation plan alongside the code.",
                },
            ],
            figures: [
                { value: "10", label: "normalised tables" },
                { value: "25", label: "REST endpoints" },
                { value: "3", label: "user roles" },
            ],
            stack: ["Node", "Express", "Oracle", "PL/SQL", "HTML", "JavaScript"],
            links: [{ label: "Code on GitHub", href: "https://github.com/fatima-salahuddin/SE_project" }],
        },
        {
            slug: "network-load-balancer",
            title: "Network Load Balancer",
            kind: "project",
            context: "Computer Networks coursework, FAST-NUCES",
            role: "Developer",
            period: "",
            summary:
                "A load balancer that spreads requests across a pool of backend servers, with a live dashboard of requests, latency and which algorithm handled what.",
            problem: "A single server falls over under a traffic spike; spreading load well depends on choosing the right algorithm for the traffic.",
            decisions: [
                {
                    title: "Pluggable algorithms",
                    body: "Round Robin, Least Connections and IP Hash behind one interface, switchable at runtime.",
                },
                {
                    title: "See what it is doing",
                    body: "A dashboard shows total requests, success rate, latency and per-algorithm usage as traffic runs.",
                },
            ],
            stack: ["Python", "C++", "Sockets"],
            image: { src: "/cn_project.jpeg", alt: "Load balancer dashboard showing requests, latency and algorithm usage", caption: "The live dashboard during a 600-request run." },
            links: [],
        },
        {
            slug: "kernel-module",
            title: "Producer-Consumer Kernel Module",
            kind: "project",
            context: "Operating Systems coursework, FAST-NUCES",
            role: "Developer",
            period: "",
            summary:
                "A loadable Linux kernel module (1,200+ lines of C) running a priority-based producer-consumer system on kernel threads.",
            problem: "Synchronisation bugs are easy to write and hard to see; the kernel gives no safety net.",
            decisions: [
                {
                    title: "The right primitive for each job",
                    body: "Semaphores for blocking producers and consumers, spinlocks for short critical sections, and simulated IRQ handlers.",
                },
                {
                    title: "Configurable while running",
                    body: "sysfs and debugfs interfaces change parameters and expose state without recompiling or reloading the module.",
                },
            ],
            stack: ["C", "Linux kernel", "kthreads"],
            links: [],
        },
        {
            slug: "matrix-calculator",
            title: "Matrix Calculator in x86 Assembly",
            kind: "project",
            context: "Assembly language coursework, FAST-NUCES",
            role: "Developer",
            period: "",
            summary: "A menu-driven matrix calculator written in x86 Assembly with Irvine32: addition, subtraction, multiplication and determinants.",
            problem: "Matrix arithmetic with nothing but registers, memory addressing and loops.",
            decisions: [
                {
                    title: "Input that cannot break it",
                    body: "Dimension checks reject operations that do not apply before any memory is touched.",
                },
            ],
            stack: ["x86 Assembly", "Irvine32"],
            links: [],
        },
    ] as Project[],

    experience: [
        { role: "Full-Stack Developer, sole developer", org: "Planet Care", detail: "Facility ERP and POS in Kuwait; HR and operations platform in Iraq", period: "2026 to now" },
        { role: "Full-Stack Developer, sole developer", org: "Eastern Palace Restaurant, Kuwait", detail: "Real-time POS and kitchen display", period: "2026" },
        { role: "Software Developer, contributor", org: "SiRiiL and Neon", detail: "SaaS website (React, TypeScript, Sanity); multi-tenant telecom billing (Laravel, SQL Server)", period: "Apr 2026 to now" },
        { role: "Intern", org: "ISPR Internship Program", detail: "Six-week programme, certificate of completion", period: "Jul to Sep 2026" },
        { role: "Digital Literacy Instructor, remote", org: "Tabuk, Saudi Arabia", detail: "ICT, Python and HTML/CSS for 30+ students aged 8 to 17", period: "Jan 2024 to Oct 2025" },
        { role: "Private Tutor", org: "Computer Science, Python and Mathematics", detail: "50+ students", period: "2023 to now" },
    ],

    skills: [
        { area: "Languages", items: ["PHP", "JavaScript", "TypeScript", "Python", "C", "C++", "SQL", "x86 Assembly", "Bash"] },
        { area: "Backend", items: ["Laravel", "Node", "Express", "FastAPI", "Flask", "Socket.IO", "REST APIs", "JWT and Sanctum auth"] },
        { area: "Frontend and apps", items: ["React", "Next.js", "Vite", "Tailwind CSS", "TanStack Query", "Electron", "Capacitor"] },
        { area: "Data", items: ["MySQL", "PostgreSQL", "SQLite", "SQL Server", "Oracle", "MongoDB", "Qdrant"] },
        { area: "AI and ML", items: ["RAG and LLM apps", "PyTorch", "TensorFlow", "Streamlit"] },
        { area: "Ops and integrations", items: ["Docker", "Linux", "Git", "Railway", "Vercel", "ZKTeco devices", "Stripe", "Authorize.Net", "GoCardless"] },
    ],

    leadership: [
        "Head of Graphic Design, FAST Robotics and Automation Society",
        "Head of Design, Developer Student Club",
        "Co-Head of Design, ACM-W",
        "Co-Head of Marketing, FAST Entrepreneurship Society",
        "Organised donation drives with HOPES raising Rs. 67,000+ for free medical care",
    ],

    certifications: [
        "Google AI Essentials (Google)",
        "AI Seekho: AI and ML training (Google Cloud)",
        "Solutions Architecture Job Simulation (AWS via Forage)",
        "C Programming Fundamentals (UC Santa Cruz)",
    ],
};

export const allProjects: Project[] = [...resumeData.work, ...resumeData.projects];
