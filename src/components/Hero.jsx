import React from "react";
import logo from "./../assets/images/logo.png";
import hero from "./../assets/images/hero.png";

const Hero = () => {
  return (
    <>
      <div
        className="relative w-full h-[300px] mob:h-[200px] lg:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <img className="relative mob:w-20 w-40 p-3" src={logo} alt="" />

        <p className="relative text-4xl p-5 font-caveat font-semibold text-white mob:text-lg">
          Your journey begins here... ✈️ <br />
          Trust us to take you around the world... 🌍 <br />
          Call Us
        </p>
      </div>
    </>
  );
};

export default Hero;
