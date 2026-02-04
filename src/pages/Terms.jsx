import { AlertCircle } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      title: "1. Project Attribution",
      content: [
        "All projects developed by CodeSolveAfrica may include a footer or attribution stating 'Made by CodeSolveAfrica'. This attribution may contain a link to our website.",
        "Completed projects may be showcased on our Completed Projects page. Visitors may access your project through this link unless otherwise agreed in writing.",
      ],
    },
    {
      title: "2. Ownership & Source Code",
      content: [
        "Full ownership of the project and source code is transferred to the client only after full payment has been completed.",
        "Until payment is completed, all code and system logic remain the property of CodeSolveAfrica.",
      ],
    },
    {
      title: "3. Payments & Deposits",
      content: [
        "A deposit of the agreed amount must be paid before any project development begins.",
        "All payments must be made through our official payment channels only. We are not responsible for payments made outside our official till number.",
      ],
    },
    {
      title: "4. Refund Policy",
      content: [
        "Refunds are allowed only within 12 hours from the time a project is ordered.",
        "After 12 hours, no refunds will be issued once work has started or resources have been allocated.",
      ],
    },
    {
      title: "5. Project Revisions & Changes",
      content: [
        "Free changes and minor revisions are offered within 7 days after project completion.",
        "Any updates or changes requested after this period will require additional payment unless the project is part of a system that CodeSolveAfrica maintains with free updates.",
      ],
    },
    {
      title: "6. Maintenance & Updates",
      content: [
        "Some systems may receive free updates as determined by CodeSolveAfrica.",
        "Other updates, feature additions, or modifications will be charged separately.",
      ],
    },
    {
      title: "7. Client Responsibilities",
      content: [
        "Clients must provide accurate information, requirements, and contact details.",
        "Delays caused by missing or incorrect information may affect delivery timelines.",
      ],
    },
    {
      title: "8. Project Timelines",
      content: [
        "Project timelines are estimates and depend on project scope, complexity, and client cooperation.",
      ],
    },
    {
      title: "9. Limitation of Liability",
      content: [
        "CodeSolveAfrica is not responsible for business losses, data loss, or damages resulting from the use or misuse of delivered systems.",
      ],
    },
    {
      title: "10. Unauthorized Use",
      content: [
        "Unauthorized access, duplication, resale, or modification of our systems before ownership transfer is strictly prohibited.",
      ],
    },
    {
      title: "11. Data & Privacy",
      content: [
        "We protect your personal information and comply with applicable privacy regulations.",
        "Your data is never shared with third parties without your consent.",
      ],
    },
    {
      title: "12. Changes to These Terms",
      content: [
        "CodeSolveAfrica reserves the right to update or modify these terms at any time.",
        "Continued use of our services indicates acceptance of the updated terms.",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Terms & Conditions
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Welcome to CodeSolveAfrica. By using our services or purchasing any project, you agree to the terms and conditions outlined below.
        </p>
      </div>

      {/* Important Notice */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg space-y-3">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-yellow-900 mb-2">
              Please Read Carefully
            </p>
            <p className="text-yellow-800">
              These terms are legally binding. If you do not agree with any part of these terms, please do not use our services or purchase our projects.
            </p>
          </div>
        </div>
      </div>

      {/* Terms Sections */}
      <div className="space-y-6">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-xl border border-gray-200 shadow-card hover:shadow-hover transition-all"
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              {section.title}
            </h2>
            <div className="space-y-3">
              {section.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Key Points Summary */}
      <div className="bg-gradient-to-r from-primary-50 to-primary-100 border-2 border-primary-200 rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Key Points Summary</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: "💰", title: "Full Payment Required", desc: "For full project ownership" },
            { icon: "⏰", title: "12-Hour Refund Window", desc: "From the time of ordering" },
            { icon: "📝", title: "7-Day Revision Period", desc: "Free changes after completion" },
            { icon: "🔒", title: "Ownership Transfer", desc: "Only after payment complete" },
            { icon: "🚫", title: "No Unauthorized Use", desc: "Before ownership transfer" },
            { icon: "📧", title: "Official Payments Only", desc: "Through our channels" },
          ].map((point, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg">
              <div className="text-2xl mb-2">{point.icon}</div>
              <p className="font-semibold text-gray-900 text-sm">{point.title}</p>
              <p className="text-gray-600 text-xs">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 text-white rounded-xl p-8 md:p-12 text-center space-y-4">
        <h2 className="text-2xl font-bold">Questions About Our Terms?</h2>
        <p className="text-gray-300">
          If you have any questions or concerns about our terms and conditions, please don't hesitate to contact us.
        </p>
        <a
          href="mailto:contact@codesolveafrica.com"
          className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Contact Us
        </a>
      </div>

      {/* Last Updated */}
      <div className="text-center text-gray-600 py-8 border-t border-gray-200">
        <p>Last Updated: February 2026</p>
      </div>
    </div>
  );
};

export default Terms;
