import { createSlice } from "@reduxjs/toolkit";
import Orden from "../Api/Orden"
export const managmentSlice = createSlice({
  name: "managment",
  initialState: {
    nombre: "rice",
    productosManagment: [],
    zonaderepartos:[],
    zonadereparto:{id:'',codigopostal:'',costofijo:0,direccion:"",tipopago:''},
    direccion:[],
    tipodepago:[]
  },
  reducers: {
    addProductManagment: (state, action) => {
      let updatedCart = [...state.productosManagment];
      let updatedItemIndex = updatedCart.findIndex(
        (item) => item.CODIGO === action.payload.CODIGO
      );

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, cantidad: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };

        updatedItem.cantidad++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      state.productosManagment = updatedCart;
    },
    removeProductoManagment: (state, action) => {
      const arrayData = state.productosManagment.filter((item) => {
        return action.payload !== item.CODIGO;
      });
      state.countproductomanagment += 1;
      state.productosManagment = arrayData;
    },
    incrementProductoManagment: (state, action) => {
      let dato = [...state.productosManagment];
      let updatedItemIndex = dato.findIndex(
        (item) => item.CODIGO === action.payload
      );
      const incrementedItem = {
        ...dato[updatedItemIndex]
      };
      incrementedItem.cantidad++;
      dato[updatedItemIndex] = incrementedItem;
      state.productosManagment = dato;
    },
    decrementProductoManagment: (state, action) => {
      let dato = [...state.productosManagment];
      let updatedItemIndex = dato.findIndex(
        (item) => item.CODIGO === action.payload
      );
      const incrementedItem = {
        ...dato[updatedItemIndex]
      };
      incrementedItem.cantidad--;
      dato[updatedItemIndex] = incrementedItem;
      state.productosManagment = dato;
    },
    cleanManagment : (state) => {
        state.productosManagment=[]
    },
    listZonaReparto:(state,action)=>{
      state.zonaderepartos=action.payload
    },
    addAddress:(state,action)=>{
      state.direccion=[
        ...state.direccion,action.payload
      ]
    },
    readAddress:(state,action)=>{
      state.zonadereparto.id=action.payload.id
      state.zonadereparto.direccion=action.payload.direccion
      state.zonadereparto.codigopostal=action.payload.codigopostal
      state.zonadereparto.tipopago=action.payload.tipopago
    },
    listTipoPago:(state,action)=>{
      state.tipodepago=action.payload
    },
    updateAdress:(state,action)=>{
      let newDato = state.direccion.map(dato => {
        return dato.id === action.payload.id ? action.payload : dato
     })
     state.direccion=newDato
    }
  }
});

//esta linea adjunta dos cosas la funcion de la accion y tipo de mutations
//implementar acciones en reducer
export const {
  addProductManagment,
  removeProductoManagment,
  incrementProductoManagment,
  decrementProductoManagment,listTipoPago,
  cleanManagment,listZonaReparto,
  addAddress,readAddress,updateAdress
} = managmentSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const agregarProducto = (datos) => (dispatch) => {
  // Object.assign(datos, { cantidad: 1 });
  dispatch(addProductManagment(datos));
};
export const deleteProductManagment = (dato) => (dispatch) => {
  dispatch(removeProductoManagment(dato));
};
export const increaseAmount = (id) => (dispatch) => {
  dispatch(incrementProductoManagment(id));
};
export const decreaseAmount = (id) => (dispatch) => {
  dispatch(decrementProductoManagment(id));
};
export const cleanProducts = ()=>(dispatch)=>{
    dispatch(cleanManagment())
}
export const zonasDeReparto = ()=>async(dispatch)=>{
  const response = await Orden.zonaDeReparto()
    dispatch(listZonaReparto(response.data.zonadereparto))
}
export const añadirDireccion = (data) => async(dispatch)=>{
  dispatch(addAddress(data))
}
export const readDireccion = (data)=>(dispatch)=>{
  dispatch(readAddress(data))
}
export const updateDireccion = (data)=>(dispatch)=>{
  dispatch(updateAdress(data))
}
//tipo de pago
export const listTipoDePago= ()=> async(dispatch)=>{
  const response = await Orden.tipodePago()
  dispatch(listTipoPago(response.data.tipodepago))
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectNombre = (state) => state.managment.nombre;
export const selectProductoPlato = (state) => state.managment.productosPlatos;
export const selectProductoManagment = (state) => state.managment.productosManagment;
  export const selectZonaRepartos = (state) => state.managment.zonaderepartos
export const selectZonaReparto = (state) => state.managment.zonadereparto
export const selectDireccion = (state) => state.managment.direccion
export const selectTipoDePago = (state) => state.managment.tipodepago

export default managmentSlice.reducer;
