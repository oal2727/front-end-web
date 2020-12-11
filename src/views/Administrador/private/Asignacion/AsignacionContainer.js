import React,{useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import {selectProcess,processOrden} from "../../../../Reducer/OrdenSlice"
import LitAsignacion from "./components/ListAsignacion"
import AsignacionRepartidor from "./components/AsignacionRepartidor"
const AsignacionContainer = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(processOrden())
    },[])
    const [orden,setOrden] = React.useState(null)
    const asignacion = useSelector(selectProcess)
    return (  
        <div>
           <LitAsignacion asignaciones={asignacion} setOrden={setOrden}/>
           <AsignacionRepartidor orden={orden}/>
        </div>
    );
}
 
export default AsignacionContainer;