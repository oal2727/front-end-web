import React from "react"
import PublicRouter from "./PageRouter/PublicRouter"
// import PrivateRoute from "./PageRouter/PrivateRouter"
import Cliente from "../views/Cliente"
// import Administrador from "../views/Administrador"
import {BrowserRouter as Router,Switch,Redirect,Route} from "react-router-dom"
// import AdministradorRouter from "../Router/administrador"
import ProductoContainer from "../views/Administrador/private/Producto/ProductoContainer"
import AppAdministrador from "../views/Administrador/App" //dashboard app
import AdministradorLogin from "../views/Administrador"
import {isLoginUsuario} from "../Api/token"
 //page don't exists
// import PageNotFound from "../views/PageNotFound"
//trabjar por mientras
// import OrdenesContainer from "../views/Administrador/private/Ordenes/OrdenesContainer"
// import DetailOrdenes from "../views/Administrador/private/Ordenes/DetailOrdenes"
// import OrdenFinalize from "../views/Administrador/private/Ordenes/OrdenFinalize"


const Initial = () => {
    //RUTAS QUE TODAS LAS PERSONAS TIENEN ACCESO
    const [url,setUrl] = React.useState("")
    const [url2,setUrl2 ] = React.useState("");
    React.useEffect(()=>{
        const url = document.URL.split("/")[3]
        // const urlData2 = document.URL.split("/")[4]
        console.log("url 1 " + url)
        // console.log("url 2 " + urlData2)
        setUrl(url)
        // setUrl2(urlData2)
        console.log(url);
    },[])

    return (
        <div>
             {/* <Cliente/> */}
                {/* <AppAdministrador/> */}
             {
               url === "administrador" ?
              // <Router>
              //   {
              //     isLoginUsuario() ? 
              //       <AppAdministrador/>
              //     :
              //    <Switch>
              //      <PublicRouter component={AdministradorLogin} path="/administrador" exact/>
              //   </Switch> 
              //   }
              // </Router>
                <AppAdministrador/> 
               :
               <Cliente/>
             }
      
          
           
              {/* <PublicRouter component={Cliente} path="/" exact/> */}
              {/* <PublicRouter component={AppAdministrador} path="/administrador" exact/> */}
        </div>
      );
}
 
export default Initial;