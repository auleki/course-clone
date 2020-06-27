const courses = [{
        id: 1,
        title: "Securing React Apps with Auth0",
        slug: "react-auth0-authentication-security",
        authorId: 1,
        category: "JavaScript"
    },
    {
        id: 2,
        title: "React: The Big Picture",
        slug: "react-big-picture",
        authorId: 97,
        category: "JavaScript"
    },
    {
        id: 3,
        title: "Creating Reusable React Components",
        slug: "react-creating-reusable-components",
        authorId: 64,
        category: "JavaScript"
    },
    {
        id: 4,
        title: "Building a JavaScript Development Environment",
        slug: "javascript-development-environment",
        authorId: 997,
        category: "JavaScript"
    },
    {
        id: 5,
        title: "Building Applications with React and Redux",
        slug: "react-redux-react-router-es6",
        authorId: 867,
        category: "JavaScript"
    },
    {
        id: 6,
        title: "Building Applications in React and Flux",
        slug: "react-flux-building-applications",
        authorId: 535,
        category: "JavaScript"
    },
    {
        id: 7,
        title: "Clean Code: Writing Code for Humans",
        slug: "writing-clean-code-humans",
        authorId: 237,
        category: "Software Practices"
    },
    {
        id: 8,
        title: "Architecting Applications for the Real World",
        slug: "architecting-applications-dotnet",
        authorId: 104,
        category: "Software Architecture"
    },
    {
        id: 9,
        title: "Becoming an Outlier: Reprogramming the Developer Mind",
        slug: "career-reboot-for-developer-mind",
        authorId: 790,
        category: "Career"
    },
    {
        id: 10,
        title: "Web Component Fundamentals",
        slug: "web-components-shadow-dom",
        authorId: 700,
        category: "HTML5"
    }
];

const authors = [{
        id: 1,
        name: "Tunji Adekunle"
    },
    {
        id: 2,
        name: "Wahab Giwa"
    },
    {
        id: 3,
        name: "Adeola Funbi"
    },
]

const newCourse = {
    id: null,
    title: "",
    authorId: null,
    category: ""
};

module.exports = {
    newCourse,
    courses,
    authors
};