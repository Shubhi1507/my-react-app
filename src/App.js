import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const url = "yesmadamapp://";
    window.location.replace(url);
  }, []);
  return <div className="App"></div>;
}

export default App;
