import React from "react"
// import { toast } from "react-toastify";
import {useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"
import {updateStatePedido} from "../../../../../Reducer/OrdenSlice"

const ListOrdenes = ({datos}) => {

  const history = useHistory();
    const dispatch = useDispatch()
    const viewOrden= (id)=>{
      history.push(`/administrador/ordenes/${id}`)
    }
    const aprobarPedido = (item)=>{
      console.log(item)
      dispatch(updateStatePedido(item))
    }
    
    return (
        <div>
        <table className="table-container">
        <thead>
        <tr className="table-header">
            <th>N°</th>
            <th>n° Orden </th>
            <th>Nombre y Apellido del Cliente</th>
            <th>Fecha de Orden</th>
            <th>Estado</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
          {
            datos.length ?
            <tbody>
            {
              datos.map((item,index)=>{
                return(
                  <tr className="col" key={index}>
                    <td>{index+1}</td>
                  <td>{item.IDORDEN}</td>
                <td>{item.NOMBRE} {item.APELLIDO}</td>
                <td>{item.FECHAORDEN}</td>
               {
                 item.ESTADO === "DISPONIBLE"?
                 <td><div className="badge_disponible">{item.ESTADO}</div></td>
                 :
                 <td><div className="badge_ocupado">{item.ESTADO}</div></td>
               }
               <td><p className="badge_approbed" onClick={()=>aprobarPedido(item)}>
                 <i class="fas fa-check-circle"></i>Aprobar Pedido</p></td>
                 <td>
              <i 
                onClick={()=>viewOrden(item.IDORDEN)}
                 id="edit_managment" 
              class="fas fa-eye"
              ></i>
               </td>
                </tr>
                
                )
              })
            }
          </tbody>
          :
          <p style={{fontSize:18,textAlign:"center",marginTop:10}}>*No hay Ordenes en espera</p>
          }
    </table>
    </div>
      );
}
 
export default ListOrdenes;