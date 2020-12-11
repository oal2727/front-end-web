import React from "react"
import {obtenerOrdenes,selectOrdenes} from "../../../../Reducer/OrdenSlice"
import {useDispatch,useSelector} from "react-redux"
import ListOrdenes from "./components/ListOrdenes"
import Button from "../../../../components/Button/Button"
const  OrdenesContainer= () => {

    const dispatch = useDispatch();
    const ordenes=useSelector(selectOrdenes);
    React.useEffect(()=>{
        dispatch(obtenerOrdenes())
    },[])

    return (
        <div style={{marginTop:50}}>
            <p style={{textAlign:"center",fontSize:18,margin:10}}>Listado de Ordenes en Estado : En espera</p>
            <ListOrdenes datos={ordenes}/>
        </div>
      );
}
 
export default OrdenesContainer;