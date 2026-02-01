import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";

const SuperAdminDashboard = () => {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Account settings
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  // Fetch client messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://localhost:5000/api/messages", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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

  // Change password
  const handleUpdateAccount = async (e) => {
    e.preventDefault();
    setStatus("Updating password...");

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        "http://localhost:5000/api/auth/change-password",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ newPassword: password }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Update failed");
      }

      setPassword("");
      setStatus("Password updated successfully ✅");
    } catch (error) {
      setStatus(error.message || "Error updating password ❌");
    }
  };

  return (
    <AdminLayout>
      <div style={{ maxWidth: "900px" }}>
        <h2>Super Admin Dashboard</h2>

        {/* QUICK ACTION */}
        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={() => navigate("/admin/orders")}
            style={{
              padding: "10px 15px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Manage Orders
          </button>
        </div>

        {/* ================= MESSAGES ================= */}
        <section style={styles.section}>
          <h3>Client Messages</h3>

          {loading && <p>Loading messages...</p>}

          {!loading && messages.length === 0 && <p>No messages yet.</p>}

          {!loading &&
            messages.map((msg) => (
              <div key={msg._id} style={styles.card}>
                <p>
                  <strong>Phone:</strong> {msg.clientPhone}
                </p>

                {msg.clientEmail && (
                  <p>
                    <strong>Email:</strong> {msg.clientEmail}
                  </p>
                )}

                <p>
                  <strong>Message:</strong> {msg.description}
                </p>

                <p style={styles.date}>
                  {new Date(msg.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
        </section>

        {/* ================= SETTINGS ================= */}
        <section style={styles.section}>
          <h3>Account Settings</h3>

          <form onSubmit={handleUpdateAccount} style={styles.form}>
            <input
              type="password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />

            <button type="submit" style={styles.button}>
              Update Password
            </button>
          </form>

          {status && <p>{status}</p>}
        </section>
      </div>
    </AdminLayout>
  );
};

const styles = {
  section: {
    marginTop: "30px",
  },
  card: {
    border: "1px solid #e5e7eb",
    padding: "12px",
    borderRadius: "6px",
    marginBottom: "12px",
    backgroundColor: "#fff",
  },
  date: {
    fontSize: "12px",
    color: "#64748b",
    marginTop: "6px",
  },
  form: {
    maxWidth: "400px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#0f172a",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default SuperAdminDashboard;
