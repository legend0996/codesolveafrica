import { Link, useNavigate } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/admin/login");
  };

  return (
    <div style={styles.wrapper}>
      {/* SIDEBAR */}
      <aside style={styles.sidebar}>
        <h3 style={styles.logo}>CodeSolveAfrica</h3>

        <nav style={styles.nav}>
          <Link to="/admin/super" style={styles.link}>
            Dashboard
          </Link>

          <Link to="/admin/orders" style={styles.link}>
            Orders
          </Link>

          <Link to="/admin/super" style={styles.link}>
            Settings
          </Link>

          <button onClick={logout} style={styles.logout}>
            Logout
          </button>
        </nav>
      </aside>

      {/* CONTENT */}
      <main style={styles.content}>{children}</main>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    background: "#f8fafc",
  },
  sidebar: {
    width: "220px",
    background: "#0f172a",
    color: "white",
    padding: "20px",
  },
  logo: {
    marginBottom: "30px",
    color: "#22c55e",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    padding: "8px",
    borderRadius: "4px",
  },
  logout: {
    marginTop: "20px",
    padding: "10px",
    background: "#dc2626",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
  content: {
    flex: 1,
    padding: "20px",
  },
};

export default AdminLayout;
