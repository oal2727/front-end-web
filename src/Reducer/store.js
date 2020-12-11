import { configureStore } from '@reduxjs/toolkit';
import ManagmentReducer from "./ManagmentSlicer"
import UserReducer from "./UserSlice"
import CategoriaReducer from "./CategoriaSlice"
import RepartidorReducer from "./RepartidorSlice"
import ProductoReducer from "./ProductoSlice"
import OrdenReducer from "./OrdenSlice"
export default configureStore({
  reducer: {
    usuario : UserReducer,
    managment: ManagmentReducer,
    categoria:CategoriaReducer,
    repartidor:RepartidorReducer,
    producto:ProductoReducer,
    orden:OrdenReducer
  },
});
