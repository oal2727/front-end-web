import React from "react"
import {useParams,useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"
import {detalleOrden,selectDetalleOrdenes} from "../../../../Reducer/OrdenSlice"

const DetailOrdenes = () => {

    // const [total,setTotal] = React.useState(0)
    const history = useHistory();
    const {id} = useParams();
    const dispatch = useDispatch()
    const detalleorden = useSelector(selectDetalleOrdenes)
    React.useEffect(()=>{
        dispatch(detalleOrden(id))
        // let totalAcumulado=0;
        // detalleorden.forEach((element)=>{
        //     totalAcumulado+=element.IMPORTE
        //     setTotal(totalAcumulado)
        // })
    },[])

    return ( 
        <div>
        <i class="fas fa-arrow-left"
        onClick={()=>history.goBack()}
         id="arrow-left" style={{margin:80,fontSize:35,color:"crimson",cursor:"pointer"}}></i>
            {/* <p>total acumulado {total}</p> */}
        <table className="table-container">
        <thead>
        <tr className="table-header">
            <th>N°</th>
            <th>Nombre del plato</th>
            <th>Categoria de Plato</th>
            <th>Imagen</th>
            <th>Costo de Plato</th>
            <th>Cantidad</th>
            <th>Importe a Pagar</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            detalleorden.map((item,index)=>{
              return(
                <tr className="col" key={index}>
                  <td>{index+1}</td>
                <td>{item.NOMBRE}</td>
              <td>{item.DESCRIPCION}</td>
              <td><img className="image_table" src={item.IMAGEURL} alt={item.IDIMAGEN} /></td>
              <td>S./{item.COSTO}</td>
              <td>{item.CANTIDAD}</td>
              <td>S./{item.IMPORTE}</td>
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