import React from "react";
import {useDispatch} from "react-redux"
import {agregarProducto} from "../../Reducer/ManagmentSlicer"
const CardPlato = ({ datos }) => {
  const dispatch = useDispatch()
  return (
    <div className="card-plato">
      <p>{datos.NOMBRE}</p>
      <img
        className="image_card_plato"
        src={datos.IMAGEURL}
        alt={datos.IDIMAGEN}
      />
      <div className="cost_card_plato" style={{display:"flex",justifyContent:"space-between"}}>
       <div style={{display: "flex"}}>
        <i className="fas fa-money-bill-wave" id="cost"></i>
          <p style={{marginLeft:5}}>Costo {datos.COSTO}</p>
       </div>
       <div>
          <p>Cantidad {datos.STOCK}</p>
       </div>
      </div>
      <div>
        <button className="btn_plato" onClick={()=>dispatch(agregarProducto(datos))}>Comprar</button>
      </div>
    </div>
  );
};
export default CardPlato;
