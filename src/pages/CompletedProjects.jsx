import { Link } from "react-router-dom";
import { ExternalLink, CheckCircle } from "lucide-react";

const CompletedProjects = () => {
  const fallbackImage =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='480' viewBox='0 0 800 480'><rect width='800' height='480' fill='%23f3f4f6'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='Inter, Arial, sans-serif' font-size='24'>Image unavailable</text></svg>";

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackImage;
  };

  const projects = [
    {
      id: 2,
      title: "School Management System",
      description:
        "Comprehensive system for managing students, teachers, fees, attendance, and academic records with real-time reporting.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      link: "https://example.com/school-system",
      category: "Education",
      year: 2024,
    },
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A full e-commerce platform with product listings, shopping cart, and admin management. Complete payment integration included.",
      image: "https://images.unsplash.com/photo-1460925895917-adf4e5e5e2b9?w=500&h=300&fit=crop",
      link: "https://example.com/ecommerce",
      category: "E-Commerce",
      year: 2024,
    },
    {
      id: 3,
      title: "Business Portfolio Website",
      description:
        "Professional company portfolio website with modern design, SEO optimization, and brand visibility enhancements.",
      image: "https://images.unsplash.com/photo-1555721519-a29a7e91c7d0?w=500&h=300&fit=crop",
      link: "https://example.com/portfolio",
      category: "Corporate",
      year: 2023,
    },
    {
      id: 4,
      title: "Restaurant Management App",
      description:
        "Mobile app for managing restaurant operations including order management, inventory, and customer reviews.",
      image: "https://images.unsplash.com/photo-1551632440-1cdcea16c352?w=500&h=300&fit=crop",
      link: "https://example.com/restaurant",
      category: "Hospitality",
      year: 2023,
    },
    {
      id: 5,
      title: "Logistics Tracking Platform",
      description:
        "Real-time tracking system for logistics companies with live GPS, dispatch management, and customer notifications.",
      image: "https://images.unsplash.com/photo-1553531889-e6cf89d57269?w=500&h=300&fit=crop",
      link: "https://example.com/logistics",
      category: "Logistics",
      year: 2023,
    },
    {
      id: 6,
      title: "Healthcare Clinic System",
      description:
        "Patient management system with appointment scheduling, medical records, and prescription management for clinics.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop",
      link: "https://example.com/healthcare",
      category: "Healthcare",
      year: 2024,
    },
  ];

  return (
    <div className="space-y-8 md:space-y-12">
      {/* Header */}
      <div className="space-y-3 md:space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          Completed Projects
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
          Below are some of the successful projects we've delivered for clients across Africa. These showcase our expertise, creativity, and commitment to excellence.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-lg md:rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-40 md:h-48 bg-gray-200">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                onError={handleImageError}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-0 right-0 m-2 md:m-3">
                <span className="bg-primary-500 text-white text-xs font-semibold px-2 md:px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 flex flex-col flex-grow">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm mb-4 flex-grow">
                {project.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-t border-gray-100 pt-4">
                <span>{project.year}</span>
                <div className="flex items-center gap-1 text-primary-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Completed</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-primary-500 hover:bg-primary-600 text-white hover:!text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300"
              >
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl p-8 md:p-12 text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          Impressed by our work?
        </h2>
        <p className="text-primary-100 max-w-2xl mx-auto">
          Ready to bring your vision to life? Let's discuss your next project and create something amazing together.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 mt-4"
        >
          Start Your Project
        </Link>
      </div>
    </div>
  );
};

export default CompletedProjects;
