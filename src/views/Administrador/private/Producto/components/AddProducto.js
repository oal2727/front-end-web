import React,{useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {selectModal,modalToogle,selectProducto,añadirProducto} from "../../../../../Reducer/ProductoSlice"
import {obtenerCategorias,selectCategorias} from "../../../../../Reducer/CategoriaSlice"
import { toast } from "react-toastify";
import Button from "../../../../../components/Button/Button"
import { Formik } from "formik";
import Modal from "react-modal";

const AddProducto = ({image,setImage}) => {

    const dispatch = useDispatch()
    const producto =useSelector(selectProducto);
    const modal = useSelector(selectModal);
    const categorias = useSelector(selectCategorias)
    const refContainer = React.useRef(); //reference for image
    // const [image,setImage]  = React.useState(null)
    const [fileName,setFileName] = React.useState(null)

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
           dispatch(obtenerCategorias())
       
      },[])
      const fileUploadAction = ()=>{
        refContainer.current.click()
      }
      const fileUploadInputChange = (e)=>{
        const file = e.target.files[0]
        setFileName(file)
        // dispatch({type:'STATE_IMAGEN'})
        // setFileImage(file)
        // createFileName(file) //create filename
        const filereader = new FileReader()
        filereader.onload = (e)=>{
            setImage(e.target.result)
        }
        filereader.readAsDataURL(file)
      }

   
    return (  
        <div>
             <Modal
        isOpen={modal}
        onRequestClose={() => dispatch(modalToogle(false))}
        style={customStyles}
      >
        <h1 className="card-dashboard-head">{producto.codigoProducto ==="" ? "Agregar Producto" : "Actualizar Producto" }</h1>
        <i class="fas fa-times" id="icon_close" onClick={()=>dispatch(modalToogle(false))}></i>
      
        <Formik
          initialValues={producto}
          onSubmit={(values) => {
            console.log("archivo " + fileName);
            values.filename=fileName
            console.log(values)
            dispatch(añadirProducto(values))
            dispatch(modalToogle(false))
            toast.success("Plato Agregado Correctamente", {
              position: toast.POSITION.BOTTOM_CENTER
            });
          }}
        >
              {(props) => (
                <form onSubmit={props.handleSubmit}> 
            <div className="dual-form-dashboard">


            <div class="box-one">
                    <div className="box-form-dashboard">
          <label>Nombre:</label>
            <input
              type="text"
              placeholder="Ingrese Nombre del Plato"
              value={props.values.nombre}
              name="nombre"
              className="input-control-dashboard"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </div>

          <div className="box-form-dashboard">
          <label>Descripcion:</label>
            <textarea
              rows="4"
              cols="50"
              style={{height:80}}
              placeholder="Ingrese Descripcion del Plato"
              value={props.values.descripcion}
              name="descripcion"
              className="input-control-dashboard"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            ></textarea>
          </div>

          {
            props.values.codigoProducto === "" ?
            ""
            :
            <div className="box-form-dashboard">
            <label>Estado </label>
            <select 
             value={props.values.estado}
             name="estado"
             onChange={props.handleChange}
            class="input-control-dashboard">
                <option value="">Seleccione</option>
                <option  value="ACTIVO">ACTIVO</option>
                <option  value="INACTIVO">INACTIVO</option>
            </select>
          </div>
          }

          <div className="box-form-dual">
          <div className="box-form-dashboard">
            <label>Precio</label>
            <input
              type="text"
              value={props.values.costo}
              placeholder="Precio here"
              name="costo"
              class="input-control-dashboard"
              onChange={props.handleChange}
            />
          </div>
          <div className="box-form-dashboard">
            <label>Cantidad</label>
            <input
              type="text"
              value={props.values.stock}
              placeholder="Stock here"
              name="stock"
              class="input-control-dashboard"
              onChange={props.handleChange}
            />
          </div>
        </div>


        <div className="box-form-dashboard">
            <label>Categoria</label>
            <select 
            name="categoria"
            value={props.values.categoria}
            onChange={props.handleChange}
            class="input-control-dashboard">
                <option value="">Seleccione</option>
                {
                    categorias.map((item,index)=>{
                        return(
                        <option key={item.IDCATEGORIA} value={item.IDCATEGORIA} label={item.DESCRIPCION} />
                        )
                    })
                }
            </select>
          </div>
      </div>
      <div className="box-two">
          <p onClick={()=>fileUploadAction()} className="image_photo_icon"><i class="fas fa-camera"></i> Seleccionar Imagen</p>
            <input type="file" ref={refContainer} style={{display:'none'}}  
              onChange={fileUploadInputChange}/>
              {
                image === "" ?
                <p>existe imagen</p>
                :
                <img className="image_producto" src={image} alt="" />
              }
      </div>


            </div>
              {
                 props.values.codigoProducto === "" ?
                 <Button type="submit" variant="primary">
                 Registrar Producto
                 </Button>
                  :
                  <div style={{display:"flex",justifyContent:"space-around"}}>
                      {/* <Button type="submit" variant="success">
                    Actualizar Producto
                    </Button> */}
                 <Button onClick={()=>dispatch(modalToogle(false))} type="buttom" variant="danger">
                 Cancelar
                 </Button>
                  </div>
              } 
             
           </form>
          )}
          </Formik>
      </Modal>
        </div>
    );
}
 
export default AddProducto;