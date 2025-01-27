import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { FaceRecoProject } from "./components/FaceRecoProject";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/fonts.css";
import { Projects } from "./pages/Projects";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<FaceRecoProject />} />
        </Routes>
      </div>
    </Router>
  );
}
