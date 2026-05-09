function Signup({ setPage }) {
  return (
    <div className="form-container">
      <h2>Signup</h2>

      <input type="text" placeholder="Enter username" />
      <input type="email" placeholder="Enter email" />
      <input type="password" placeholder="Enter password" />

      <button onClick={() => setPage("login")}>Signup</button>

      <p>
        Already have account?{" "}
        <span onClick={() => setPage("login")}>Login</span>
      </p>
    </div>
  );
}

export default Signup;
