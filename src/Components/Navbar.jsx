import { Link } from 'react-router-dom';
import './Projects.css';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">RaviTharun</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavAltMarkup" 
          aria-controls="navbarNavAltMarkup" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav bg-red text-white">
            <Link to="/" className="nav-link active text-link-hover" aria-current="page" id='Nav'>Home</Link>
            <Link to="/about" className="nav-link"id='Nav'>About</Link>
            <Link to="/skills" className="nav-link"id='Nav'>Skills</Link>
            <Link to="/Education" className="nav-link"id='Nav'>Education</Link>
            <Link to="/projects" className="nav-link"id='Nav'>Projects</Link>
            <Link to="/contact" className="nav-link"id='Nav'>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
