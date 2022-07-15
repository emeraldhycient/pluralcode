import React from "react";
import sand1 from "../../assets/images/sand1.svg";

function Hero() {
  return (
    <section
      className="h-fit md:h-screen w-screen pt-12"
      style={{
        backgroundImage: `url(${sand1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      Hero
    </section>
  );
}

export default Hero;
