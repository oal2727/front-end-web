import React from "react";
import imageChef from "../../assets/img/chef-2.jpg"
const CardChef = () => {
  const personas = [
    { id: 1, nombre: "Persona A", rol: "chef" },
    { id: 2, nombre: "Persona B", rol: "chef" },
    { id: 3, nombre: "Persona C", rol: "chef" },
    { id: 4, nombre: "Persona D", rol: "chef" }
  ];

  return (
    <div className="team-group">
      <span className="title-equipo">Equipo</span>
      <div className="container-person">
        {personas.map((item, index) => {
          return (
            <div className="person" key={index}>
              <img
                className="image_person"
                alt=""
                src={imageChef}
              />
              <p>{item.nombre}</p>
              <span>{item.rol}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CardChef;
