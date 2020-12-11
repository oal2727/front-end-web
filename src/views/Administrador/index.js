import React from "react"
import CardUser from "../../components/Card/CardUser"
import { Formik } from "formik";
import TextInput from "../../components/TextInput/TextInput"
import Button from "../../components/Button/Button"
import {useHistory} from 'react-router-dom'
import {useSelector} from "react-redux"
import {selectUser} from "../../Reducer/UserSlice"
import {setToken} from "../../Api/token"
import { toast } from "react-toastify";
import Usuario from "../../Api/Usuario"

const Administrador = () => {
    //definido por email && password
    const administrador = useSelector(selectUser);
    const history = useHistory();
    return (
        <div className="container-administrador">
            <div className="card-login-users">
            <CardUser title_card={"Bienvenido Administrador"}>
            <Formik
          initialValues={administrador}
          onSubmit={(values) => {
            console.log(values);
            // setToken("jose","administrador")
            history.push("/administrador/dashboard")
            
            const param={
              username:values.username,
              password:values.password
            }
            Usuario.loginAdministrador(param).then(()=>{
              toast.success("Ingreso Correctamente", {
                position: toast.POSITION.BOTTOM_CENTER
              });
              setToken("administrador","administrador")
              history.push("/administrador/dashboard")
             // dispatch(verificarAuthenticacion(true))
            }).catch(()=>{
              toast.error("Verificar Usuario y Password", {
                position: toast.POSITION.BOTTOM_CENTER
              })
            })
           // --
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <TextInput
                type="username"
                placeholder="Ingrese Usuario"
                value={props.values.username}
                name="username"
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
              <Button 
              type="submit" 
              variant="danger">
                Iniciar Session
              </Button>
            </form>
          )}
        </Formik>
            </CardUser>
            </div>

        </div>
      );
}
 
export default Administrador;