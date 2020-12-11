import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {isLoginUsuario} from '../../Api/token'

const PrivateRoute = ({component:Component,...rest})=>{

    return(
        <Route {...rest} render={(props) => (
            isLoginUsuario()
                ? <Component {...props} />
                  : <Redirect path="/IniciarSession"/>
              )} />
    )
}
export default PrivateRoute;

