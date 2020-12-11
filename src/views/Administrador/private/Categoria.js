import React from "react"
 import TableCategoria from "../../../components/Table/TableCategoria"
//  import ModalComponent from "../../../components/Modal/ModalComponent"
 import {useSelector, useDispatch} from "react-redux"
import {selectCategorias
  ,obtenerCategorias,
  modalToogle,
  selectModal,
  selectCategoria,
  agregarCategoria,
  CancelarCategoria,
  actualizarCategoria} from "../../../Reducer/CategoriaSlice"
import Button from "../../../components/Button/Button"
import { Formik } from "formik";
import Modal from "react-modal";
import { toast } from "react-toastify";

const Categoria = ()=>{

    const dispatch = useDispatch()
    const datacategoria = useSelector(selectCategorias);
    const modal = useSelector(selectModal);
    const categoria = useSelector(selectCategoria);
    React.useEffect(()=>{
        dispatch(obtenerCategorias())
    },[])
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
      const Cancelar=()=>{
        dispatch(modalToogle(false))
        dispatch(CancelarCategoria())
      }
      const showModal= ()=>{
        dispatch(modalToogle(true))
        dispatch(CancelarCategoria())
      }
    return(
        <div style={{marginTop:30}}>
          <div style={{margin:"auto",width:"50%",textAlign:"center",display:"flex",marginBottom:30}}>
            <button onClick={()=>showModal()} className="add_dashboard_button">
          <i class="fas fa-plus" id="icon_add"></i>
          Agregar Categoria
        </button>
          </div>
         
             <Modal
        isOpen={modal}
        onRequestClose={() => dispatch(modalToogle(false))}
        style={customStyles}
      >
        <h1 className="card-dashboard-head">{categoria.idcategoria==="" ? "Agregar Categoria" : "Update Categoria" }</h1>
        <i class="fas fa-times" id="icon_close" onClick={()=>dispatch(modalToogle(false))}></i>
      
        <Formik
          initialValues={categoria}
          enableReinitialize
          onSubmit={(values) => {
            console.log("data " + values)
            dispatch(agregarCategoria(values)) 
            toast.success("Agregado Correctamente", {
              position: toast.POSITION.BOTTOM_CENTER
            })
            dispatch(modalToogle(false))
          }}
        >
              {(props) => (
                <form onSubmit={props.handleSubmit}> 
       <div className="box-form-dashboard">
          <label>Nombre:</label>
            <input
              type="text"
              placeholder="Ingrese nombre"
              value={props.values.descripcion}
              name="descripcion"
              className="input-control-dashboard"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </div>
          {
            props.values.idcategoria == ""?
              <Button type="submit" variant="primary">
              Registrar Categoria
              </Button>
              :
            <div style={{display:"flex",justifyContent:"space-between"}}>
               <Button type="submit" variant="success">
              Update Categoria
              </Button>
              <Button onClick={()=>Cancelar()} type="submit" variant="warning">
              Cancelar
              </Button>
            </div>
          }
           </form>
          )}
          </Formik>
      </Modal>
            <TableCategoria datos={datacategoria}/>
    </div>
    )
}
export default Categoria;