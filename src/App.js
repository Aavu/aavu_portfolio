import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { Blog } from "./pages/Blog";
import Music from "./pages/Music";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/music" element={<Music />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </Router>
    );
}

export default App;
