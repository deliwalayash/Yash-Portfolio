import { useState } from "react";
import ProjectWork from "../components/ProjectWork";
import SectionHeading from "../components/SectionHeading";
import WorkFilter from "../components/WorkFilter";
import { FaGithub } from "react-icons/fa";

const MyWork = () => {
  const projects = [
    {
      heading: "Patient Appointment System",
      dsc: "Built a Patient Appointment Management System using React with Local Storage. Users can add, edit, delete, and view patient appointments without any backend. The app focuses on clean state management with React hooks and a smooth, responsive UI.",
      img: "/patient-management.png",
      id: "react",
      live: "https://patient-appointment-system-kappa.vercel.app/",
      github: "https://github.com/deliwalayash/Patient-Appointment-System",
    },
    {
      heading: "Comment Review App",
      dsc: "I built a simple Comment Review System using React where users can enter their name and review. It uses hooks for real-time updates and Tailwind CSS for a clean, responsive design.",
      img: "/review.png",
      id: "react",
      live: "review-card-3.vercel.app",
      github: "https://github.com/deliwalayash/Review-card-3",
    },
    {
  heading: "E-Commerce Product Dashboard",
  dsc: "Developed an e-commerce product listing app using React with Fake Store API integration. Implemented pagination and category-based filtering for smoother browsing, along with efficient state management using React hooks and a responsive UI.",
  img: "/ecommerce.png",
  id: "react",
  live: "https://e-commerece-api.vercel.app/",
  github: "https://github.com/deliwalayash/E-commerece-Api",
},

    {
      heading: "Employee Management System",
      dsc: "I developed an Employee Management System using React where users can add, view, update, and delete employee details. It uses React hooks for state management and local storage for data persistence, styled with Tailwind CSS for a clean and responsive UI.",
      img: "/empmanage.png",
      id: "react",
      live: "https://employee-management-local-storage.vercel.app/",
      github: "https://github.com/deliwalayash/Employee-management-local-storage",
    },
    {
      heading: "Add-to-Cart",
      dsc: "I created an Add-to-Cart website using JavaScript and Bootstrap where users can add products, increase their quantity, and remove them from the cart. It features dynamic updates and a responsive UI using Bootstrap components.",
      img: "/addtocart.png",
      id: "javascript",
      live: "https://deliwalayash.github.io/Javascript-Projects/add-to-cart-4//",
      github: "https://github.com/deliwalayash/Javascript-Projects/tree/main/add-to-cart-4",
    },
    {
      heading: "Student Management System",
      dsc: "I built a Student Management System using JavaScript that lets users add, edit, view, and delete student records. It stores data in local storage for persistence and uses Bootstrap for a clean, responsive UI. All actions update the UI dynamically without page reloads.",
      img: "/stumanage.png",
      id: "javascript",
      live: "https://deliwalayash.github.io/Javascript-Projects/stu-management/",
      github:
        "https://github.com/deliwalayash/Javascript-Projects/tree/main/stu-management",
    },
    {
      heading: "Weather Api",
      dsc: "I created a Weather App using JavaScript that fetches live weather data from an open API based on user input. It displays temperature, weather conditions, and location details. The interface is styled with Bootstrap for a simple and responsive user experience.",
      img: "/weather.png",
      id: "javascript",
      live: "https://deliwalayash.github.io/Javascript-Projects/weather-project/",
      github: "https://github.com/deliwalayash/Javascript-Projects/tree/main/weather-project",
    },
    {
      heading: "All Javascript Projects",
      dsc: "Created multiple JavaScript-based projects including Tic Tac Toe, Calculator, Min–Max Finder, String Operations, and a Timer. These projects focus on core JavaScript logic, DOM manipulation, event handling, and problem-solving with clean, interactive UI behavior.",
      img: "/alljavascript.png",
      id: "javascript",
      live: "https://deliwalayash.github.io/Javascript-Projects/",
      github: "https://github.com/deliwalayash/Javascript-Projects/tree/main",
    },
    {
      heading: "Hotel Website",
      dsc: "I created a political website using HTML, CSS, and Bootstrap to present information about political parties, leaders, and recent news. The site features a structured layout, responsive design, and clear sections for content like vision, manifesto, and events, providing a user-friendly experience across all devices.",
      img: "/hotel.png",
      id: "html / css",
      live: "https://deliwalayash.github.io/figma-project/",
      github: "https://github.com/deliwalayash/figma-project",
    },
  ];

  const [filteredArr, setFilteredArr] = useState(projects);

  const getName = (id) => {
    if (id == "all") {
      setFilteredArr(projects);
      return;
    }

    const filterProject = projects.filter((project) => {
      return project.id == id;
    });

    setFilteredArr(filterProject);
  };

  return (
    <div id="works" className="container mx-auto">
      <SectionHeading
        title={"My Recent Works"}
        dsc={
          "We make websites that works efficiently on every device and also with modern responsive UI"
        }
      />
      <WorkFilter getName={getName} />
      <ProjectWork projects={filteredArr} />
    </div>
  );
};

export default MyWork;
