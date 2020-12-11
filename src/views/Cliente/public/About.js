import React from "react";
import CardChef from "../../../components/Card/CardChef";
import ImagenAbout from "../../../assets/img/imagen_about.png"
const About = () => {
  return (
    <div>
      <img
        className="image-about"
        src={ImagenAbout}
        alt=""
      />
      <div className="about">
        <span className="about-title">Sobre Nosotros</span>
        <p>
          Lorem Ipsum is simply dummy text of the printing an d typesetting
          industry. Lorem I psum has been the industry's standard dummy text eve
          r since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a ty pe specimen book. It has survived not only
          five centuries, but al so the leap into electronic typesetting,
          remaining essentially unchanged.{" "}
        </p>
      </div>
      <CardChef />
    </div>
  );
};
export default About;
