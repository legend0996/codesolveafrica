import { useEffect, useState } from "react";
import { Package, Phone, Tag, Clock, CheckCircle, AlertCircle, Send, Loader } from "lucide-react";
import { API_URL } from "../../config/api";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateText, setUpdateText] = useState({});
  const [statusText, setStatusText] = useState({});
  const [submitting, setSubmitting] = useState({});
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/orders`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to load orders", error);
      setMessage({ type: "error", text: "Failed to load orders" });
    } finally {
      setLoading(false);
    }
  };

  const submitUpdate = async (projectId) => {
    setSubmitting((prev) => ({ ...prev, [projectId]: true }));
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `${API_URL}/track/${projectId}/update`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            message: updateText[projectId],
            status: statusText[projectId],
          }),
        },
      );

      if (!res.ok) throw new Error("Failed to add update");

      setUpdateText((prev) => ({ ...prev, [projectId]: "" }));
      setStatusText((prev) => ({ ...prev, [projectId]: "" }));
      setMessage({ type: "success", text: "Update added successfully!" });
      fetchOrders();
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    } catch (error) {
      console.error(error);
      setMessage({ type: "error", text: "Failed to add update" });
    } finally {
      setSubmitting((prev) => ({ ...prev, [projectId]: false }));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700 border-green-300";
      case "in_progress":
        return "bg-blue-100 text-blue-700 border-blue-300";
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      case "in_progress":
        return <Clock className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-2 mb-8">
          <div className="flex items-center gap-3">
            <Package className="w-8 h-8 text-primary-500" />
            <h1 className="text-4xl font-bold text-gray-900">Manage Orders</h1>
          </div>
          <p className="text-gray-600 text-lg">View and update project orders</p>
        </div>

        {/* Global Messages */}
        {message.text && (
          <div
            className={`mb-6 p-4 rounded-lg border flex items-center gap-3 ${
              message.type === "success"
                ? "bg-green-50 border-green-200"
                : "bg-red-50 border-red-200"
            }`}
          >
            {message.type === "success" ? (
              <CheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600" />
            )}
            <p
              className={`font-medium ${
                message.type === "success" ? "text-green-700" : "text-red-700"
              }`}
            >
              {message.text}
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="bg-white p-12 rounded-xl border border-gray-200 text-center">
            <div className="animate-spin inline-block">
              <Loader className="w-8 h-8 text-primary-500" />
            </div>
            <p className="text-gray-600 mt-4">Loading orders...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && orders.length === 0 && (
          <div className="bg-white p-12 rounded-xl border border-gray-200 text-center">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No orders yet</p>
          </div>
        )}

        {/* Orders List */}
        {!loading && orders.length > 0 && (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-6 border-b border-primary-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-primary-600 uppercase mb-1">Project ID</p>
                      <p className="text-lg font-bold text-gray-900 font-mono">{order.projectId}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary-600 uppercase mb-1 flex items-center gap-1">
                        <Phone className="w-3 h-3" /> Phone
                      </p>
                      <p className="text-lg font-bold text-gray-900">{order.clientPhone}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary-600 uppercase mb-1 flex items-center gap-1">
                        <Tag className="w-3 h-3" /> Type
                      </p>
                      <p className="text-lg font-bold text-gray-900 capitalize">{order.projectType}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary-600 uppercase mb-1">Current Status</p>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg border ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span className="font-semibold capitalize text-sm">{order.status.replace("_", " ")}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="p-6 space-y-4">
                  {/* Status Selector */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Update Status
                    </label>
                    <select
                      value={statusText[order.projectId] || ""}
                      onChange={(e) =>
                        setStatusText((prev) => ({
                          ...prev,
                          [order.projectId]: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors bg-white font-medium"
                    >
                      <option value="">Select new status...</option>
                      <option value="pending">Pending</option>
                      <option value="in_progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>

                  {/* Update Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Progress Update Message
                    </label>
                    <textarea
                      placeholder="Write a progress update for the client..."
                      value={updateText[order.projectId] || ""}
                      onChange={(e) =>
                        setUpdateText((prev) => ({
                          ...prev,
                          [order.projectId]: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors resize-none h-24 font-medium"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={() => submitUpdate(order.projectId)}
                    disabled={!updateText[order.projectId] || submitting[order.projectId]}
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    {submitting[order.projectId] ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        Sending Update...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Add Update
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;
