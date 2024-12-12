const Header = () => {
  return (
    <header style={{ width: "100vw", height: "10%", color: "white" }}>
      <div
        style={{
          padding: "30px 0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1024px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontSize: "30px", fontWeight: 700 }}>YUL.</h1>
        <ul style={{ display: "flex", gap: "8%" }}>
          <li>HOME</li>
          <li>PROFILE</li>
          <li>SKILL</li>
          <li>PORTFOLIO</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
