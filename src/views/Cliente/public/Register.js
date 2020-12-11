import React from "react"
import Button from "../../../components/Button/Button"
import CardLogin from "../../../components/Card/CardUser"
import TextInput from "../../../components/TextInput/TextInput";
import { Formik } from "formik";
import {useHistory} from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import { toast } from "react-toastify";

import Usuario from "../../../Api/Usuario"
import {selectUser,cleanUsuario} from "../../../Reducer/UserSlice"
// import {selectUser} from "../../Reducer/UserSlice"

const Register = () => {
  
    const usuario = useSelector(selectUser);
      const history = useHistory();
  const dispatch = useDispatch()
    return (
        <div style={{marginTop:80}}>
        <CardLogin title_card={"Registrarse"}>
   <Formik
     initialValues={usuario}
     onSubmit={(values) => {
       const param={
         nombre:values.nombre,
         apellido:values.apellido,
         telefono:values.telefono,
         email:values.email,
         password:values.password
       }
       console.log(param)
       Usuario.Register(param).then(()=>{
        toast.success("Agregado Correctamente", {
          position: toast.POSITION.BOTTOM_CENTER
        });
        history.push("/IniciarSession")
        // dispatch(cleanUsuario())
       }).catch(error=>{
         console.log(error.response.status)
         if(error.response.status == 404){
          toast.error("el correo ingresado ya existe", {
            position: toast.POSITION.BOTTOM_CENTER
          })
         }
       })
     }}
   >
     {(props) => (
       <form onSubmit={props.handleSubmit}>
          <div>
          <input
           type="text"
           placeholder="Ingrese Nombre"
           name="nombre"
           className="input-control"
           value={props.values.nombre}
           onChange={props.handleChange}
           onBlur={props.handleBlur}
         />
          </div>
         <TextInput
           type="text"
           placeholder="Ingrese Apellido"
           value={props.values.apellido}
           name="apellido"
           onChange={props.handleChange}
           onBlur={props.handleBlur}
         />
         <TextInput
           type="email"
           placeholder="Ingrese email"
           value={props.values.email}
           name="email"
           onChange={props.handleChange}
           onBlur={props.handleBlur}
         />
         <TextInput
           type="password"
           placeholder="Ingrese Password"
           value={props.values.password}
           name="password"
           onChange={props.handleChange}
           onBlur={props.handleBlur}
         />
            <TextInput
           type="text"
           placeholder="Ingrese Telefono"
           value={props.values.telefono}
           name="telefono"
           onChange={props.handleChange}
           onBlur={props.handleBlur}
         />
         <Button type="submit" variant="danger">
           Registrar
         </Button>
       </form>
     )}
   </Formik>
       <div style={{margin:'auto'}}>
       <p
       className="register_label"
       onClick={()=>history.push("/IniciarSession")}
        >Iniciar Session</p>
            </div>
 </CardLogin>
   </div>
      );
}


export default Register;