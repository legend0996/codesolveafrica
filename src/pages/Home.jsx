const Home = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Solving Africa’s Problems with Code</h1>

        <p style={styles.subtitle}>
          CodeSolveAfrica is a team of developers building websites, apps, and
          systems that help African businesses grow.
        </p>

        <div style={styles.buttons}>
          <a href="/projects/for-sale" style={styles.primaryBtn}>
            View Projects for Sale
          </a>

          <a href="/track-project" style={styles.secondaryBtn}>
            Track Your Project
          </a>
        </div>
      </section>

      {/* What We Do */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What We Do</h2>

        <ul style={styles.list}>
          <li>✅ Business Websites</li>
          <li>✅ Mobile & Web Apps</li>
          <li>✅ POS & Management Systems</li>
          <li>✅ Custom Software Solutions</li>
        </ul>
      </section>

      {/* Trust Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why CodeSolveAfrica?</h2>

        <ul style={styles.list}>
          <li>🌍 Africa-focused solutions</li>
          <li>👥 Team-based development</li>
          <li>📱 Mobile-first & responsive</li>
          <li>🔒 Secure & reliable systems</li>
        </ul>
      </section>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },

  hero: {
    textAlign: "center",
    padding: "40px 10px",
  },

  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "15px",
  },

  subtitle: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "25px",
  },

  buttons: {
    display: "flex",
    flexDirection: "column", // 📱 mobile first
    gap: "12px",
    alignItems: "center",
  },

  primaryBtn: {
    backgroundColor: "#22c55e",
    color: "white",
    padding: "12px 20px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  },

  secondaryBtn: {
    border: "2px solid #22c55e",
    color: "#22c55e",
    padding: "12px 20px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  },

  section: {
    padding: "0 10px",
  },

  sectionTitle: {
    fontSize: "22px",
    marginBottom: "10px",
  },

  list: {
    paddingLeft: "20px",
    lineHeight: "1.8",
  },
};

export default Home;
