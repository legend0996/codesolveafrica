import { Briefcase, Lock, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

const TeamAdminDashboard = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const projects = [
    {
      id: 1,
      name: "Retail POS System",
      role: "Backend Developer",
      status: "In Progress",
      progress: 65,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      name: "E-Commerce Platform",
      role: "Full Stack Developer",
      status: "In Progress",
      progress: 45,
      color: "from-primary-500 to-primary-600",
    },
    {
      id: 3,
      name: "Mobile App",
      role: "Frontend Developer",
      status: "Planning",
      progress: 20,
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Team Dashboard</h1>
          <p className="text-gray-600 text-lg">Your assigned projects and account settings.</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-primary-500" />
            Your Assigned Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-200"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{project.name}</h3>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <Briefcase className="w-3 h-3" />
                      {project.role}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.status === "In Progress" ? (
                      <>
                        <Clock className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded">
                          {project.status}
                        </span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {project.status}
                        </span>
                      </>
                    )}
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-xs font-semibold text-gray-600 uppercase">Progress</p>
                      <p className="text-sm font-bold text-gray-900">{project.progress}%</p>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${project.color} transition-all`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Lock className="w-6 h-6 text-primary-500" />
            Account Security
          </h2>

          {!showPasswordForm ? (
            <button
              onClick={() => setShowPasswordForm(true)}
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <Lock className="w-4 h-4" />
              Change Password
            </button>
          ) : (
            <div className="bg-white p-6 rounded-xl border border-gray-200 max-w-md space-y-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setStatus("Password would be updated (demo mode)");
                  setTimeout(() => {
                    setPassword("");
                    setStatus("");
                    setShowPasswordForm(false);
                  }, 2000);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                  />
                </div>

                {status && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-green-50 border border-green-200">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <p className="text-sm font-medium text-green-700">{status}</p>
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    Update Password
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowPasswordForm(false);
                      setPassword("");
                      setStatus("");
                    }}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default TeamAdminDashboard;
