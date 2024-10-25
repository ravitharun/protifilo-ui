import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="text-center" data-aos="fade-up">
          <h2>About Me</h2>
          <p className="lead">
            Welcome to Protifilo! I’m <b>Ravi Tharun</b>, a passionate Front-End
            Developer dedicated to creating engaging, user-friendly digital
            experiences. With a focus on UI/UX design and a strong foundation in
            modern web technologies, I aim to transform ideas into intuitive and
            interactive web applications.
          </p>
          <button className="btn btn-outline-primary">Contact Me</button>
        </div>

        <br />

        <div className="row text-center mt-4">
          <div className="col-md-4" data-aos="zoom-in">
            <h3>
              <b><CountUp end={10} />+</b>
            </h3>
            <p>Projects</p>
          </div>
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
            <h3>
              <b><CountUp end={5} />+</b>
            </h3>
            <p>Internship Experiences</p>
          </div>
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="400">
            <h3>
              <b>01+</b>
            </h3>
            <p>Open Source Contributions</p>
          </div>
        </div>

        <br />

       
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default About;
