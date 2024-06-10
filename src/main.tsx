import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar, Article } from "./components";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Sidebar />
              <Article />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
