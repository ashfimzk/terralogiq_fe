function LandingPage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h1>This Is Guest Page</h1>
        <img
          style={{ width: "100vh" }}
          src="https://storage.googleapis.com/terra_web/assets/images/logo--terralogiq.png"
          alt="terralogiq"
        />
      </div>
    </div>
  );
}

export default LandingPage;
