const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Timeline",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Reviews",
        link: "#testimonials",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 10, suffix: "+", label: "Completed Projects" },
    { value: 200, suffix: "+", label: "DSA Problems Solved" },
    { value: 15, suffix: "+", label: "Learned Skills" },
    { value: 3, suffix: "+", label: "Years of Experience in Coding" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "Divyam’s EduGuide AI project demonstrated his expertise in applying AI to education. The platform provided intelligent study recommendations and personalized guidance, reflecting his ability to combine technical depth with practical impact.",
        imgPath: "/images/sk-learn.png",
        logoPath: "/images/logo1.png",
        title: "EduGuide AI",
        date: "January 2025 - Present",
        responsibilities: [
            "Built an AI-driven platform that offers personalized study recommendations for students.",
            "Implemented machine learning models using Python and Scikit-learn for adaptive guidance.",
            "Integrated the system into a web interface, ensuring scalability and real-time performance.",
        ],

    },
    {
        review: "Divyam’s automation project simplified workflows and reduced manual effort significantly. His approach to efficiency and precision reflects his deep interest in system optimization.",
        imgPath: "/images/python-logo.png",
        logoPath: "/images/logo2.png",
        title: "Workflow Automation Tool",
        date: "August 2024 - December 2024",
        responsibilities: [
            "Developed automation scripts in Python to manage daily tasks and reminders using Notion’s API.",
            "Created integrations with third-party services to streamline task management.",
            "Built a user-friendly interface for managing automated processes.",
        ],
    },
    {
        review: "Divyam’s portfolio website showcased his ability to build responsive, visually appealing, and performance-optimized applications. His focus on adaptability ensured a seamless experience across both desktop and mobile devices.",
        imgPath: "/images/react.png",
        logoPath: "/images/logo3.png",
        title: "Responsive Portfolio Website",
        date: "March 2024 - July 2024",
        responsibilities: [
            "Designed and developed a personal portfolio website using React.js.",
            "Implemented responsive layouts for smooth performance on desktop and mobile.",
            "Optimized site speed, accessibility, and user navigation for better engagement.",
        ],

    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Kunal Kushwaha",
        mentions: "@kunal",
        linkedin_id: "https://www.linkedin.com/in/kunalkushwaha1806/",
        review:
            "I can’t say enough good things about Divyam. Despite being a college student, he has an impressive grasp of technical concepts and problem-solving. He quickly understands requirements and comes up with creative, practical solutions. His ability to adapt and learn fast really stands out.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Aditya Raj",
        mentions: "@aditya",
        linkedin_id: "https://www.linkedin.com/in/aditya-raj-pandey-7663192b7/",
        review:
            "Working with Divyam was a fantastic experience. His technical depth in web development and AI/ML is remarkable for a student. Beyond that, his communication skills, professionalism, and ability to collaborate effectively make him someone I’d highly recommend for team projects and internships.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Alekh Sachan",
        linkedin_id: "https://www.linkedin.com/in/alekh-sachan/",
        mentions: "@alekh",
        review:
            "Collaborating with Divyam was an absolute pleasure. His enthusiasm for learning and applying new technologies is infectious. He balances strong technical expertise with excellent teamwork and a positive attitude. If you’re looking for someone dependable and innovative, Divyam is the right fit.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Parth Shukla",
        mentions: "@parth",
        linkedin_id: "https://www.linkedin.com/in/parth-shukla-0b5a57287/",
        review:
            "Divyam brings a fresh perspective to every project. His logical thinking and hands-on skills in development are impressive, and he’s equally strong in soft skills like communication and time management. A true team player who’s always willing to support others.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Sirjan Nishad",
        mentions: "@sirjan",
        linkedin_id: "https://www.linkedin.com/in/sirjan-nishad-2aa883288/",
        review:
            "Divyam’s technical expertise is way beyond what you’d expect from a college student. He has a sharp understanding of problem-solving, automation, and AI/ML concepts. His professionalism, curiosity, and ability to think critically make him a strong asset in any project setting.",
        imgPath: "/images/client4.png",
    },
    {
        name: "Nikhil Kushwaha",
        mentions: "@nikhil",
        linkedin_id: "https://www.linkedin.com/in/nikhil-kushwaha9179/",
        review:
            "Working with Divyam has been a great experience. He has a rare mix of technical skills and people skills—whether it’s coding a complex feature, debugging efficiently, or explaining concepts to peers with clarity. His dedication and collaborative mindset make him stand out.",
        imgPath: "/images/client6.png",
    },
];


const socialImgs = [
    {
        name: "insta",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};
