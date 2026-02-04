import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import { MessageSquare, ShoppingCart, Lock, CheckCircle, AlertCircle, Mail, Phone, Calendar } from "lucide-react";

const SuperAdminDashboard = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${API_URL}/messages`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setMessages(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch messages", error);
        setMessages([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  const handleUpdateAccount = async (e) => {
    e.preventDefault();
    setStatus("Updating password...");
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/auth/change-password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ newPassword: password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Update failed");
      setPassword("");
      setStatus("Password updated successfully!");
      setTimeout(() => {
        setStatus("");
        setShowPasswordForm(false);
      }, 2000);
    } catch (error) {
      setStatus(error.message || "Error updating password");
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Super Admin Dashboard</h1>
          <p className="text-gray-600 text-lg">Manage your platform and client communications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border border-primary-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-600 text-sm font-semibold mb-1">Total Messages</p>
                <p className="text-4xl font-bold text-primary-700">{messages.length}</p>
              </div>
              <MessageSquare className="w-12 h-12 text-primary-300" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-semibold mb-1">Management</p>
                <button
                  onClick={() => navigate("/admin/orders")}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors mt-1"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Manage Orders
                </button>
              </div>
              <ShoppingCart className="w-12 h-12 text-blue-300" />
            </div>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-primary-500" />
            Client Messages
          </h2>

          {loading && (
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              </div>
            </div>
          )}

          {!loading && messages.length === 0 && (
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-600 text-lg">No messages yet</p>
            </div>
          )}

          {!loading && messages.length > 0 && (
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg._id} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {msg.clientPhone && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary-500" />
                        <div>
                          <p className="text-xs text-gray-500 font-semibold">PHONE</p>
                          <p className="text-gray-900 font-medium">{msg.clientPhone}</p>
                        </div>
                      </div>
                    )}
                    {msg.clientEmail && (
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary-500" />
                        <div>
                          <p className="text-xs text-gray-500 font-semibold">EMAIL</p>
                          <p className="text-gray-900 font-medium">{msg.clientEmail}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-200">
                    <p className="text-xs text-gray-500 font-semibold mb-2">MESSAGE</p>
                    <p className="text-gray-700 leading-relaxed">{msg.description}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {new Date(msg.createdAt).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="space-y-4 pb-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Lock className="w-6 h-6 text-primary-500" />
            Account Settings
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
              <form onSubmit={handleUpdateAccount} className="space-y-4">
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
                  <div className={`flex items-center gap-2 p-3 rounded-lg ${status.includes("successfully") ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
                    {status.includes("successfully") ? (
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    )}
                    <p className={`text-sm font-medium ${status.includes("successfully") ? "text-green-700" : "text-red-700"}`}>
                      {status}
                    </p>
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
    </AdminLayout>
  );
};

export default SuperAdminDashboard;
