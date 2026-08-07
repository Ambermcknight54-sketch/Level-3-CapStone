import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
// );

// may need this code again
// ReactDOM.render(<App />, document.getElementById("root"));
// // import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//   <App />,
//   </StrictMode>,
// );

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
// );
