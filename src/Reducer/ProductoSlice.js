import { createSlice } from "@reduxjs/toolkit";
import Producto from "../Api/Producto"
import { v4 as uuidv4 } from 'uuid';
import ProductoContainer from "../views/Administrador/private/Producto/ProductoContainer";

export const productoSlice = createSlice({
  name: "producto",
  initialState: {
    productos:[],
    productosinitialize:[],
    modal:false,
    producto:{nombre:"",descripcion:"",stock:0,costo:0,
    categoria:"",codigoProducto:"",filename:"",estado:""},
    platos:[]
  },
  reducers: {
    listProductos:(state,action)=>{
        state.productos=action.payload
    },
    toogleModal:(state,action)=>{
      state.modal=action.payload
    },
    addProducto:(state,action)=>{
      console.log("reducer" + action.payload)
      state.productos=[
        ...state.productos,action.payload
      ]
    },
    deleteProducto:(state,action)=>{
      const arrayData = state.productos.filter(item => {
        return action.payload !== item.CODIGO;
      });
      state.productos = arrayData;
    },
    listPlatos:(state,action)=>{
      state.platos=action.payload
    },
    listPlatosInitialize:(state,action)=>{
      state.productosinitialize=action.payload
    },
    readPlato:(state,action)=>{
      state.producto.nombre=action.payload.NOMBRE
      state.producto.descripcion=action.payload.DESCRIPCION
      state.producto.costo=action.payload.COSTO
      state.producto.stock=action.payload.STOCK
      state.producto.categoria=action.payload.IDCATEGORIA
      state.producto.codigoProducto=action.payload.CODIGO
      state.producto.estado=action.payload.ESTADO
      // state.producto.filename=action.payload.IMAGEURL
    },
    cleanPlato:(state,action)=>{
      state.producto.nombre=""
      state.producto.descripcion=""
      state.producto.costo=""
      state.producto.stock=""
      state.producto.categoria=""
      state.producto.codigoProducto=""
      state.producto.estado=""
    }
  }
});

//esta linea adjunta dos cosas la funcion de la accion y tipo de mutations
//implementar acciones en reducer
export const {
    listProductos,toogleModal,addProducto,
    readPlato,cleanPlato,
    deleteProducto,listPlatos,listPlatosInitialize
} = productoSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const getRepartidores = ()=> async(dispatch)=>{
    const productos = await Producto.get()
    dispatch(listProductos(productos.data.productos))
}
export const modalToogle = (data)=>(dispatch)=>{
  dispatch(toogleModal(data))
}
export const añadirProducto = (data)=> async(dispatch)=>{
  var form = new FormData()
  form.append("codigo",uuidv4());
  form.append("nombre",data.nombre)
  form.append("descripcion",data.descripcion)
  form.append("stock",data.stock)
  form.append("costo",data.costo)
  form.append("idCategoria",data.categoria)
  form.append("imagen",data.filename)
  const response =  await Producto.post(form)
  const producto = response.data.producto.producto
  const imagen = response.data.producto.imagen
  console.log("resultado" + producto.nombre)
  const responseData = {CODIGO:producto.codigo,
    NOMBRE:producto.nombre,DESCRIPCION:producto.descripcion,
    STOCK:producto.stock,COSTO:producto.costo,
    ESTADO:producto.estado,
    IMAGEURL:imagen.imageUrl,IDIMAGEN:imagen.id}
    dispatch(addProducto(responseData));

}
export const eliminarProducto = (id)=> (dispatch)=>{
  Producto.delete(id).then(()=>{
    dispatch(deleteProducto(id))
  })
}
export const readProduct = (data)=> async(dispatch)=>{
  dispatch(readPlato(data))
}
export const listaDePlatos=()=> async(dispatch)=>{
  const response = await Producto.get()
  dispatch(listPlatos(response.data.productos))
}
export const listaDePlatosInicial = ()=> async(dispatch)=>{
  const response = await Producto.listInitialize()
  dispatch(listPlatosInitialize(response.data.productos))
  console.log("dato " + response);
  console.log(response.data.productos)
}
export const cleanBoxPlatos = ()=> async(dispatch)=>{
  dispatch(cleanPlato())
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectProductos = (state) => state.producto.productos;
export const selectProducto = (state) => state.producto.producto;
export const selectModal = (state) => state.producto.modal
export const selectPlatos = (state) => state.producto.platos;
export const selectPlatosInitialize = (state) => state.producto.productosinitialize

export default productoSlice.reducer;
