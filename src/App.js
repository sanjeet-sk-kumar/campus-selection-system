import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import StudentRegistration from "./Pages/Student/StudentRegistration";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/student/register" element={<StudentRegistration />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
