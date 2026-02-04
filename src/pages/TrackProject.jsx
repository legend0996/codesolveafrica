import { useState } from "react";
import { Search, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { API_URL } from "../config/api";

const TrackProject = () => {
  const [projectId, setProjectId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(`${API_URL}/track/${projectId}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Project not found");
      }

      setResult(data);
    } catch (err) {
      setError(err.message || "Failed to track project. Please check the Project ID and try again.");
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case "in progress":
        return <Clock className="w-6 h-6 text-blue-500" />;
      default:
        return <AlertCircle className="w-6 h-6 text-yellow-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return "bg-green-50 border-green-200 text-green-800";
      case "in progress":
        return "bg-blue-50 border-blue-200 text-blue-800";
      default:
        return "bg-yellow-50 border-yellow-200 text-yellow-800";
    }
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Track Your Project
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Enter your project ID to check the status of your project, view deliverables, and communicate with our team.
        </p>
      </div>

      {/* Search Section */}
      <div className="max-w-2xl mx-auto w-full">
        <form onSubmit={handleTrack} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Project ID (e.g., CSA-00001)"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value.toUpperCase())}
              required
              className="w-full px-4 py-4 pr-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 text-lg"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 text-white p-2 rounded-lg transition-colors"
            >
              <Search className="w-6 h-6" />
            </button>
          </div>
          <p className="text-sm text-gray-600">
            You received your Project ID in the confirmation email when you placed your order.
          </p>
        </form>
      </div>

      {/* Error Message */}
      {error && (
        <div className="max-w-2xl mx-auto w-full bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg">
          <p className="font-semibold mb-1">Project Not Found</p>
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="max-w-2xl mx-auto w-full text-center">
          <div className="inline-block">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-primary-500 rounded-full animate-spin"></div>
          </div>
          <p className="mt-4 text-gray-600">Tracking your project...</p>
        </div>
      )}

      {/* Project Details */}
      {result && (
        <div className="max-w-2xl mx-auto w-full space-y-6">
          {/* Main Card */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-card">
            {/* Header */}
            <div className="flex items-start justify-between mb-6 pb-6 border-b border-gray-200">
              <div>
                <p className="text-sm text-gray-600 mb-1">Project ID</p>
                <h2 className="text-2xl font-bold text-gray-900">{result.id}</h2>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 mb-2">
                  {getStatusIcon(result.status)}
                  <span className="font-semibold text-gray-900">{result.status}</span>
                </div>
                <span
                  className={`text-sm px-3 py-1 rounded-full border ${getStatusColor(
                    result.status
                  )}`}
                >
                  {result.status}
                </span>
              </div>
            </div>

            {/* Project Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Project Title</p>
                <p className="text-lg font-semibold text-gray-900">
                  {result.title || "N/A"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Expected Completion</p>
                <p className="text-lg font-semibold text-gray-900">
                  {result.expectedCompletion
                    ? new Date(result.expectedCompletion).toLocaleDateString()
                    : "TBD"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Team Lead</p>
                <p className="text-lg font-semibold text-gray-900">
                  {result.teamLead || "To be assigned"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Progress</p>
                <div className="flex items-center gap-3">
                  <div className="flex-grow bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${result.progress || 0}%` }}
                    ></div>
                  </div>
                  <span className="font-semibold text-gray-900 w-12 text-right">
                    {result.progress || 0}%
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            {result.description && (
              <div className="mb-6 pb-6 border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-600 mb-2">Description</p>
                <p className="text-gray-700">{result.description}</p>
              </div>
            )}

            {/* Milestones */}
            {result.milestones && result.milestones.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Milestones</h3>
                <div className="space-y-3">
                  {result.milestones.map((milestone, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="mt-1">
                        {milestone.completed ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <p
                          className={`font-semibold ${
                            milestone.completed
                              ? "text-green-700 line-through"
                              : "text-gray-900"
                          }`}
                        >
                          {milestone.name}
                        </p>
                        {milestone.dueDate && (
                          <p className="text-sm text-gray-600">
                            Due: {new Date(milestone.dueDate).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Have Questions?</h3>
            <p className="text-gray-700 mb-4">
              We're here to help! If you have any questions about your project, feel free to reach out to us.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Info Cards */}
      {!result && !loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "📧",
              title: "Project ID Sent",
              description: "Check your email for the project ID sent after confirmation.",
            },
            {
              icon: "📊",
              title: "Real-time Updates",
              description:
                "Track progress with live updates on milestones and deliverables.",
            },
            {
              icon: "💬",
              title: "Direct Communication",
              description:
                "Connect with your project team through our tracking dashboard.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-card text-center"
            >
              <div className="text-4xl mb-3">{card.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrackProject;
