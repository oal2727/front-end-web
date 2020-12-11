import { createSlice } from "@reduxjs/toolkit";
import Categoria from "../Api/Categoria"
export const categoriaSlice = createSlice({
  name: "categoria",
  initialState: {
    categorias:[],
    categoria:{descripcion:"",idcategoria:""},
    modal:false
  },
  reducers: {
    getCategorias:(state,action)=>{
        state.categorias=action.payload
    },
    toogleModal:(state,action)=>{
        state.modal=action.payload
    },
    deleteCategorias:(state,action)=>{
        const arrayData = state.categorias.filter(item => {
            return action.payload !== item.IDCATEGORIA;
          });
          state.categorias = arrayData;
    },
    addCategoria:(state,action)=>{
      state.categorias=[
        ...state.categorias,action.payload
      ]
    },
    cancelCategoria:(state)=>{
      state.categoria.descripcion=""
      state.categoria.idcategoria=""
    },
  }
});

//esta linea adjunta dos cosas la funcion de la accion y tipo de mutations
//implementar acciones en reducer
export const {
    getCategorias,
    toogleModal,deleteCategorias,addCategoria,
    readCategoria,cancelCategoria,updateCategoria
} = categoriaSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const obtenerCategorias = ()=> async(dispatch)=>{
    const categorias = await Categoria.get()
    dispatch(getCategorias(categorias.data.categorias))
}
export const modalToogle = (data)=>(dispatch)=>{
    dispatch(toogleModal(data))
}
export const deleteCategoria = (id)=>(dispatch)=>{
     Categoria.delete(id).then(()=>{
       console.log("eliminado correctamente")
        dispatch(deleteCategorias(id))
     })
}
export const agregarCategoria = (data)=>async(dispatch)=>{
 const response =  await Categoria.post(data)
//  console.log(response.data.categorias)
 const categoria = response.data.categorias
 const dataresponse={IDCATEGORIA:categoria.id,DESCRIPCION:categoria.descripcion}
 dispatch(addCategoria(dataresponse))
}

export const CancelarCategoria = ()=> (dispatch)=>{
  dispatch(cancelCategoria())
}
//slice recibe deselvuelven objetos

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCategorias = (state) => state.categoria.categorias;
export const selectModal = (state) => state.categoria.modal;
export const selectCategoria = (state) => state.categoria.categoria;


export default categoriaSlice.reducer;
