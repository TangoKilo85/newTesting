import React from "react";
import '../styles/about.css'
import Jheadshot from "../assets/Jheadshot.jpeg";
import Theadshot from "../assets/Theadshot.jpg";

const About = () => {
  return (
    <div className="">
      <div className=""></div>
      <div className="">
        <h3 class="statement">Mission Statement</h3>
        <p class="lead">
          Our mission is to provide visitors to Cincinnati with the best list of
          attractions and entertainment.
        </p>
      </div>
      <div className="container">
        <div class="row">
          <div class="col-lg-6">
            { <img className="rounded"
              src={Jheadshot}
              alt="Picture of John"
              width="220"
              height="220"
             ></img> }
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
            { <img className="rounded"
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
      <div className="Trivia">
        <h3>Cincinnati Trivia!</h3>
          <p>Read up on some of the more interesting facts about Cincinnati! From movies, to music, to Jerry Springer, a lot of interesting people and things have part of their stories rooted within the city of Cincinnati!</p>
          <ul>
            <li>Cincinnati is named after the Roman statesman and military leader, Lucius Cincinnatus.</li>
            <li>Neil Armstrong taught aeronautical engineering at the University of Cincinnati from 71-79.</li>
            <li>The Capitoline Wolf Statue in Eden Park was a gift from Benito Mussolini.</li>
            <li>Rapper Eminem competed in Cincinnati's Scribble Jam Festival before making his mark on the music scene.</li>
            <li>The Legendary Filmmaker Steven Spielberg was born in Cincinnati.</li>
            <li>Speaking of films, many movies were filmed in Cincinnati such as Rain Man, Tango and Cash, and Seabiscuit.</li>
            <li>In 1853 Cincinnati created the nation's first fully paid professional Fire Department.</li>
            <li>The last passenger pigeon in the world, once the most common bird in North America, died in 1914 at the Cincinnati Zoo.</li>
            <li>From 1977 to 1978 Jerry Springer served as the mayor of Cincinnati.</li>
            <li>On a much darker note, under the direction of the Department of Defense, Cincinnati General Hospital conducted radiation experiments on advanced Cancer Patients during the height of the Cold War to determine how much radiation soldiers could withstand durind a Nuclear Fallout.</li>
          </ul>
      </div>
    </div>
  );
};

export default About;
