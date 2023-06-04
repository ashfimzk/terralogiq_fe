import { useRef } from "react";

function Login(props) {
  const username = useRef();
  const password = useRef();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: "50px",
          width: "400px",
          padding: "20px",
          backgroundColor: "#f5f5f5",
          border: "1px solid #ccc",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "400px",
          borderRadius:'40px'
        }}
      >
        <img style={{width:"400px"}} src="https://storage.googleapis.com/terra_web/assets/images/logo--terralogiq.png" alt='anu' />
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Login</h2>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={username}
            placeholder="Enter your username"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            ref={password}
            placeholder="Enter your password"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100px",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() =>
            props.Func.onLogin(username.current.value, password.current.value)
          }
          // Add hover styles
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#fff";
            e.target.style.color = "#007bff";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#007bff";
            e.target.style.color = "#fff";
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
