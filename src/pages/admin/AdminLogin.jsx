import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Logging in...");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save auth data
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("email", data.email);

      // Redirect by role
      if (data.role === "super_admin") {
        navigate("/admin/super");
      } else {
        navigate("/admin/team");
      }
    } catch (err) {
      setStatus(err.message || "Login error");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Admin Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        {status && <p style={styles.status}>{status}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px",
    background: "#f8fafc",
  },
  card: {
    width: "100%",
    maxWidth: "380px",
    background: "white",
    padding: "25px",
    borderRadius: "8px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
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
  status: {
    marginTop: "10px",
  },
};

export default AdminLogin;
