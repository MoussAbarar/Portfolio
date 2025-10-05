import { motion } from 'framer-motion';

export default function Projects(){

    const projects = [

  {
    title: "Medical Donation Web Platform",
    description: "A full-stack web application that connects donors of medical equipment with people in need. Users can offer donations, request available items, and manage their activity through a simple dashboard.",
    image: "/assets/project1.jpg",
    link: "https://github.com/MoussAbarar/Donation",
    tech: ["PHP", "MySQL", "JavaScript", "AJAX", "CSS", "Bootstrap"],
  },
  {
    title: "Sandwich Ordering Platform",
    description: "An online sandwich ordering platform where users can browse meals, add them to a cart, and place orders. Orders are managed by the admin through a dedicated dashboard.",
    image: "/assets/project3.jpg",
    link: "https://moussabarar.github.io/restaurant/",
    tech: ["PHP", "MySQL", "JavaScript", "AJAX", "CSS", "Bootstrap"],
  },
  {
    title: "Gym Hero Landing Section",
    description: "A landing section concept for a fitness gym website. Includes responsive design, engaging headline, call-to-action button and a background image",
    image: "/assets/project5.png",
    link: "https://moussabarar.github.io/sport/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "My Portfolio",
    description: "A modern and fully responsive personal portfolio website built with React and TailwindCSS. It showcases my skills, projects, and contact information in a clean, user-friendly interface. The website features dark mode support, animated transitions.",
    image: "/assets/project2.png",
    link: "https://example.com/blog",
    tech: ["React", "TailwindCSS"],
  },
  {
    title: "Online Learning Platform",
    description: "A professional e-learning website built with WordPress using Tutor LMS and WooCommerce. The platform enables instructors to create and manage both free and paid online courses, while students can register, enroll, and access lessons through a user-friendly interface.",
    image: "/assets/project4.png",
    link: "https://minassa.unaux.com/",
    tech: ["WordPress", "Tutor LMS", "Woocommerce", "Elementor"],
  },
  {
    title: "Online Bookstore",
    description: "An online store built with WordPress and Woocommerce for selling books, school supplies, and gifts items. Includes product categories, cart, and checkout features with a responsive design.",
    image: "/assets/project6.png",
    link: "https://darb-ennadjah.infinityfreeapp.com/",
    tech: ["WordPress", "Woocommerce", "Elementor"],
  },
];


    return(
        <section
      id="projects"
      className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">My Projects</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-sm mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-500 dark:text-white text-blue-800 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  ➤ View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    )
}