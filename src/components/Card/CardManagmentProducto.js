import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteProductManagment,
  increaseAmount,
  decreaseAmount
} from "../../Reducer/ManagmentSlicer";

const CardManagmentProducto = ({ datos }) => {
  const dispatch = useDispatch();
  const deleteManagment = (id) => {
    dispatch(deleteProductManagment(id));
  };
  const Decrementar = (datos) => { //
    if(1 < datos.cantidad){
      dispatch(decreaseAmount(datos.CODIGO));
    }
  };
  const Incrementar = (datos) => { //maximo 11 productos puede comprar
    if(datos.cantidad < 10){
      dispatch(increaseAmount(datos.CODIGO));
    } 
  };
  return (
    <div className="card-managment-producto">
      <img
        src={datos.IMAGEURL}
        className="image_managment"
        alt={datos.IDIMAGEN}
      />

      <div className="managment-flex">
        <div>
          <i
            className="fas fa-trash-alt"
            onClick={() => deleteManagment(datos.CODIGO)}
            id="icon_trash"
          ></i>
           <p className="badge_total_producto">
              Total {datos.cantidad * datos.COSTO}
            </p>
        </div>
        <div className="data-managment">
          <p>{datos.nombre}</p>
          <div className="metadata-managment">
            <p className="price-managment"> Precio S./{datos.COSTO}</p>
            <span className="count">Cantidad: {datos.cantidad}</span>
          </div>
        </div>
        <div className="count-managment">
          <button
          type="button"
            className="btn-increment"
            onClick={() => Incrementar(datos)}
          >
            +
          </button>
          <button
          type="button"
            className="btn-decrement"
            onClick={() => Decrementar(datos)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardManagmentProducto;
