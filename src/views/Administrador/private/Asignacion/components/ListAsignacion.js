import React from "react"
import {toogleModal} from "../../../../../Reducer/OrdenSlice"
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"
const ListAsignacion = ({asignaciones,setOrden}) => {
  const history = useHistory();
    const dispatch = useDispatch()
    const asignacionPedido=(item)=>{
      console.log(item);
      setOrden(item.IDORDEN)
      dispatch(toogleModal(true))
    }
    const viewOrden= (id)=>{
      history.push(`/administrador/ordenes/${id}`)
    }
    return (  
        <div>
        <h1 className="title-text-dashboard">Asignacion de Pedidos</h1>
    <table className="table-container">
    <thead>
    <tr className="table-header">
        <th>N°</th>
        <th>Nombre y Apellido del Cliente</th>
        <th>Telefono</th>
        <th>Direccion de orden</th>
        <th>Lugar de envio</th>
        <th>Costo Adicional</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
      {
        asignaciones.length ? 
        <tbody>
        {
          asignaciones.map((item,index)=>{
            return(
              <tr className="col" key={index}>
              <td>{index+1}</td>
            <td>{item.NOMBRE} {item.APELLIDO}</td>
            <td>{item.TELEFONO}</td>
            <td>{item.DIRECCIONORDEN}</td>
            <td>{item.NOMBREDEENVIO}</td>
            <td>{item.COSTOADICIONAL}</td>
            <td><p onClick={()=>asignacionPedido(item)} className="badge_approbed">
                 <i class="fas fa-check-circle"></i>Asignar Repartidor</p></td>
            <td>
            <i 
              onClick={()=>viewOrden(item.IDORDEN)}
                 id="edit_managment" 
              class="fas fa-eye"
              >Ver Pedido</i></td>
            </tr>
        
            
            )
          })
        }
      </tbody>
      :
      <p style={{fontSize:18,textAlign: 'center'}}>No hay registros de ORDENES EN PROCESO</p>
      }
</table>
</div>
    );
}
 
export default ListAsignacion;