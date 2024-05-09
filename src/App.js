import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (confirm("go to app")) {
      document.location = "https://yesmadamdeeplink.page.link/eNh4";
    } else {
      document.location = "yesmadamapp://";
    }
  }, []);
  return <div className="App"></div>;
}

export default App;
