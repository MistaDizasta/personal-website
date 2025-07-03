"use client";

import { useState, useMemo } from "react";

// Placeholder Navbar component for demonstration purposes
// In a real project, this would be in its own file like components/Navbar.jsx
const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">Dhiemas Darma</a>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#portfolio" className="hover:text-gray-400">Portfolio</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
    </nav>
  );
};


export default function Home() {
  // State for skill search term in About section
  const [skillSearchTerm, setSkillSearchTerm] = useState("");
  // State for project filter term in Portfolio section
  const [projectFilterTerm, setProjectFilterTerm] = useState("");

  // Define your skills as a structured array of objects.
  const allSkills = useMemo(() => ([
    { category: "Front-End", name: "JavaScript" },
    { category: "Front-End", name: "HTML" },
    { category: "Front-End", name: "CSS" },
    { category: "Front-End", name: "React" },
    { category: "Frameworks", name: "Node.js" },
    { category: "Tools", name: "GitHub" },
    { category: "Tools", name: "VSCode" },
    { category: "Tools", name: "Figma" }
  ]), []);

  // Define your portfolio projects as a structured array of objects.
  const allProjects = useMemo(() => ([
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product listings, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      imageUrl: "https://placehold.co/600x400/2563eb/ffffff?text=E-commerce",
      projectUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A responsive web application for managing daily tasks, with features like task creation, editing, and status tracking.",
      technologies: ["React", "Tailwind CSS", "Firebase"],
      imageUrl: "https://placehold.co/600x400/ef4444/ffffff?text=Task+App",
      projectUrl: "#"
    },
    {
      id: 3,
      title: "Personal Blog Site",
      description: "A modern and minimalist blog platform with a content management system, allowing easy publishing of articles.",
      technologies: ["Next.js", "Markdown", "Vercel"],
      imageUrl: "https://placehold.co/600x400/10b981/ffffff?text=Blog+Site",
      projectUrl: "#"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "An interactive weather application displaying real-time weather data for various cities using a third-party API.",
      technologies: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
      imageUrl: "https://placehold.co/600x400/f59e0b/ffffff?text=Weather+App",
      projectUrl: "#"
    }
  ]), []);

  // --- Algorithmic Function: Filtering Skills ---
  const filteredSkills = useMemo(() => {
    if (!skillSearchTerm) {
      return allSkills;
    }
    const lowerCaseSearchTerm = skillSearchTerm.toLowerCase();
    return allSkills.filter(skill =>
      skill.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      skill.category.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [allSkills, skillSearchTerm]);

  // --- Algorithmic Function: Filtering Projects ---
  const filteredProjects = useMemo(() => {
    if (!projectFilterTerm) {
      return allProjects; // If no search term, return all projects
    }
    const lowerCaseFilterTerm = projectFilterTerm.toLowerCase();

    return allProjects.filter(project =>
      project.title.toLowerCase().includes(lowerCaseFilterTerm) ||
      project.description.toLowerCase().includes(lowerCaseFilterTerm) ||
      project.technologies.some(tech => tech.toLowerCase().includes(lowerCaseFilterTerm))
    );
  }, [allProjects, projectFilterTerm]);

  // Handler function for skill search input changes
  const handleSkillSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSkillSearchTerm(event.target.value);
  };

  // Handler function for project filter input changes
  const handleProjectFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectFilterTerm(event.target.value);
  };

  // Helper function to group skills by category for display
  type Skill = { category: string; name: string };
  type GroupedSkills = { [category: string]: string[] };

  const groupSkillsByCategory = (skills: Skill[]): GroupedSkills => {
    return skills.reduce((acc: GroupedSkills, skill: Skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill.name);
      return acc;
    }, {});
  };

  const groupedFilteredSkills = groupSkillsByCategory(filteredSkills);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-500 px-8 py-14 md:py-24">
        <div className="container mx-auto">
          <div className="lg:w-2/3 xl:w-3/5">
            <div className="mb-5">
              <h2 className="text-xl no-underline text-light text-white">Hello, I&apos;m Dhiemas Darma</h2>
              <h1 className="text-3xl md:text-4xl font-display text-shadow-black">Full-Stack Web Developer</h1>
            </div>
            <div className="mb-5 text-shadow-black space-y-2">
              <p>
                Hi there! I&apos;m Dhiemas Darma, a passionate web developer dedicated to building responsive, user-friendly, and high-performance websites. I specialize in front-end development with React, full-stack solutions with Node.js. Let&apos;s create something amazing together!
              </p>
            </div>
            <div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-black px-8 py-14 md:py-24">
        <div className="container mx-auto">
          <div className="flex flex-col gap-3 md:gap-0 md:flex-row">
            <div className="basis-full md:basis-2/5">
              <div className="md:sticky md:top-8">
                <h1 className="text-4xl font-display text-white">About</h1>
                <p className="text-base text-gray-500 sm:text-lg mb-8">
                  As a web developer, Dhiemas thrives on solving complex challenges with elegant code. He specializes in building robust and scalable web applications that deliver exceptional performance and intuitive user interfaces.
                </p>

                <h2 className="text-xl text-white mt-8 mb-4">Technical Skills</h2>

                {/* Skill Search Input */}
                <input
                  type="text"
                  placeholder="Search skills..."
                  className="p-2 mb-4 w-full rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={skillSearchTerm}
                  onChange={handleSkillSearchChange}
                />

                {/* Display Filtered Skills */}
                {Object.entries(groupedFilteredSkills).map(([category, skills]) => (
                  <div key={category} className="mb-2">
                    <span className="text-gray-400 font-semibold">{category}:</span>{" "}
                    <span className="text-white">{Array.isArray(skills) ? skills.join(", ") : String(skills)}</span>
                  </div>
                ))}

                {/* Message if no skills are found after filtering */}
                {filteredSkills.length === 0 && (
                  <p className="text-gray-400 mt-4">No skills found matching your search. Try a different keyword!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-gray-800 px-8 py-14 md:py-24">
        <div className="container mx-auto">
          <h1 className="text-4xl font-display text-white mb-8 text-center">My Portfolio</h1>

          {/* Project Filter Input */}
          <input
            type="text"
            placeholder="Filter projects by title, description, or technology..."
            className="p-2 mb-8 w-full rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={projectFilterTerm}
            onChange={handleProjectFilterChange}
          />

          {/* Display Filtered Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map(project => (
                <div key={project.id} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://placehold.co/600x400/374151/ffffff?text=Image+Error";
                    }}
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map(tech => (
                        <span key={tech} className="bg-blue-600 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-400 text-lg py-10">
                No projects found matching your filter.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
