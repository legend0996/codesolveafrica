import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { API_URL } from "../config/api";

const Contact = () => {
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(`${API_URL}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientPhone,
          clientEmail,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setClientPhone("");
      setClientEmail("");
      setDescription("");
      setStatus("success");
      setTimeout(() => setStatus(""), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "contact@codesolveafrica.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Africa",
    },
  ];

  return (
    <div className="space-y-8 md:space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Get in Touch</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have a project in mind? We'd love to hear about it. Send us a message and let's start building something amazing together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          {contactInfo.map((info, idx) => (
            <div key={idx} className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl border border-gray-100 shadow-card">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {info.label}
                  </h3>
                  <p className="text-gray-600">{info.value}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Response Time */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border border-primary-200">
            <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
            <p className="text-gray-700 text-sm">
              We typically respond to inquiries within 24 hours during business days.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-card border border-gray-100 space-y-6">
            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Project Description <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Tell us about your project, requirements, timeline, and budget..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                ✓ Message sent successfully! We'll be in touch shortly.
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                ✗ Error sending message. Please try again or contact us directly.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "How much does a project cost?",
              a: "Pricing varies based on project complexity and requirements. We'll provide a quote after discussing your needs.",
            },
            {
              q: "How long does a project take?",
              a: "Timeline depends on scope. Simple projects take 2-4 weeks, while complex systems may take 2-3 months.",
            },
            {
              q: "Do you offer maintenance?",
              a: "Yes, we provide ongoing maintenance and support packages for all our projects.",
            },
            {
              q: "Can you customize existing projects?",
              a: "Absolutely! We can modify and enhance any of our pre-built solutions to match your needs.",
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-card"
            >
              <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
