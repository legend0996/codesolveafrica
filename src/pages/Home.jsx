import { Link } from "react-router-dom";
import {
  Code,
  Smartphone,
  ShoppingCart,
  Cog,
  ArrowRight,
  Star,
  CheckCircle,
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Modern, responsive websites built with the latest technologies.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications.",
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce",
      description: "Complete e-commerce solutions for online businesses.",
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Business Systems",
      description: "Custom software tailored to your business needs.",
    },
  ];

  const features = [
    "Africa-focused expertise",
    "Team-based development",
    "Mobile-first approach",
    "Secure & scalable",
    "Affordable pricing",
    "Fast deployment",
  ];

  const testimonials = [
    {
      name: "John Okafor",
      role: "Business Owner",
      quote:
        "CodeSolveAfrica delivered exactly what we needed. Professional and reliable.",
      rating: 5,
    },
    {
      name: "Sarah Nakambi",
      role: "E-Commerce Manager",
      quote:
        "Our sales increased significantly after their platform implementation.",
      rating: 5,
    },
    {
      name: "Marcus Adeyemi",
      role: "Startup Founder",
      quote: "Great team, excellent communication, and outstanding results.",
      rating: 5,
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12 md:py-20">
        <div className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full font-semibold text-sm mb-4">
          Welcome to CodeSolveAfrica
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Solving Africa's Problems <span className="text-primary-500">with Code</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          We build modern websites, applications, and business systems that
          help African companies grow and thrive in the digital economy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link
            to="/projects/for-sale"
            className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white hover:!text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300"
            aria-label="View Projects"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-500 text-primary-500 px-8 py-3 rounded-lg font-semibold transition-all duration-200 bg-white hover:bg-primary-500 hover:!text-white hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-300"
            aria-label="Get Started"
          >
            Get Started
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-12 max-w-2xl mx-auto">
          {[
            { label: 'Projects Completed', value: '50+' },
            { label: 'Happy Clients', value: '30+' },
            { label: 'Years Experience', value: '5+' },
          ].map((stat, idx) => (
            <div key={stat.label} className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-primary-500">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What We Offer
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive solutions for all your digital needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center text-primary-500 mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl p-8 md:p-16 space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose CodeSolveAfrica?
          </h2>
          <p className="text-primary-100 text-lg">
            We combine technical excellence with deep understanding of African
            markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>

        <Link
          to="/contact"
          className="inline-block bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 mt-4"
        >
          Start Your Project Today
        </Link>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted by businesses across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 rounded-xl shadow-card border border-gray-100"
            >
              <div className="flex gap-1 mb-4" aria-label={`Rating: ${testimonial.rating} out of 5`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary-500 text-primary-500"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white rounded-2xl p-8 md:p-16 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Transform Your Business?
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Let's build something amazing together. Contact us today to discuss
          your project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white hover:!text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300"
            aria-label="Contact Us"
          >
            Contact Us
          </Link>
          <Link
            to="/projects/for-sale"
            className="inline-flex items-center justify-center gap-2 border-2 border-gray-400 hover:border-white text-white hover:!text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300"
            aria-label="View Projects"
          >
            View Projects
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
