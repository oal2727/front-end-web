import React from "react"
import { toast } from "react-toastify";
import {useDispatch} from "react-redux"
import {deleteRepartidor} from "../../../../../Reducer/RepartidorSlice"

const ListRepartidor = ({datos}) => {

    const dispatch = useDispatch()
    const EliminarRepartidor = (id)=>{
        dispatch(deleteRepartidor(id))
        toast.success("Eliminado Correctamente", {
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
      // const Read= (item)=>{
      //   dispatch(modalReadToogle(true))
      //   dispatch(readRepartidor(item))
      // }
    
    return (
        <div>
        <table className="table-container">
        <thead>
        <tr className="table-header">
            <th>N°</th>
            <th>Dni </th>
            <th>Nombre y Apellido</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            datos.map((item,index)=>{
              return(
                <tr className="col" key={index}>
                  <td>{index+1}</td>
                <td>{item.DNI}</td>
              <td>{item.NOMBRE} {item.APELLIDO}</td>
             {
               item.ESTADO === "DISPONIBLE"?
               <td><div className="badge_disponible">{item.ESTADO}</div></td>
               :
               <td><div className="badge_ocupado">{item.ESTADO}</div></td>
             }
            {/* <td>
            <i 
            onClick={()=>Read(item)}
               id="edit_managment" 
            class="fas fa-eye"
            ></i>
             </td> */}
              <td><i 
              onClick={()=>EliminarRepartidor(item.IDREPARTIDOR)} 
              id="trash_managment" 
              className="fas fa-trash"></i></td>
              </tr>
              )
            })
          }
        </tbody>
    </table>
    </div>
      );
}
 
export default ListRepartidor;