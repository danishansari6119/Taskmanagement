function Login({ setPage }) {
  return (
    <div className="form-container">
      <h2>Login</h2>

      <input type="email" placeholder="Enter email" />
      <input type="password" placeholder="Enter password" />

      <button onClick={() => setPage("dashboard")}>Login</button>

      <p>
        New user? <span onClick={() => setPage("signup")}>Create Account</span>
      </p>
    </div>
  );
}

export default Login;
