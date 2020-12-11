import React from "react"
import ListRepartidor from "./components/ListRepartidor"
import AddRepartidor from "./components/AddRepartidor"
import {useSelector, useDispatch} from "react-redux"
import {getRepartidores,selectRepartidores,modalToogle,cancelarRepartidor} from "../../../../Reducer/RepartidorSlice"
const RepartidorContainer = () => {


    const repartidores = useSelector(selectRepartidores)
    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(getRepartidores())
      },[])

      //  dispatch(modalToogle(true))
      const showModalRepartidor = ()=>{
        // dispatch(cancelarRepartidor)
        dispatch(modalToogle(true))
      }
    return ( 
        <div style={{marginTop:30}}>
           <div style={{margin:"auto",width:"50%",textAlign:"center",display:"flex",marginBottom:30}}>
            <button onClick={()=>showModalRepartidor()} className="add_dashboard_button">
          <i class="fas fa-plus" id="icon_add"></i>
          Agregar Repartidor
        </button>
          </div>
            <AddRepartidor/>
            <ListRepartidor datos={repartidores}/>
        </div>

     );
}
 
export default RepartidorContainer;