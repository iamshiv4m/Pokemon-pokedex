import React from "react";
import "./Main.css";
import Pokebal from "../../assests/Pokebal.png";
import Typewriter from "typewriter-effect";
import Navbar from "../Navbar/Navbar";

function Main() {
  return (
    <>
      <Navbar />
      <div className="landing-container">
        <div data-aos="fade-right" className="landing-left">
          <h1 className="landing-header">Do you know...</h1>
          <div className="typewriter-container">
            <Typewriter
              options={{
                strings: [
                  "Prepare for trouble!",
                  "Make it double!",
                  "To protect the world from devastation!",
                  "To unite all peoples within our nation!",
                  "To denounce the evils of truth and love!",
                  "To extend our reach to the stars above!",
                  "Jessie | James",
                  "Surrender now or prepare to fight!",
                  "Meowth! That's right! ♪",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="landing-right">
          <img
            data-aos="fade-left"
            className="landing-image"
            src={Pokebal}
            alt="hero"
          />
        </div>
      </div>
    </>
  );
}

export default Main;
