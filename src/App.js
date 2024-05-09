import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // alert("Go to App", "yesmadamapp://");
    window.open("yesmadamapp://");
  }, []);
  return <div className="App"></div>;
}

export default App;
