import { useEffect } from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa"; // Import react-icons
import Navbar from "./Navbar";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <>
      <Navbar />
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(to right, #f7e89a, white)", // Apply gradient background from gold to white
          height: "100vh", // Set height to full viewport height
          display: "flex", // Use flexbox for centering content
          justifyContent: "center", // Center content horizontally
          alignItems: "center", // Center content vertically
        }}
      >
        <div style={{ marginTop: "0%", position: "relative", zIndex: 2 }}>
          <div className="container text-center">
            <div className="row g-4">
              <div className="col-md-6" data-aos="fade-right">
                <div className="p-3">
                  <h1 className="display-4">Welcome to Protifilo!</h1>
                  <p className="lead">
                    I’m <b className="text-primary">Ravi Tharun</b>, dedicated to empowering your growth
                    in UI/UX design and frontend full-stack development.
                  </p>
                  <a href="">
                    <button className="btn btn-outline-warning ">
                      View My Resume
                    </button>
                  </a>
                  <br />
                  <TypeAnimation
                    sequence={[
                      "I am a Front-End Developer",
                      1000,
                      "I create responsive and dynamic web applications",
                      1000,
                      "I am skilled in UI/UX Design",
                      1000,
                      "I am passionate about user-centric design",
                      1000,
                      "I enjoy transforming ideas into engaging user experiences",
                      1000,
                      "I love working with React, HTML, and CSS,javascript,and BackendTechnologies and DataBase",
                      1000,
                      "Let's build something amazing together!",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: "2em", display: "inline-block" }}
                    repeat={Infinity}
                  />
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <div className="p-3">
                  <img
                    src="../Components/" // Replace with your image URL
                    alt="Protifilo"
                    className="img-fluid rounded-circle shadow" // Apply rounded-circle class
                    style={{ maxWidth: '300px', height: 'auto' }} // Limit size and maintain aspect ratio
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-center mt-4">
            <a href="https://www.linkedin.com/in/ravitharun07/" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FaLinkedin size={40} color="#0e76a8" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FaTwitter size={40} color="#1da1f2" />
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FaInstagram size={40} color="#e4405f" />
            </a>
            <a href="https://github.com/ravitharun" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FaGithub size={40} color="#333" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
