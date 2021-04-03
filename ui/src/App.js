import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <BaseLayout />
      </Router>
    </div>
  );
}

export default App;
