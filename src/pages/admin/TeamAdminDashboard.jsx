const TeamAdminDashboard = () => {
  return (
    <div style={styles.container}>
      <h2>Team Dashboard</h2>
      <p style={styles.subtitle}>
        Your assigned projects and account settings.
      </p>

      {/* ASSIGNED PROJECTS */}
      <div style={styles.section}>
        <h3>Your Projects</h3>

        <div style={styles.box}>
          <p>
            <strong>Project:</strong> Retail POS System
          </p>
          <p>
            <strong>Your Role:</strong> Backend Developer
          </p>
          <p>
            <strong>Status:</strong> In Progress
          </p>
        </div>
      </div>

      {/* SECURITY */}
      <div style={styles.section}>
        <h3>Account Security</h3>

        <input style={styles.input} placeholder="New Email" />
        <input
          style={styles.input}
          type="password"
          placeholder="New Password"
        />
        <button style={styles.button}>Update Account</button>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "15px" },
  subtitle: { color: "#64748b", marginBottom: "20px" },

  section: { marginTop: "25px" },

  box: {
    border: "1px solid #e5e7eb",
    padding: "12px",
    borderRadius: "6px",
    background: "#fff",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #cbd5e1",
  },

  button: {
    padding: "10px",
    background: "#0f172a",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default TeamAdminDashboard;
