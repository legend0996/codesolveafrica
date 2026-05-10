import { Link } from "react-router-dom";
import { ShoppingCart, MessageCircle, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

import airtimeVending from "../assets/for-sale/airtime-vending-system.png";
import chamaMis from "../assets/for-sale/chama-mis.png";
import hospitalMis from "../assets/for-sale/hospital-management-system.png";
import kenyaMathQuest from "../assets/for-sale/kenya-math-quest.png";
import restaurantMis from "../assets/for-sale/restaurant-mis.png";
import schoolMis from "../assets/for-sale/school-management-system.png";
import stockeaseMis from "../assets/for-sale/stockease-mis.png";

const ProjectsForSale = () => {
  const [imageErrors, setImageErrors] = useState({});

  const fallbackImage =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='480' viewBox='0 0 800 480'><rect width='800' height='480' fill='%23f3f4f6'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='Inter, Arial, sans-serif' font-size='24'>Image unavailable</text></svg>";

  const handleImageError = (projectId) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  const projects = [
    {
      id: 1,
      title: "School Management System",
      description:
        "A complete school management platform covering student enrollment, attendance tracking, fee collection, academic grading, timetable management, and a parent portal. Ideal for primary, secondary, and tertiary institutions.",
      price: "KSH 299,900",
      image: schoolMis,
      link: "#",
      features: ["Student Enrollment", "Attendance & Grading", "Fee Management", "Parent Portal"],
      rating: 4.9,
    },
    {
      id: 2,
      title: "Hospital Management System",
      description:
        "A fully-featured hospital MIS for managing outpatient & inpatient records, doctor scheduling, lab results, pharmacy stock, and billing. Comes with role-based access for doctors, nurses, and admin staff.",
      price: "KSH 449,900",
      image: hospitalMis,
      link: "#",
      features: ["Patient Records", "Doctor Scheduling", "Pharmacy & Lab", "Billing & Reports"],
      rating: 4.9,
    },
    {
      id: 3,
      title: "Restaurant MIS",
      description:
        "A restaurant management information system with table ordering, kitchen display, menu management, waiter app, daily sales reports, and M-Pesa payment integration. Built for single and multi-branch restaurants.",
      price: "KSH 189,900",
      image: restaurantMis,
      link: "#",
      features: ["Table & Order Management", "Kitchen Display", "Menu Control", "Sales Reports"],
      rating: 4.8,
    },
    {
      id: 4,
      title: "Chama MIS",
      description:
        "A group savings and investment management system tailored for Kenyan Chama groups. Manages member contributions, loans, dividends, meeting records, and financial statements with full transparency.",
      price: "KSH 149,900",
      image: chamaMis,
      link: "#",
      features: ["Contributions Tracking", "Loan Management", "Dividend Calculation", "Financial Reports"],
      rating: 4.8,
    },
    {
      id: 5,
      title: "StockEase MIS",
      description:
        "An inventory and stock management system for retail shops, wholesalers, and warehouses. Features real-time stock levels, purchase orders, supplier management, low-stock alerts, and detailed analytics.",
      price: "KSH 199,900",
      image: stockeaseMis,
      link: "#",
      features: ["Real-time Stock Tracking", "Purchase Orders", "Supplier Management", "Sales Analytics"],
      rating: 4.9,
    },
    {
      id: 6,
      title: "Airtime Vending System",
      description:
        "A multi-network airtime reselling and vending platform supporting Safaricom, Airtel, and Telkom. Includes agent management, float management, commission tracking, and M-Pesa bulk API integration.",
      price: "KSH 229,900",
      image: airtimeVending,
      link: "#",
      features: ["Multi-network Support", "Agent Management", "Float & Commission Tracking", "M-Pesa Integration"],
      rating: 4.7,
    },
    {
      id: 7,
      title: "Kenya Math Quest",
      description:
        "An interactive math learning and quiz platform designed for Kenyan CBC and 8-4-4 learners. Features gamified lessons, timed challenges, teacher dashboards, and progress reports for parents.",
      price: "KSH 99,900",
      image: kenyaMathQuest,
      link: "#",
      features: ["CBC & 8-4-4 Curriculum", "Gamified Quizzes", "Teacher Dashboard", "Parent Progress Reports"],
      rating: 4.7,
    },
  ];

  return (
    <div className="space-y-12">
      <Helmet>
        <title>Projects for Sale | CodeSolveAfrica</title>
        <meta name="description" content="Buy ready-made websites, apps and business systems from CodeSolveAfrica. Get a working product fast at an affordable price." />
        <link rel="canonical" href="https://codesolveafrica.co.ke/projects/for-sale" />
      </Helmet>
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          Projects for Sale
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
          Pre-built solutions that are ready to go. Choose from our collection of professional-grade systems and customize them to fit your business needs.
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
                src={imageErrors[project.id] ? fallbackImage : project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                onError={() => handleImageError(project.id)}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-0 right-0 m-3 bg-green-500 text-white text-xs font-semibold px-2 md:px-3 py-1 rounded-full">
                Available
              </div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 flex flex-col flex-grow">
              <div className="flex items-start justify-between mb-2 gap-2">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                <span className="text-sm md:text-base font-bold text-primary-600 whitespace-nowrap">{project.price}</span>
              </div>
              <p className="text-gray-600 text-xs md:text-sm mb-4">{project.description}</p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 md:w-4 md:h-4 ${
                        i < Math.floor(project.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs md:text-sm text-gray-600">({project.rating})</span>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-4 text-xs md:text-sm text-gray-700">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <ShoppingCart className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/254799656264?text=${encodeURIComponent(`Hi CodeSolveAfrica, I'm interested in purchasing the *${project.title}* (${project.price}). Could you please share more details and arrange a demo? Thank you.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white hover:!text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 mt-auto focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                <MessageCircle className="w-4 h-4" /> Buy on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Customization Section */}
      <div className="bg-gray-50 rounded-lg md:rounded-2xl p-6 md:p-12 space-y-6 border border-gray-200">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Customization Available
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            All projects can be customized to match your brand and specific requirements:
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {[
            "Brand & Colors",
            "Features & Modules",
            "Integrations",
            "Domain Setup",
            "Data Migration",
            "Training & Support",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-2 md:p-0 hover:bg-primary-50 rounded-lg transition-colors duration-200">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center font-bold text-xs md:text-sm flex-shrink-0">
                ✓
              </div>
              <span className="text-sm md:text-base text-gray-800">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg md:rounded-2xl p-6 md:p-12 space-y-6">
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Need Something Different?
          </h2>
          <p className="text-primary-100 text-sm md:text-base max-w-2xl">
            We can also build custom solutions from scratch tailored to your exact business needs and requirements.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Get in Touch
          </Link>
          <Link
            to="/track-project"
            className="inline-block border-2 border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Track Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsForSale;
