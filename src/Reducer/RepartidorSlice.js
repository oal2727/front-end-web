import { createSlice } from "@reduxjs/toolkit";
import Repartidor from "../Api/Repartidor"
export const repartidorSlice = createSlice({
  name: "repartidor",
  initialState: {
    repartidores:[],
    repartidor:{dni:"",nombre:"",apellido:"",estado:"",idrepartidor:""},
    nombres:[],
    response:null,
    modal:false,
    modalread:false,
  },
  reducers: {
    listRepartidores:(state,action)=>{
        state.repartidores=action.payload
    },
    toogleModal:(state,action)=>{
        state.modal=action.payload
    },
    toogleModalRead:(state,action)=>{
      state.modalread=action.payload
    },
    deleteRepartidores:(state,action)=>{
        const arrayData = state.repartidores.filter(item => {
            return action.payload !== item.IDREPARTIDOR;
          });
          state.repartidores = arrayData;
    },
    addRepartidores:(state,action)=>{
      state.repartidores=[
        ...state.repartidores,action.payload
      ]
    },
    cancelarRepartidor:(state)=>{
      state.repartidor.dni=""
      state.repartidor.nombre=""
      state.repartidor.apellido=""
      state.repartidor.estado=""
      state.repartidor.idrepartidor=""
    },
    listNames:(state,action)=>{
      state.nombres=action.payload
    },
    
  }
});

//esta linea adjunta dos cosas la funcion de la accion y tipo de mutations
//implementar acciones en reducer
export const {
    listRepartidores,
    toogleModal,deleteRepartidores,
    addRepartidores,toogleModalRead,
    editRepartidores,cancelarRepartidor,listNames,showNotification
} = repartidorSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const getRepartidores = ()=> async(dispatch)=>{
    const repartidor = await Repartidor.get()
    dispatch(listRepartidores(repartidor.data.repartidores))
}
export const modalToogle = (data)=>(dispatch)=>{
    dispatch(toogleModal(data))
}
export const deleteRepartidor = (id)=>(dispatch)=>{
    Repartidor.delete(id).then(()=>{
        dispatch(deleteRepartidores(id))
     })
}
//el envio de push data debe tomar en cuenta las mayusculas tanto para el listado que esta predefinido y al añadir
export const agregarRepartidor = (data)=>(dispatch)=>{
  dispatch(addRepartidores(data))
}
// export const readRepartidor = (data) => (dispatch)=>{
//   dispatch(editRepartidores(data))
// }
export const CancelRepartidor = ()=> (dispatch)=>{
  dispatch(cancelarRepartidor())
}

export const modalReadToogle = (data)=> (dispatch)=>{
  dispatch(toogleModalRead(data))
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectRepartidores = (state) => state.repartidor.repartidores;
export const selectModal = (state) => state.repartidor.modal;
export const selectRepartidor = (state) => state.repartidor.repartidor;
export const selectReaderModal = (state) => state.repartidor.modalread
export const selectHttp =(state)=>state.repartidor.http;

export default repartidorSlice.reducer;
