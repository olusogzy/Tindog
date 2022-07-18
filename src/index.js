import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"
import  "./App.css"
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<div>
<React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
</React.StrictMode>
</div>, document.getElementById("root"));