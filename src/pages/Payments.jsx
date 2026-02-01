const Payments = () => {
  return (
    <div>
      <h2>Payments</h2>

      <p>
        All payments to CodeSolveAfrica must be made using the official M-PESA
        Till Number below.
      </p>

      <h3>Official Till Number</h3>
      <p style={{ fontWeight: "bold", fontSize: "18px" }}>
        Till Number: coming soon
      </p>

      <h3>How to Pay</h3>
      <ol>
        <li>Go to M-PESA</li>
        <li>Select Lipa na M-PESA</li>
        <li>Select Buy Goods</li>
        <li>
          Enter Till Number <strong>.....</strong>
        </li>
        <li>Enter the exact amount</li>
        <li>Confirm payment</li>
      </ol>

      <p style={{ marginTop: "15px", color: "red" }}>
        ⚠️ We are NOT responsible for payments made outside our official till
        number.
      </p>
    </div>
  );
};

export default Payments;
