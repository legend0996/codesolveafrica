import { CreditCard, AlertCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Payments = () => {
  const paymentMethods = [
    {
      name: "M-PESA",
      description: "Mobile money payment (Kenya)",
      icon: "📱",
      steps: [
        "Go to M-PESA",
        "Select Lipa na M-PESA",
        "Select Buy Goods",
        "Enter Till Number",
        "Enter the exact amount",
        "Confirm payment",
      ],
    },
    {
      name: "Bank Transfer",
      description: "Direct bank transfer",
      icon: "🏦",
      steps: ["Contact us for bank details", "Provide transaction proof", "Project commences after verification"],
    },
    {
      name: "Credit/Debit Card",
      description: "International card payments",
      icon: "💳",
      steps: ["Select pay with card", "Enter card details", "Complete verification", "Payment confirmed"],
    },
  ];

  return (
    <div className="space-y-8 md:space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Payment Methods</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We offer multiple secure payment methods to make it convenient for you to get started.
        </p>
      </div>

      {/* Official Till Number */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl p-8 md:p-12 text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">Official M-PESA Till Number</h2>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 inline-block">
          <p className="text-sm text-primary-100 mb-2">Till Number</p>
          <p className="text-3xl md:text-4xl font-bold font-mono">Coming Soon</p>
        </div>
        <p className="text-primary-100">We will update this with our active till number shortly</p>
      </div>

      {/* Payment Methods */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Accepted Payment Methods</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paymentMethods.map((method, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-card border border-gray-100"
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {method.name}
              </h3>
              <p className="text-gray-600 text-sm mb-6">{method.description}</p>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 text-sm">Steps:</h4>
                <ol className="space-y-2">
                  {method.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="bg-primary-100 text-primary-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 space-y-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-red-900 text-lg mb-2">Important Notice</h3>
            <ul className="space-y-2 text-red-800">
              <li>• We are NOT responsible for payments made outside our official till number</li>
              <li>• Always verify payment details with us before making a transfer</li>
              <li>• Keep proof of payment for your records</li>
              <li>• For large transactions, contact us for bank transfer options</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Process */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Payment Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              num: 1,
              title: "Quote Agreement",
              desc: "Agree on project scope and pricing",
            },
            {
              num: 2,
              title: "Deposit Payment",
              desc: "Pay agreed deposit to start work",
            },
            {
              num: 3,
              title: "Development",
              desc: "Our team builds your project",
            },
            {
              num: 4,
              title: "Final Payment",
              desc: "Pay balance & receive project",
            },
          ].map((step, idx) => (
            <div key={idx} className="relative">
              <div className="bg-white p-6 rounded-xl border-2 border-primary-200 text-center space-y-3">
                <div className="bg-primary-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mx-auto">
                  {step.num}
                </div>
                <h3 className="font-semibold text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
              {idx < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                  <div className="text-2xl text-primary-300">→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Payment FAQ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "Is my payment secure?",
              a: "Yes, all payments are processed through secure, encrypted payment gateways.",
            },
            {
              q: "When will my project start?",
              a: "Projects begin immediately after deposit confirmation, usually within 24 hours.",
            },
            {
              q: "Can I get an invoice?",
              a: "Yes, we provide detailed invoices for all payments upon request.",
            },
            {
              q: "What happens if payment fails?",
              a: "Please retry or contact us immediately. We'll help resolve any payment issues.",
            },
            {
              q: "Do you offer payment plans?",
              a: "For large projects, we can arrange payment in installments. Contact us to discuss.",
            },
            {
              q: "What's your refund policy?",
              a: "Refunds are allowed within 12 hours of ordering, before work begins.",
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-card"
            >
              <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                {faq.q}
              </h3>
              <p className="text-gray-600 text-sm ml-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Ready to Get Started?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Have questions about payments or need help choosing the right project? Let's talk!
        </p>
        <Link
          to="/contact"
          className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Payments;
