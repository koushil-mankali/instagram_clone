import { render } from "react-dom";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { StoreLayout } from "./store/StoreLayout";

render(
  <StoreLayout>
    <Router>
      <App />
    </Router>
  </StoreLayout>,
  document.getElementById("root")
);
