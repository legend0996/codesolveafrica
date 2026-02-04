import { useState } from "react";
import { ShoppingCart, Check, AlertCircle } from "lucide-react";
import { API_URL } from "../config/api";

const OrderForm = ({ projectTitle, price, onSubmit }) => {
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    description: "",
    budget: price || "",
    timeline: "4-weeks",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          projectTitle,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to place order");
      }

      setMessage("success");
      setFormData({
        clientName: "",
        clientEmail: "",
        clientPhone: "",
        description: "",
        budget: price || "",
        timeline: "4-weeks",
      });

      if (onSubmit) onSubmit();
    } catch (error) {
      setMessage("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Client Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="clientName"
          value={formData.clientName}
          onChange={handleChange}
          required
          placeholder="Your full name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="clientEmail"
          value={formData.clientEmail}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="clientPhone"
          value={formData.clientPhone}
          onChange={handleChange}
          required
          placeholder="+1 (555) 123-4567"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {/* Project Description */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Project Requirements <span className="text-red-500">*</span>
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          placeholder="Tell us about your project needs..."
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
        />
      </div>

      {/* Budget */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Budget
        </label>
        <input
          type="text"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          placeholder="e.g., KSH 50,000"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {/* Timeline */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Preferred Timeline
        </label>
        <select
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="1-week">1 Week</option>
          <option value="2-weeks">2 Weeks</option>
          <option value="4-weeks">4 Weeks</option>
          <option value="8-weeks">8 Weeks</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>

      {/* Terms Checkbox */}
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            className="w-5 h-5 mt-0.5 text-primary-600 rounded focus:ring-2 focus:ring-primary-500"
          />
          <span className="text-sm text-gray-700">
            I agree to the{" "}
            <a href="/terms-and-conditions" className="font-semibold text-primary-600 hover:underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="/terms-and-conditions" className="font-semibold text-primary-600 hover:underline">
              Privacy Policy
            </a>
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <ShoppingCart className="w-5 h-5" />
        {loading ? "Processing..." : "Place Order"}
      </button>

      {/* Success Message */}
      {message === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-start gap-2">
          <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Order Placed Successfully!</p>
            <p className="text-sm">We'll contact you soon with next steps.</p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {message === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Error Placing Order</p>
            <p className="text-sm">Please try again or contact us directly.</p>
          </div>
        </div>
      )}
    </form>
  );
};

export default OrderForm;
