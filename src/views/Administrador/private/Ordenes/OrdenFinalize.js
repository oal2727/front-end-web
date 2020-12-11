import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {finalizadosOrdenes,selectCompletados} from "../../../../Reducer/OrdenSlice"

const DetailOrdenes = () => {

    // const [total,setTotal] = React.useState(0)
    const dispatch = useDispatch()
    const completados = useSelector(selectCompletados)
    React.useEffect(()=>{
        dispatch(finalizadosOrdenes())
    },[])

    return ( 
        <div>
            <h1 className="title-text-dashboard">Registro de Ordenes finalizadas</h1>
        <table className="table-container">
        <thead>
        <tr className="table-header">
            <th>N°</th>
            <th>N° Orden</th>
            <th>Nombre y Apellido del Cliente</th>
            <th>Costo Total del Pedido</th>
            <th>Tipo de Pago</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            completados.map((item,index)=>{
              return(
                <tr className="col" key={index}>
                <td>{index+1}</td>
              <td>{item.IDORDEN}</td>
              <td>{item.NOMBRE} {item.APELLIDO}</td>
              <td>{item.COSTOTOTAL}</td>
              <td>{item.TIPODEPAGO}</td>
              </tr>
              
              )
            })
          }
        </tbody>
    </table>
    </div>
    // <div>
    //     detail orden {id}
    //     </div>
     );
}
 
export default DetailOrdenes;