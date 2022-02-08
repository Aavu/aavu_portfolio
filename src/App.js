import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { Blog } from "./pages/Blog";
import Music from "./pages/Music";
import { AnimatePresence } from "framer-motion";

var lastLoc = null;
var location = null;

const MyRoutes = () => {
    lastLoc = location ? location.pathname : null;
    location = useLocation();
    return (
        <>
            <NavBar lastLoc={lastLoc} />
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home lastLoc={lastLoc} />} />
                <Route path="/about" element={<About lastLoc={lastLoc} />} />
                <Route path="/music" element={<Music lastLoc={lastLoc} />} />
                <Route path="/projects" element={<Projects lastLoc={lastLoc} />} />
                <Route path="/blog" element={<Blog lastLoc={lastLoc} />} />
            </Routes>
        </>
    );
}

function App() {
    return (
        <AnimatePresence exitBeforeEnter>
            <Router>
                <MyRoutes />
            </Router>
        </AnimatePresence>
    );
}

export default App;
