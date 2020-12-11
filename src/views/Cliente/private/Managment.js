import React from "react"
import CardManagmentProducto from "../../../components/Card/CardManagmentProducto"
import { useSelector } from "react-redux";
import {selectProductoManagment,selectZonaReparto} from "../../../Reducer/ManagmentSlicer"
import Card from "../../../components/Card/CardUser"
import Button from "../../../components/Button/Button"
import {useHistory} from "react-router-dom"
const Managment = () => {
    
  const productosManagment=useSelector(selectProductoManagment)
  let history = useHistory();
  const zonareparto = useSelector(selectZonaReparto)
  const totalPrice = productosManagment.reduce((count, curItem) => {
    return count + curItem.COSTO * curItem.cantidad;
  }, 0);
  const CheckOut = ()=>{
    history.push("/Detalle")
  }
    return (
      <div style={{marginTop:50}}>
        <Card title_card={"Tu Compra"}>
        <div className="badge_count_cart">
          Total de Pedidos
    <span>{productosManagment.length}</span></div>
        <hr />
        <p className="badge_count_cart">
          Total a Pagar<span>${totalPrice}.0</span>
        </p>
        <Button variant="danger" onClick={()=>CheckOut()}>Continue</Button>
      </Card>
        <div>
          {
            productosManagment.length ? 
            <div className="container-managment">
              {productosManagment.map((item, index) => {
            return <CardManagmentProducto key={index} datos={item} />;
           })}
              </div>
              :
              <p style={{textAlign: "center",fontSize:25,color:"purple",margin:50}}>No hay Pedidos Asignados</p>
          }
      </div>
      </div>
      );
}
 
export default Managment;