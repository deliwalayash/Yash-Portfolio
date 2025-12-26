import { useState } from "react"
import ProjectWork from "../components/ProjectWork"
import SectionHeading from "../components/SectionHeading"
import WorkFilter from "../components/WorkFilter"
import { FaGithub } from "react-icons/fa";

const MyWork = () => {
    const projects = [
        {
            heading: "Todo List",
            dsc: "I created a simple To-Do List app using React that lets users add, delete, and mark tasks as completed. It uses React hooks for state management and Tailwind CSS for a clean, responsive UI.",
            img: "/todo-list.png",
            id: "react",
            live: "https://react-pr-3-todo-list-swart.vercel.app/",
            github: "https://github.com/7700ABHISHEK/react-pr-3-todo-list",
        },
        {
            heading: "Comment Review App",
            dsc: "I built a simple Comment Review System using React where users can enter their name and review. It uses hooks for real-time updates and Tailwind CSS for a clean, responsive design.",
            img: "/Comment-Review-system.png",
            id: "react",
            live: "https://comment-review-pr-4.vercel.app/",
            github: "https://github.com/7700ABHISHEK/comment-review-pr-4",
        },
        {
            heading: "CRUD operation",
            dsc: "I built a CRUD app using React that allows users to create, read, update, and delete items, with all data stored in local storage. It uses React hooks for state handling and Tailwind CSS for a clean, responsive design.",
            img: "/Form-Validation.png",
            id: "react",
            live: "https://crud-localstorage-pr6.vercel.app/",
            github: "https://github.com/7700ABHISHEK/crud-localstorage-pr6",
        },
        {
            heading: "Employee Management System",
            dsc: "I developed an Employee Management System using React where users can add, view, update, and delete employee details. It uses React hooks for state management and local storage for data persistence, styled with Tailwind CSS for a clean and responsive UI.",
            img: "/Employee-Management-system.png",
            id: "react",
            live: "https://employee-management-system-pr7.vercel.app/",
            github: "https://github.com/7700ABHISHEK/employee-management-system-pr7",
        },
        {
            heading: "Add-to-Cart",
            dsc: "I created an Add-to-Cart website using JavaScript and Bootstrap where users can add products, increase their quantity, and remove them from the cart. It features dynamic updates and a responsive UI using Bootstrap components.",
            img: "/Add-to-Cart.png",
            id: "javascript",
            live: "https://7700abhishek.github.io/Add-To-Cart/",
            github: "https://github.com/7700ABHISHEK/Add-To-Cart",
        },
        {
            heading: "Student Management System",
            dsc: "I built a Student Management System using JavaScript that lets users add, edit, view, and delete student records. It stores data in local storage for persistence and uses Bootstrap for a clean, responsive UI. All actions update the UI dynamically without page reloads.",
            img: "/Student-Management-system.png",
            id: "javascript",
            live: "https://7700abhishek.github.io/PR-6-Student-list-using-class-and-object/",
            github: "https://github.com/7700ABHISHEK/PR-6-Student-list-using-class-and-object",
        },
        {
            heading: "Weather Api",
            dsc: "I created a Weather App using JavaScript that fetches live weather data from an open API based on user input. It displays temperature, weather conditions, and location details. The interface is styled with Bootstrap for a simple and responsive user experience.",
            img: "/Weather-api.png",
            id: "javascript",
            live: "https://7700abhishek.github.io/Weather-Api/",
            github: "https://github.com/7700ABHISHEK/Weather-Api",
        },
        {
            heading: "Portfolio",
            dsc: "I developed a responsive portfolio website using HTML, CSS, and Bootstrap to showcase my projects, skills, and contact information. The site features a clean layout, smooth navigation, and mobile-friendly design, making it easy for visitors to explore my work and get in touch.",
            img: "/Portfolio-bt.png",
            id: "html / css",
            live: "https://7700abhishek.github.io/Portfolio-Website/",
            github: "https://github.com/7700ABHISHEK/Portfolio-Website",
        },
        {
            heading: "Politixy",
            dsc: "I created a political website using HTML, CSS, and Bootstrap to present information about political parties, leaders, and recent news. The site features a structured layout, responsive design, and clear sections for content like vision, manifesto, and events, providing a user-friendly experience across all devices.",
            img: "/politixy-bt.png",
            id: "html / css",
            live: "https://7700abhishek.github.io/politixy-website/",
            github: "https://github.com/7700ABHISHEK/politixy-website",
        },
    ];

    const [filteredArr, setFilteredArr] = useState(projects);


    const getName = (id) => {
        if(id == "all"){
            setFilteredArr(projects);
            return;
        }

        const filterProject = projects.filter((project) => {
            return project.id == id;
        })

        setFilteredArr(filterProject)
    }


    return (
        <div id="works" className="container mx-auto">
            <SectionHeading title={'My Recent Works'} dsc={'We make websites that works efficiently on every device and also with modern responsive UI'} />
            <WorkFilter getName={getName}/>
            <ProjectWork projects={filteredArr}/>
        </div>
    )
}

export default MyWork