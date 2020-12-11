import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {ejecutionOrdenes,selectEjecucion,updateFinalizeOrdenes} from "../../../../Reducer/OrdenSlice"

const DetailOrdenes = () => {

    // const [total,setTotal] = React.useState(0)
    //FALTA ORDENES EN EJECUION
    const dispatch = useDispatch()
    const ejecucion = useSelector(selectEjecucion)
    React.useEffect(()=>{
        dispatch(ejecutionOrdenes())
    },[])
    const pedidoFinalizado = (item)=>{
      console.log(item)
      dispatch(updateFinalizeOrdenes(item))
    }

    return ( 
        <div>
            <h1 className="title-text-dashboard">Registro de Ordenes en Entrega</h1>
        <table className="table-container">
        <thead>
        <tr className="table-header">
          <th>N°</th>
            <th>N° de Orden</th>
            <th>Nombre y Apellido del Cliente</th>
            <th>Costo Total del Pedido</th>
            <th>Tipo de Pago</th>
            <th>Nombre y Apellido del Repartidor</th>
            <th></th>
          </tr>
        </thead>
        {
          ejecucion.length ?
          <tbody>
          {
            ejecucion.map((item,index)=>{
              return(
                <tr className="col" key={index}>
                <td>{index+1}</td>
              <td>{item.IDORDEN}</td>
              <td>{item.NOMBRE} {item.APELLIDO}</td>
              <td>{item.COSTOTOTAL}</td>
              <td>{item.TIPODEPAGO}</td>
              <td>{item.NOMBREREPARTIDOR + " " + item.APELLIDOREPARTIDOR}</td>
               <td><p onClick={()=>pedidoFinalizado(item)} className="badge_approbed">
               <i class="fas fa-check-circle"></i>Pedido Finalizado</p></td>
              
              </tr>
              
              )
            })
          }
        </tbody>
        :
        <p style={{fontSize:18,textAlign:"center",marginTop:10}}>No hay Ordenes en Proceso de Entrega</p>
        }
    </table>
    </div>
    // <div>
    //     detail orden {id}
    //     </div>
     );
}
 
export default DetailOrdenes;