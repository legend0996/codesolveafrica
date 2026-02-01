import { useState } from "react";

const Contact = () => {
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientPhone,
          clientEmail,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setClientPhone("");
      setClientEmail("");
      setDescription("");
      setStatus("Message sent successfully ✅");
    } catch {
      setStatus("Error sending message ❌");
    }
  };

  return (
    <div style={{ maxWidth: "420px", margin: "auto" }}>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Phone number (required)"
          value={clientPhone}
          onChange={(e) => setClientPhone(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Email (optional)"
          value={clientEmail}
          onChange={(e) => setClientEmail(e.target.value)}
          style={styles.input}
        />

        <textarea
          placeholder="Describe what you need"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
};

const styles = {
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    height: "100px",
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

export default Contact;
