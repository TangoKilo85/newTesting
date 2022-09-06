import React from "react";

// import Jheadshot from "../assets/Jheadshot.jpg";
import Theadshot from "../assets/Theadshot.jpg";

const About = () => {
  return (
    <div className="">
      <div className=""></div>
      <div className="">
        <h3 class="">Mission Statement</h3>
        <p class="lead">
          Our mission is to provide visitors to Cincinnati with the best list of
          attractions and entertainment.
        </p>
      </div>
      <div className="container">
        <div class="row">
          <div class="col-lg-6">
            {/* <img
              src={Jheadshot}
              alt="Picture of John"
              width="220"
              height="220"
            ></img> */}
            <h2 class="name">John Schuessler</h2>
            <p class="description">Filler Text</p>
            <p>
              <a
                class="btn btn-lg btn-primary"
                href="https://www.linkedin.com/in/johnschuessler/"
                role="button"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
          <div class="col-lg-6">
            { <img
              src={Theadshot}
              alt="Picture of Tyler"
              width="220"
              height="220"
            ></img> }
            <h2 class="name">Tyler Wellman</h2>
            <p class="description">Filler Text</p>
            <p>
              <a
                class="btn btn-lg btn-primary"
                href="https://www.linkedin.com/in/tyler-wellman-776815243/"
                role="button"
              >
                LinkedIn profile
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
