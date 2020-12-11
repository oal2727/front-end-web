import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {selectModal,modalToogle,
    agregarRepartidor,
    selectRepartidor,selectHttp} from "../../../../../Reducer/RepartidorSlice"
import { toast } from "react-toastify";
import Button from "../../../../../components/Button/Button"
import { Formik } from "formik";
import Modal from "react-modal";
import Repartidor from "../../../../../Api/Repartidor"

const AddRepartidor = () => {

    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: 450
        }
      };
      const dispatch = useDispatch()
      const repartidor = useSelector(selectRepartidor)
      const http = useSelector(selectHttp)
      const modal = useSelector(selectModal);
    return (  
        <div>
             <Modal
        isOpen={modal}
        onRequestClose={() => dispatch(modalToogle(false))}
        style={customStyles}
      >
        <h1 className="card-dashboard-head">Agregar Repartidor</h1>
        <i class="fas fa-times" id="icon_close" onClick={()=>dispatch(modalToogle(false))}></i>
      
        <Formik
          initialValues={repartidor}
          onSubmit={(values) => {
            Repartidor.post(values).then(response=>{
              const repartidor = response.data.repartidor
              const data = {IDREPARTIDOR:repartidor.id,DNI:repartidor.dni,NOMBRE:repartidor.nombre,APELLIDO:repartidor.apellido,ESTADO:repartidor.estado}
              toast.success("Agregado Correctamente", {
                position: toast.POSITION.BOTTOM_CENTER
              });
              dispatch(agregarRepartidor(data))
            }).catch(err=>{
             
              toast.error("EL DNI YA EXISTE", {
                position: toast.POSITION.BOTTOM_CENTER
              });
            })
               dispatch(modalToogle(false))
          }}
        >
              {(props) => (
                <form onSubmit={props.handleSubmit}> 
                <div className="box-form-dashboard">
          <label>DNI:</label>
            <input
              type="text"
              placeholder="Ingrese DNI"
              value={props.values.dni}
              name="dni"
              className="input-control-dashboard"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </div>
       <div className="box-form-dashboard">
          <label>Nombre:</label>
            <input
              type="text"
              placeholder="Ingrese Nombre"
              value={props.values.nombre}
              name="nombre"
              className="input-control-dashboard"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </div>
          <div className="box-form-dashboard">
          <label>Apellido:</label>
            <input
              type="text"
              placeholder="Ingrese Apellido"
              value={props.values.apellido}
              name="apellido"
              className="input-control-dashboard"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </div>
              <Button type="submit" variant="primary">
              Registrar Repartidor
              </Button>
           </form>
          )}
          </Formik>
      </Modal>
        </div>
    );
}
 
export default AddRepartidor;