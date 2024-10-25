import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'; // Import AnimatePresence and motion

import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import Educationqualification from './Components/Educationqualification.jsx';
import Work from './Components/Work.jsx';
import Projects from './Components/Projects.jsx';

const AnimatedRoutes = () => {
  const location = useLocation();
  console.log(location)

  return (
    <AnimatePresence wait> {/* Manages animations when route changes */}
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}  // Initial state
              animate={{ opacity: 1 }}  // Animation when the component enters
              exit={{ opacity: 0 }}     // Animation when the component exits
              transition={{ duration: 1 }}  // Duration of the animation
            >
              <Home />
            </motion.div>
          }
        />  
        <Route
          path="/about"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/skills"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1  }}
            >
              <Skills />
            </motion.div>
          }
        />
        <Route
          path="/education"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Educationqualification />
            </motion.div>
          }
        />
        <Route
          path="/work"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Work />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial={{ opacity: 0 }}  // Initial state
              animate={{ opacity: 1 }}  // Animation when the component enters
              exit={{ opacity: 0 }}     // Animation when the component exits
              transition={{ duration: 1 }} 
               // Duration of the animation
            >
              <Projects />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AnimatedRoutes /> {/* Render the animated routes */}
    </Router>
  </StrictMode>
);
