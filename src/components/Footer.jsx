import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.brand}>© {new Date().getFullYear()} CodeSolveAfrica</p>

      <div style={styles.links}>
        <Link to="/terms-and-conditions" style={styles.link}>
          Terms & Conditions
        </Link>
        <Link to="/payments" style={styles.link}>
          Payments
        </Link>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: "40px",
    padding: "16px",
    backgroundColor: "#0f172a",
    color: "white",
    display: "flex",
    flexDirection: "column", // 📱 mobile-first
    gap: "10px",
    alignItems: "center",
  },
  brand: {
    fontSize: "13px",
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "16px",
  },
  link: {
    color: "#22c55e",
    textDecoration: "none",
    fontSize: "13px",
  },
};

export default Footer;
