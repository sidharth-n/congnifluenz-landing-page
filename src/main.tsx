import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
      <Analytics />
    </Router>
  </React.StrictMode>
)
