import React from "react"
import {useHistory} from 'react-router-dom'
import Button from "../../../components/Button/Button"
import CardLogin from "../../../components/Card/CardUser"
import TextInput from "../../../components/TextInput/TextInput";
import { Formik } from "formik";
import {useSelector} from "react-redux"
import {selectUser} from "../../../Reducer/UserSlice"
import {useDispatch } from 'react-redux';
// import Usuario from "../../Api/Usuario"
import {setToken} from "../../../Api/token"
import {verificarAuthenticacion} from "../../../Reducer/UserSlice"
import Usuario from "../../../Api/Usuario"
import { toast } from "react-toastify";
import { withRouter } from 'react-router-dom'

const Login = () => {
  
    const usuario = useSelector(selectUser)
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <div style={{marginTop:80}}>
             <CardLogin title_card={"Iniciar Session"}>
        <Formik
          initialValues={usuario}
          onSubmit={(values) => {
            console.log(values)
            const param={
              email:values.email,
              password:values.password
            }
            
            Usuario.login(param).then(response=>{
              toast.success("Ingreso Correctamente", {
                position: toast.POSITION.BOTTOM_CENTER
              });
          
             setToken(response.data.usuario.idCliente,"cliente");
              history.push("/Platos")
              dispatch(verificarAuthenticacion(true))
            }).catch(error=>{
              toast.error("Verificar Email y Password", {
                position: toast.POSITION.BOTTOM_CENTER
              })
            })
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <TextInput
                type="email"
                placeholder="Ingrese Email"
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
              <Button type="submit" variant="danger">
                Iniciar
              </Button>
            </form>
          )}
        </Formik>
            <div style={{margin:'auto'}}>
            <p 
            className="register_label"
            onClick={()=>history.push("/Register")}
        >Register</p>
            </div>
      </CardLogin>
        </div>
      );
}
 
export default withRouter(Login);