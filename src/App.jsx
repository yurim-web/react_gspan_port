import "./css/background.css";
import "./css/reset.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Profile from "./layout/Profile";

function App() {
  return (
    <body
      style={{
        backgroundColor: "#000",
        height: "100vh",
        width: "100vw",
        color: "white",
      }}
    >
      <div className="main"></div>
      <Header />
      <Main />
      <Profile />
    </body>
  );
}

export default App;
