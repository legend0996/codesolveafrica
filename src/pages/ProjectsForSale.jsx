import { Link } from "react-router-dom";
import { ShoppingCart, ExternalLink, Star } from "lucide-react";
import { useState } from "react";

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
        "Complete school management platform with student enrollment, attendance tracking, fee management, grading system, and parent portal. Perfect for educational institutions.",
      price: "KSH 299,900",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      link: "https://example.com/school-system",
      features: ["Student Management", "Attendance Tracking", "Fee Management", "Grading System"],
      rating: 4.9,
    },
    {
      id: 2,
      title: "Complete E-Commerce Store",
      description:
        "Ready-to-use e-commerce platform with product catalog, shopping cart, payment integration, and admin dashboard. Fully customizable.",
      price: "KSH 249,900",
      image: "https://images.unsplash.com/photo-1460925895917-adf4e5e5e2b9?w=500&h=300&fit=crop",
      link: "https://example.com/business-website",
      features: ["Product Management", "Payment Gateway", "Inventory System", "Admin Panel"],
      rating: 4.8,
    },
    {
      id: 3,
      title: "Retail POS & Inventory System",
      description:
        "Point of sale system for shops with real-time inventory tracking, sales analytics, and multi-user support.",
      price: "KSH 199,900",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=300&fit=crop",
      link: "https://example.com/pos-system",
      features: ["POS Terminal", "Inventory Tracking", "Sales Reports", "Receipt Printer Support"],
      rating: 4.9,
    },
    {
      id: 4,
      title: "Professional Portfolio Website",
      description:
        "Modern portfolio website for developers, designers, and freelancers. SEO optimized with contact forms and project showcase.",
      price: "KSH 79,900",
      image: "https://images.unsplash.com/photo-1555721519-a29a7e91c7d0?w=500&h=300&fit=crop",
      link: "https://example.com/portfolio-site",
      features: ["Responsive Design", "SEO Ready", "Contact Form", "Project Gallery"],
      rating: 4.7,
    },
    {
      id: 5,
      title: "Business Management Suite",
      description:
        "Comprehensive business management tool with CRM, project tracking, team collaboration, and reporting features.",
      price: "KSH 349,900",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      link: "https://example.com/business-suite",
      features: ["CRM Module", "Project Management", "Team Chat", "Advanced Reports"],
      rating: 4.9,
    },
    {
      id: 6,
      title: "Blog & Content Management",
      description:
        "Powerful blogging platform with content management, SEO optimization, social sharing, and email subscriptions.",
      price: "KSH 59,900",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop",
      link: "https://example.com/blog-cms",
      features: ["Article Publishing", "SEO Tools", "Email Newsletter", "Social Integration"],
      rating: 4.6,
    },
    {
      id: 7,
      title: "Service Booking Platform",
      description:
        "Online booking system for service providers. Includes appointment scheduling, payment processing, and client management.",
      price: "KSH 209,900",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=300&fit=crop",
      link: "https://example.com/booking",
      features: ["Calendar Booking", "Payment Processing", "Email Reminders", "Client Portal"],
      rating: 4.8,
    },
  ];

  return (
    <div className="space-y-12">
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
              <div className="absolute top-0 right-0 m-3 bg-primary-600 text-white px-3 py-1 rounded-lg font-bold">
                {project.price}
              </div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 flex flex-col flex-grow">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
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
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-primary-500 hover:bg-primary-600 text-white hover:!text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 mt-auto focus:outline-none focus:ring-2 focus:ring-primary-300"
              >
                View Demo <ExternalLink className="w-4 h-4" />
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
