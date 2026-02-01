import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.top}>
        <h3 style={styles.logo}>CodeSolveAfrica</h3>

        <button onClick={() => setOpen(!open)} style={styles.menuBtn}>
          ☰
        </button>
      </div>

      {open && (
        <div style={styles.links}>
          <Link onClick={() => setOpen(false)} to="/" style={styles.link}>
            Home
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/projects/completed"
            style={styles.link}
          >
            Completed
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/projects/for-sale"
            style={styles.link}
          >
            For Sale
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/track-project"
            style={styles.link}
          >
            Track
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/payments"
            style={styles.link}
          >
            Pay
          </Link>
        </div>
      )}
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#0f172a",
    padding: "12px 15px",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "#22c55e",
    margin: 0,
    fontSize: "18px",
  },
  menuBtn: {
    fontSize: "22px",
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "10px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "15px",
  },
};

export default Navbar;
