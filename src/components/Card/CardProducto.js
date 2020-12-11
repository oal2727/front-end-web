import React  from "react";
import {agregarProducto} from "../../Reducer/ManagmentSlicer"
import {useDispatch} from "react-redux"
const CardProductoLeft = ({ platos,index }) => {

  const dispatch = useDispatch()

  return (
    <div
      id="card-producto"
      className={index % 2 === 0 ? "card-producto-right" : "card-producto-left"}
    >
      <img src={platos.IMAGEURL} alt="" className="image-producto" />
      <div className="card-producto-body">
  <h1 className="title-card-producto">{platos.NOMBRE}</h1>
        <hr id="line-circle" class="line-producto" />
        <i className="fas fa-circle" id="circle"></i>
        <div className="card-producto-money">
          <i className="fas fa-money-bill-wave"></i>
  <span>Costo : S./{platos.COSTO}</span>
        </div>
        <p className="text-producto">
         {platos.DESCRIPCION}
        </p>
        <div
          className={
            index % 2 === 0 ? "button-producto-right" : "button-producto-left"
          }
        >
          <button className="btn-shop" onClick={()=>dispatch(agregarProducto(platos))}>Comprar</button>
        </div>
      </div>
    </div>
  );
};
export default CardProductoLeft;
