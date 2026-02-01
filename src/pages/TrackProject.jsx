import { useState } from "react";

const TrackProject = () => {
  const [projectId, setProjectId] = useState("");
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("");

  const handleTrack = async (e) => {
    e.preventDefault();
    setStatus("Tracking...");

    try {
      const res = await fetch(`http://localhost:5000/api/track/${projectId}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Project not found");
      }

      setResult(data);
      setStatus("");
    } catch (error) {
      setResult(null);
      setStatus(error.message);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "15px" }}>
      <h2>Track Your Project</h2>

      <form onSubmit={handleTrack}>
        <input
          type="text"
          placeholder="Enter Project ID (e.g. CSA-XXXXX)"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value.toUpperCase())}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Track Project
        </button>
      </form>

      {status && <p>{status}</p>}

      {result && (
        <div style={styles.card}>
          <p>
            <strong>Project ID:</strong> {result.projectId}
          </p>
          <p>
            <strong>Type:</strong> {result.projectType}
          </p>
          <p>
            <strong>Status:</strong> {result.status}
          </p>

          <h4>Progress Updates</h4>

          {result.updates.length === 0 && <p>No updates yet.</p>}

          {result.updates.map((u, i) => (
            <p key={i}>
              • {u.message} ({new Date(u.createdAt).toLocaleDateString()})
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
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
  card: {
    marginTop: "20px",
    padding: "15px",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
  },
};

export default TrackProject;
