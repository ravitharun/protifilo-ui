// import React from 'react';
import Footer from "./Footer";
import Navbar from "./Navbar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
// /SchoolIcon
const EducationQualification = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Education</h2>
        <Link to="/Work" className="nav-link active text-center text-primary " aria-current="page">Work</Link>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2026"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h4 className="vertical-timeline-element-subtitle">
              <b>Dayananda Sagar University</b>
            </h4>
            <p>B.Tech (Computer Science and Engineering)</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            date="2020 - 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h4 className="vertical-timeline-element-subtitle">
              <b>Sri chaitanya Junior College</b>
            </h4>
            <p>Intermediate 1+2 year(MPC)</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h4 className="vertical-timeline-element-subtitle">
              Sri chaitanya School
            </h4>
            <p>10th Class</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default EducationQualification;
