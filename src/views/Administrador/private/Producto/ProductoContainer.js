import React from "react"
import {getRepartidores,selectProductos,modalToogle,cleanBoxPlatos} from "../../../../Reducer/ProductoSlice"
import {useDispatch,useSelector} from "react-redux"
import ListProducto from "./components/ListProducto"
import AddProducto from "./components/AddProducto"
const  ProductoContainer= () => {

    const dispatch = useDispatch();
    const [image,setImage]  = React.useState(null)
    const productos=useSelector(selectProductos);
    React.useEffect(()=>{
        dispatch(getRepartidores())
    },[])

    const modalShowAdd = ()=>{
      dispatch(modalToogle(true))
      setImage(null)
      console.log("limpiar campos")
      dispatch(cleanBoxPlatos())
    }

    return (
        <div style={{marginTop:30}}>
            <div style={{margin:"auto",width:"50%",textAlign:"center",display:"flex",marginBottom:30}}>
            <button  onClick={()=>modalShowAdd()} className="add_dashboard_button">
          <i class="fas fa-plus" id="icon_add"></i>
          Agregar Producto
        </button>
          </div>
            <AddProducto image={image} setImage={setImage}/>
            <ListProducto productos={productos} setImage={setImage}/>
        </div>
      );
}
 
export default ProductoContainer;