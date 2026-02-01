import { useEffect, useState } from "react";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateText, setUpdateText] = useState({});
  const [statusText, setStatusText] = useState({});

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to load orders", error);
    } finally {
      setLoading(false);
    }
  };

  const submitUpdate = async (projectId) => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `http://localhost:5000/api/track/${projectId}/update`,
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

      if (!res.ok) {
        throw new Error("Failed to add update");
      }

      setUpdateText((prev) => ({ ...prev, [projectId]: "" }));
      fetchOrders();

      alert("Update added successfully ✅");
    } catch (error) {
      console.error(error);
      alert("Failed to add update ❌");
    }
  };

  if (loading) return <p>Loading orders...</p>;

  return (
    <div style={{ maxWidth: "1000px", margin: "auto", padding: "15px" }}>
      <h2>Admin Orders</h2>

      {orders.length === 0 && <p>No orders yet.</p>}

      {orders.map((order) => (
        <div key={order._id} style={styles.card}>
          <p>
            <strong>Project ID:</strong> {order.projectId}
          </p>
          <p>
            <strong>Phone:</strong> {order.clientPhone}
          </p>
          <p>
            <strong>Type:</strong> {order.projectType}
          </p>
          <p>
            <strong>Status:</strong> {order.status}
          </p>

          <select
            value={statusText[order.projectId] || ""}
            onChange={(e) =>
              setStatusText((prev) => ({
                ...prev,
                [order.projectId]: e.target.value,
              }))
            }
            style={styles.input}
          >
            <option value="">Change status</option>
            <option value="pending">Pending</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>

          <textarea
            placeholder="Add progress update"
            value={updateText[order.projectId] || ""}
            onChange={(e) =>
              setUpdateText((prev) => ({
                ...prev,
                [order.projectId]: e.target.value,
              }))
            }
            style={styles.textarea}
          />

          <button
            onClick={() => submitUpdate(order.projectId)}
            style={styles.button}
            disabled={!updateText[order.projectId]}
          >
            Add Update
          </button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #e5e7eb",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "20px",
    background: "#fff",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
  },
  textarea: {
    width: "100%",
    height: "70px",
    padding: "8px",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#0f172a",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default AdminOrders;
