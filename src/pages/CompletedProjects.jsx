import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MessageCircle, CheckCircle } from "lucide-react";

import kredochapchap from "../assets/completed-projects/kredochapchap.jpeg";
import logicorex from "../assets/completed-projects/logicorex.jpeg";
import medicPortfolio from "../assets/completed-projects/medic-portfolio.jpeg";
import shoppieShop from "../assets/completed-projects/shoppie-shop.jpeg";
import tipisFarm from "../assets/completed-projects/tipis-farm.jpeg";
import valentinesUi from "../assets/completed-projects/valentines-ui.jpeg";

const CompletedProjects = () => {
  const fallbackImage =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='480' viewBox='0 0 800 480'><rect width='800' height='480' fill='%23f3f4f6'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='Inter, Arial, sans-serif' font-size='24'>Image unavailable</text></svg>";

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackImage;
  };

  const projects = [
    {
      id: 1,
      title: "Shoppie Shop",
      description:
        "A modern e-commerce storefront built for a local retailer. Features product listings, cart management, M-Pesa payment integration, and a clean admin dashboard for order and inventory control.",
      image: shoppieShop,
      link: "#",
      category: "E-Commerce",
      year: 2025,
    },
    {
      id: 2,
      title: "KredoChapChap",
      description:
        "A mobile-first micro-lending web application enabling users to apply for instant loans, track repayments, and manage their credit profiles. Built with real-time notifications and M-Pesa disbursement.",
      image: kredochapchap,
      link: "#",
      category: "Fintech",
      year: 2025,
    },
    {
      id: 3,
      title: "LogiCoreX",
      description:
        "A professional tech company website built for LogiCoreX — showcasing their software solutions, services, and team. Features a modern design, service listings, client testimonials, and a contact system.",
      image: logicorex,
      link: "#",
      category: "Tech Company",
      year: 2024,
    },
    {
      id: 4,
      title: "Medic Portfolio",
      description:
        "A clean, professional portfolio website developed for a medical doctor to showcase qualifications, publications, and services. Features appointment booking and a responsive, SEO-optimized design.",
      image: medicPortfolio,
      link: "#",
      category: "Healthcare",
      year: 2024,
    },
    {
      id: 5,
      title: "Tipi's Farm",
      description:
        "A farm management and online marketplace platform for an agribusiness. Allows farmers to list produce, manage orders, and connect with buyers directly. Includes a dashboard for tracking sales and stock.",
      image: tipisFarm,
      link: "#",
      category: "Agriculture",
      year: 2025,
    },
    {
      id: 6,
      title: "Valentine's UI",
      description:
        "A beautifully crafted themed UI/UX project — a gifting and event-booking web app for Valentine's Day. Features animated cards, gift personalization, and an interactive booking flow.",
      image: valentinesUi,
      link: "#",
      category: "Events & Gifting",
      year: 2025,
    },
  ];

  return (
    <div className="space-y-8 md:space-y-12">
      <Helmet>
        <title>Completed Projects | CodeSolveAfrica</title>
        <meta name="description" content="Browse CodeSolveAfrica's portfolio of completed websites, mobile apps and business systems built for clients across Africa." />
        <link rel="canonical" href="https://codesolveafrica.co.ke/projects/completed" />
      </Helmet>
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
                href={`https://wa.me/254799656264?text=${encodeURIComponent(`Hi CodeSolveAfrica, I came across your *${project.title}* project on your portfolio and I'm very impressed. I'd love to discuss something similar for my business. Are you available?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white hover:!text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                <MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
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
