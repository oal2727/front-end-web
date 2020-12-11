import React from "react"
import {eliminarProducto} from "../../../../../Reducer/ProductoSlice"
import {useDispatch} from "react-redux"
import {modalToogle,readProduct} from "../../../../../Reducer/ProductoSlice"
// import MenuItem from '@material-ui/core/MenuItem'
const ListProducto = ({productos,setImage}) => {


    const dispatch = useDispatch()
    const eliminarProduct = (id)=>{
        dispatch(eliminarProducto(id))
        // toast.success("Eliminado Correctamente", {
        //   position: toast.POSITION.BOTTOM_CENTER
        // });
      }
    //   const Read= (item)=>{
    //     dispatch(modalReadToogle(true))
    //     dispatch(readRepartidor(iframe_template))
    //   }
    const showProduct = (item)=>{
      console.log(item)
      dispatch(modalToogle(true))
      dispatch(readProduct(item))
      setImage(item.IMAGEURL)
    }
    
    return (
        <div>
        <table className="table-container">
        <thead>
        <tr className="table-header">
            <th>N°</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Costo</th>
            <th>Categoria</th>
            <th>Estado</th>
            <th>Imagen</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            productos.map((item,index)=>{
              return(
                <tr className="col" key={index}>
                  <td>{index+1}</td>
                <td>{item.NOMBRE}</td>
              <td>{item.STOCK}</td>
              <td>S./{item.COSTO}</td>
              <td>{item.DESCRIPCION}</td>
             {
               item.ESTADO.toUpperCase() === "ACTIVO"?
               <td><div className="badge_disponible">{item.ESTADO.toUpperCase()}</div></td>
               :
               <td><div className="badge_ocupado">{item.ESTADO.toUpperCase()}</div></td>
             }
             <td><img className="image_table" src={item.IMAGEURL} alt={item.IDIMAGEN} /></td>
            <td>
            <i 
               id="edit_managment" 
            class="fas fa-edit"
            onClick={()=>showProduct(item)}
            ></i>
             </td>
              <td><i 
              onClick={()=>eliminarProduct(item.CODIGO)}
              id="trash_managment" 
              className="fas fa-trash"></i></td>
              </tr>
              )
            })
          }
        </tbody>
    </table>
    </div>
      );
}
 
export default ListProducto;