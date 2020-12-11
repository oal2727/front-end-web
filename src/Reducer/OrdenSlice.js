import { createSlice } from "@reduxjs/toolkit";
import Orden from "../Api/Orden"

export const ordenSlice = createSlice({
  name: "orden",
  initialState: {
    ordenes: [],
    detalleorden:[],
    completados:[],
    ejecucion:[],
    process:[],
    ordenesCliente:[],
    modalasignacionpedido:false,
    orden:{idorden:"O2006",costoTotal:0,codigoCliente:"",
    tipopago:"",direccionOrden:"",codigozonareparto:""},
    ordenAsignacion:{idRepartidor:"",idAdministrador:"",idOrden:""},
  },
  reducers: {
    getOrdenes:(state,action)=>{
        state.ordenes=action.payload
    },
    detailOrden:(state,action)=>{
      state.detalleorden=action.payload
    },
    finalizeOrden:(state,action)=>{
      state.completados=action.payload
    },
    executionOrden:(state,action)=>{
      state.ejecucion=action.payload
    },
    ordenesEnProceso:(state,action)=>{
      state.process=action.payload
    },
    ordenesCliente:(state,action)=>{
      state.ordenesCliente=action.payload
    },
    refreshList:(state,action)=>{
      const arrayData = state.ordenes.filter(item => {
        return action.payload !== item.IDORDEN;
      });
      state.ordenes = arrayData;
    },
    refreshListProcess : (state,action)=>{
      const arrayData = state.process.filter(item => {
        return action.payload !== item.IDORDEN;
      });
      state.process = arrayData;
    },
    refreshListExecution: (state,action)=>{
      const arrayData = state.ejecucion.filter(item => {
        return action.payload !== item.IDORDEN;
      });
      state.ejecucion = arrayData;
    },
    toogleAsignacion:(state,action)=>{
      state.modalasignacionpedido=action.payload
    }


  }
});
// ordenesEnEejecucion
//esta linea adjunta dos cosas la funcion de la accion y tipo de mutations
//implementar acciones en reducer
export const {
    getOrdenes,detailOrden,finalizeOrden,ordenesCliente,
    ordenesEnProceso,refreshList,executionOrden,refreshListExecution,
    toogleAsignacion,refreshListProcess
} = ordenSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const detalleOrden = (id)=> async(dispatch)=>{
  const response = await Orden.detailOrden(id)
  dispatch(detailOrden(response.data.orden))
}
export const addOrden = (data)=> async(dispatch)=>{
  console.log("agregando orden")
  await Orden.crearOrden(data)
  dispatch(ordenesCliente(data))
}
export const createDetalleOrden = (data)=> async(dispatch)=>{
    await Orden.crearDetalleOrden(data)
}


//ORDEN EN ESPERA
export const obtenerOrdenes = ()=> async(dispatch)=>{
  const ordenes = await Orden.get()
  dispatch(getOrdenes(ordenes.data.productos))
}
//ORDEN EN PROCESO
export const processOrden = ()=> async(dispatch)=>{
  const response = await Orden.ordenesEnProceso()
  dispatch(ordenesEnProceso(response.data.ordenes))
}
//ORDEN EN ENTREGA
export const ejecutionOrdenes = ()=> async(dispatch)=>{
  const response = await Orden.ordenesEnEjecucion();
  dispatch(executionOrden(response.data.productos))
}
//ORDEN FINALIZADO
export const finalizadosOrdenes = ()=> async(dispatch)=>{
  const response = await Orden.ordenesFinalizadas()
  dispatch(finalizeOrden(response.data.ordenes))
}

//ORDENES EN ESPERA !!! 
export const updateStatePedido =(data)=> async(dispatch)=>{
  const param={
    idAdministrador:22,
    idorden:data.IDORDEN
  }
  console.log(param)
  await Orden.updateStateProcess(param);
  dispatch(refreshList(data.IDORDEN))
}
//ORDENES EN PROCESO DE ASIGNACION Y PASA A EJECUCION
export const ejecucionOrdenes = (data)=>async(dispatch)=>{
  const param={
    idAdministrador:22,
    idRepartidor:data.idRepartidor,
    idOrden:data.idOrden
  }
  console.log(param)
  await Orden.ordenesEnEejecucion(param)
  dispatch(refreshListProcess(data))
}
//actualizar a orden finalizada
export const updateFinalizeOrdenes = (item)=> async(dispatch)=>{
  const param={
    IDORDEN:item.IDORDEN
  }
  await Orden.updateOrdenesFinalizadas(param)
  dispatch(refreshListExecution(item))
}

export const toogleModal = (data)=>(dispatch)=>{
  dispatch(toogleAsignacion(data))
}


// Th function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectOrdenes = (state) => state.orden.ordenes;
export const selectOrden = (state) => state.orden.orden;
export const selectDetalleOrdenes = (state) => state.orden.detalleorden;
export const selectCompletados = (state) =>state.orden.completados;
export const selectEjecucion = (state) => state.orden.ejecucion
export const selectProcess = (state) => state.orden.process
export const selectModalAsignacion = (state) => state.orden.modalasignacionpedido
export const selectAsignacionReparitdor = (state) => state.orden.ordenAsignacion

export default ordenSlice.reducer;
