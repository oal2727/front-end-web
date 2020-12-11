import { createSlice } from '@reduxjs/toolkit';
import Usuario from "../Api/Usuario"

export const userSlice = createSlice({
  name: 'usuario', //define name obligatorio
  initialState: { //define similar state for useSelector => state.name
    usuario:{id:'',nombre:'',apellido:'',
    email:'',username:'',password:'',telefono:''},
    autheticacion:false,
  },
  reducers: {
    getAuthentication: (state,action)=>{
          state.autheticacion=action.payload;
      },
      cleanUser:(state,action)=>{
        state.user.nombre='';
      }
  },
});

//crear 4 metodos de authenticacion
//cliente : hecho
//administrador,repartidor,cocineroo

export const {
  getAuthentication,cleanUser
} = userSlice.actions;

export const verificarAuthenticacion = (data)=>(dispatch)=>{
  dispatch(getAuthentication(data))
}
export const cleanUsuario = ()=> async(dispatch)=>{
  dispatch(cleanUser())
}

//esta linea adjunta dos cosas la funcion de la accion y tipo de mutations
// export const {incrementByAmount} = userSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can bbar 
export const selectAuthentication = (state) => state.usuario.autheticacion;
export const selectUser = (state) => state.usuario.usuario;


export default userSlice.reducer;