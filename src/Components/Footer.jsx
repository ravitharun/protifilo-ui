// import React from 'react';
import { FaGithub, FaLinkedin,  FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <h5 className="mb-3">Connect With Me</h5>
        <p>
          I m a passionate Front-End Developer dedicated to creating engaging and user-friendly digital experiences. 
          Let s connect and collaborate on exciting projects!
        </p>
        <div className="d-flex justify-content-center mb-3">
          <a href="https://github.com/ravitharun/FULLSTACKPROJECT" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FaGithub size={25} />
          </a>
          <a href="https://www.linkedin.com/in/ravitharun07/" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FaLinkedin size={25} />
          </a>
          <a href="https://x.com/TharunRavi9413" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FaTwitter size={25} />
          </a>
         
        </div>
        <p className="mb-0">© {new Date().getFullYear()} Ravi Tharun. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
