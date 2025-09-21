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
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Aditya Raj",
        mentions: "@aditya",
        linkedin_id: "https://www.linkedin.com/in/aditya-raj-pandey-7663192b7/",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Alekh Sachan",
        linkedin_id: "https://www.linkedin.com/in/alekh-sachan/",
        mentions: "@alekh",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Parth Shukla",
        mentions: "@parth",
        linkedin_id: "https://www.linkedin.com/in/parth-shukla-0b5a57287/",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Mohd. Arsalan Rayeen",
        mentions: "@arsalan",
        linkedin_id: "https://www.linkedin.com/in/mohammad-arsalan-rayeen-8416a4320/",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Nikhil Kushwaha",
        mentions: "@nikhil",
        linkedin_id: "https://www.linkedin.com/in/nikhil-kushwaha9179/",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
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
