import React from "react";
const CardAddress = ({ direcciones, num }) => {
  return (
    <div className="card-address">
      <div className="card-head-addres">
        <p style={{ color: "crimson" }}>N° {num} </p>
        <i class="fas fa-check-circle" id="circle_check_address"></i>
      </div>
      <p style={{ color: "#2D2AD9" }}>
        Codigo Postal:{direcciones.codigoPostal}
        
      </p>
      <p>Costo Adicional <span style={{color:"#EE184B"}}>S./</span></p>
      <p>Distrito : {direcciones.distrito}</p>
      <div className="card-footer-addres">
        <p className="direccion">Direccion {direcciones.Direccion}</p>
        <i class="fas fa-trash" id="trash_address"></i>
      </div>
    </div>
  );
};
export default CardAddress;
