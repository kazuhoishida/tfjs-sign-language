import React from "react"
import ReactDOM from "react-dom/client"
import FingerApp from "./components/FingerApp"
import "./styles/reset.css"
import "./styles/index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FingerApp />
  </React.StrictMode>
)
