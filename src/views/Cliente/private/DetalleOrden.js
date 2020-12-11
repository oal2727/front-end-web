import React,{useEffect} from "react"
import Modal from 'react-modal';
import Card from "../../../components/Card/CardUser"
import { useSelector,useDispatch} from "react-redux";
import {selectProductoManagment,
  zonasDeReparto,selectZonaRepartos,
  selectZonaReparto,añadirDireccion,
  selectDireccion,selectTipoDePago,listTipoDePago,
  readDireccion,updateDireccion} from "../../../Reducer/ManagmentSlicer"
import {selectOrden,createDetalleOrden,addOrden} from "../../../Reducer/OrdenSlice"
// addOrden,productosManagment maanagment
//selectDetalleOrdenes ordenSlice
import Button from "../../../components/Button/Button"
import { toast } from "react-toastify";
import { Formik } from "formik";
import { v4 as uuidv4 } from 'uuid';
import {obtenerData} from "../../../Api/token"
import Orden from "../../../Api/Orden"



const DetalleOrden= ()=>{
    const [open, setOpen] = React.useState(false);
  const zonarepartos = useSelector(selectZonaRepartos)
  const zonadereparto = useSelector(selectZonaReparto);
  const direccion = useSelector(selectDireccion)
  const tipodepagos = useSelector(selectTipoDePago)
  //detallorden and orden
  // const detalleordenes = useSelector(selectDetalleOrdenes)
  const orden = useSelector(selectOrden)


    const dispatch = useDispatch()
    const productosManagment=useSelector(selectProductoManagment)
  const totalPrice = productosManagment.reduce((count, curItem) => {
    return count + curItem.COSTO * curItem.cantidad;
  }, 0);

  useEffect(()=>{
    dispatch(zonasDeReparto())
    dispatch(listTipoDePago())
  },[])

    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width:550
        }
      };
      const add = () => {
        toast.success("Direccion Agregada", {
          position: toast.POSITION.BOTTOM_CENTER
        });
      };
      const getCostoAdicional= (codigoPostal)=>{
        const filterData = zonarepartos.filter(data =>{
          return data.CODIGOPOSTAL === codigoPostal
        })
        return filterData[0].COSTOADICIONAL
      } 

      const generarBoleta = ()=>{
        //call object selectDetalleOrdenes => detalleorden
        //call object selectOrden => orden
        //const totalPago= totalPrice + direccion[0].costofijo;
        // console.log("total a pagar "+totalPago)
        const param={
          idorden:"O2010",
          direccionOrden:direccion[0].direccion,
          codigozonareparto:direccion[0].codigopostal,
          costoTotal:1500,
          tipopago:direccion[0].tipopago,
          codigoCliente:obtenerData("cliente")
        };
        
        Orden.crearOrden(param).then(()=>{
          const arr=[]
          productosManagment.forEach((element)=>{
            const data={CODIGO:element.CODIGO,
              idOrden:"O2010",
              cantidad:element.cantidad,
            importe:element.cantidad*element.COSTO}
            arr.push(data)
          })
          Orden.crearDetalleOrden(arr).then(()=>{
            toast.success("Orden Agregada Correctamente", {
              position: toast.POSITION.BOTTOM_CENTER
            });
          })

        })
      }


      const editarDireccion = (data)=>{
        setOpen(true)
        const  object = data[0]
        const resultado={direccion:object.direccion,
          codigopostal:object.codigopostal,id:object.id}
        dispatch(readDireccion(resultado))
      } 

    return(
        <div style={{marginTop:50}}>
             <Card title_card={"Tu Compra"}>
        <div className="badge_count_cart">
          Total de Pedidos
    <span>{productosManagment.length}</span></div>
        <hr />
        <p className="badge_count_cart">
          Total a Pagar<span>S./ {totalPrice}.0</span>
        </p>
        <Button variant="danger" onClick={()=>generarBoleta()}>Check Outs</Button>
      </Card>

        <div className="container-address">
          
          <div className="box-header-address">
            <p>Añadir Direccion y Metodo de Pago</p>
            {
                direccion.length != 0 ? 
                <button className="btn_Address" onClick={() => editarDireccion(direccion)}>Editar Direccion  y Metodo de Pago</button>
                :
                <button className="btn_Address" onClick={() => setOpen(true)}>Añadir Direccion y Metodo de Pago</button>
            }
            {/* <button className="btn_Address" onClick={() => setOpen(true)}>Añadir Direccion</button> */}
          </div>

          <div>
            {
              direccion.map((item, index)=>{
                return(
                <div key={index}>
                  <p  style={{textAlign: 'center',marginTop:20,fontSize:18}}>
                    DIRECCION DE ENTREGA : {item.direccion}</p>
                </div>
                )
              })
            }
          </div>

      </div>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={customStyles}
      >
          <Formik
          initialValues={zonadereparto}
          onSubmit={(values) => {
            values.costofijo=getCostoAdicional(values.codigopostal)
            if(values.id===""){
              values.id=uuidv4()
              dispatch(añadirDireccion(values))
            }else{
              dispatch(updateDireccion(values))
            }
            setOpen(false)
          }}
        >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
{/* <i class="fas fa-times" id="icon_close" onClick={()=>dispatch(modalToogle(false))}></i> */}
              <p className="title-modal-addres">{props.values.codigopostal === "" ? "Añadir Direccion de Envio" : "Actualizar Datos de Direccion"}</p>
        <div style={{ display: "flex" }}>
          <p className="text-address">Distrito de Entrega</p>
          <select 
            name="codigopostal"
            value={props.values.codigopostal}
            onChange={props.handleChange}
            class="input-control-dashboard">
                <option value="">Seleccione</option>
                {
                    zonarepartos.map((item,index)=>{
                        return(
                        <option key={item.CODIGOPOSTAL} value={item.CODIGOPOSTAL} label={item.NOMBRE} />
                        )
                    })
                }
            </select>


        </div>
        <p className="text-address">
              Codigo Postal : <span>
                {props.values.codigopostal}
                </span>
        </p>
        <p className="text-address">
              Costo Adicional: <span>{
                  props.values.codigopostal === "" ? "---" : getCostoAdicional(props.values.codigopostal)
                }</span>
        </p>
        <div>
          <p className="text-address">Direccion de entrega</p>
          <div className="input-form">
            <input
              type="text"
              className="input-control-address"
              placeholder="Ingrese Direccion de Entrega"
              name="direccion"
              value={props.values.direccion}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <p className="text-address">Distrito de Entrega</p>
           <select 
            name="tipopago"
            value={props.values.tipopago}
            onChange={props.handleChange}
            class="input-control-dashboard">
                <option value="">Seleccione</option>
                {
                    tipodepagos.map((item,index)=>{
                        return(
                        <option key={item.IDTIPOPAGO} value={item.IDTIPOPAGO} label={item.DESCRIPCION} />
                        )
                    })
                }
            </select>


        </div>
                {
                  props.values.id === "" ?
                  <Button variant="primary" type="submit">Agregar Direccion</Button>
                  :
                  <Button variant="success" type="submit">Update Direccion</Button> 
                }
        </form>
        )}
         </Formik>
        </Modal>
      </div>
    )
}
export default DetalleOrden;


