import React, { useEffect } from 'react'
import { Formik } from "formik";
import Modal from "react-modal";
import Button from "../../../../../components/Button/Button"
import {useDispatch,useSelector} from "react-redux"
import {selectModalAsignacion,toogleModal,selectAsignacionReparitdor,ejecucionOrdenes} from "../../../../../Reducer/OrdenSlice"
import {selectRepartidores,getRepartidores} from "../../../../../Reducer/RepartidorSlice"
const AsignacionRepartidor = ({orden})=>{

  const dispatch = useDispatch()
    const modal = useSelector(selectModalAsignacion);
    const [estado,setEstado] = React.useState("")

    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: 850
        }
      };
useEffect(()=>{
    dispatch(getRepartidores())
},[])

const asignacionrepartidor = useSelector(selectAsignacionReparitdor)
const repartidores = useSelector(selectRepartidores)

const getEstado= (idRepartidor)=>{
    const filterData = repartidores.filter(data =>{
      return data.IDREPARTIDOR === idRepartidor
    })
    return filterData[0].ESTADO
  } 

  return (
    <Modal
    isOpen={modal}
    onRequestClose={() => dispatch(toogleModal(false))}
    style={customStyles}
  >
    <Formik
      initialValues={asignacionrepartidor}
      onSubmit={(values) => {
        values.idOrden=orden;
          console.log(values)
      dispatch(ejecucionOrdenes(values))
      dispatch(toogleModal(false))
    }}
    >
          {(props) => (
            <form onSubmit={props.handleSubmit}> 
         <div className="box-form-dashboard">
          <label>Nombre y Apellido del Repartidor:</label>
          <select 
            name="idRepartidor"
            value={props.values.idRepartidor}
            onChange={props.handleChange}
            class="input-control-dashboard">
                <option value="">Seleccione</option>
                {
                    repartidores.map((item,index)=>{
                        return(
                        <option key={item.IDREPARTIDOR} value={item.IDREPARTIDOR} label={item.NOMBRE.toUpperCase() + " " + item.APELLIDO.toUpperCase()} />
                        )
                    })
                }
            </select>
          </div>
          <div className="box-form-dashboard">
          <label>Estado del Repartidor:</label>
            <p>{props.values.idRepartidor  === "" ? "---" : getEstado(props.values.idRepartidor) }</p>
              </div>
              <Button variant="primary" type="submit">Asignar Repartidor</Button>
       </form>
      )}
      </Formik>
  </Modal>
    );
}
 
export default AsignacionRepartidor;