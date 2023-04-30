import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AssignmentIcon from "@mui/icons-material/Assignment";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <section id="about" className="about-me">
      <h1>ABOUT ME</h1>

      <div className="row">
        <div className="col-md-6 paragraphs">
          <p>
            Hi and welcome to my personal website. My name is Noel Gonzalez and
            I am Junior at UGA studying Computer Science. I am seeking
            opportunities in front/back end development. I am willing to
            relocate for opportunities in New York City, New York, San
            Francisco, California, and Austin, Texas. If you have any questions
            about my prior experience/projects, please feel free to reach out.
          </p>
          <p>
            I have worked as a freelance web developer at Fivver since February
            2020. I have made over 20 websites for clients and have a 5-star
            rating. I mainly work with HTML, CSS, JavaScript, and Bootstrap to
            complete these requests. This website is actually made using
            React.js. I am also currently working on some side projects to gain
            more experience with React.
          </p>
          <p>
            <b>Relevant coursework:</b> Introduction to Programing, Software
            Development, Systems Programming, Discrete Math for CSCI, Data
            Structures, Introduction to Computer Theory, Computer Networks,
            Linux/Unix (Intermediate)
          </p>
          <p>
            <b>Programming Languages:</b> Java, Javascript,C++, HTML,and CSS.
          </p>

          <p>
            <b>FrameWorks:</b> React.js, and Bootstrap 4<br></br>
          </p>

          <p>
            <b>Interest:</b> Traveling, Boxing/MMA, Car Enthusiast and Reselling
            Merchandise on eBay
          </p>
        </div>

        <div className="col-md-6">
          <ul className="btn-list">
            <li>
              <a
                href="../resume/Resume_Gonzalez_Noel .pdf"
                type="button"
                className="btn btn-outline-light btn-lg"
              >
                RESUME <AssignmentIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/noel-gonzalez-94408316b"
                type="button"
                className="btn btn-outline-light btn-lg"
              >
                LINKEDIN <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                type="button"
                href="https://github.com/Ng07886"
                className="btn btn-outline-light btn-lg"
              >
                GITHUB <GitHubIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
