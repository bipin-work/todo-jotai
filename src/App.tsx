import React from "react";
import { createRoot } from "react-dom/client"

const App = () => (
    <div className="container">
        App
    </div>
)
createRoot(document.getElementById("app")).render(<App />);
