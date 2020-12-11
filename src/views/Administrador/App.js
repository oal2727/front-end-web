import React from "react"
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"
import Dashboard from "./private/Dashboard"
import Categoria from "./private/Categoria"
// import Repartidor from "./private/Repartidor"
import RepartidorContainer from "./private/Repartidor/RepartidorContainer"
import NavbardDashboard from "../../components/Navbar/NavbarDashboard"
import ProductoContainer from "./private/Producto/ProductoContainer"
import OrdenesContainer from "./private/Ordenes/OrdenesContainer"
import Detailordenes from "./private/Ordenes/DetailOrdenes"
import PublicRouter from "../../Router/PageRouter/PublicRouter"
import {isLoginUsuario} from "../../Api/token"
import AsignacionContainer from "./private/Asignacion/AsignacionContainer"
import AdministradorLogin from "../Administrador/index";
import OrdenesFinalize from "./private/Ordenes/OrdenFinalize"
import OrdenEjecucion from "./private/Ordenes/OrdenesEjecucion"

const App = ({url2})=> {
    return(
        <div>
        <Router>
        {/* {
        !isLoginUsuario() ? 
             <PublicRouter component={AdministradorLogin} path="/administrador" exact></PublicRouter> 
         : */}
          <div>
        <NavbardDashboard/>
        <Switch>
        <PublicRouter component={AdministradorLogin} path="/administrador" exact></PublicRouter> 
        {/* <PublicRouter component={AdministradorLogin} path="/administrador"></PublicRouter>  */}
         <PublicRouter component={Dashboard} path="/administrador/dashboard" exact/>
          <Route path="/administrador/categoria" exact>
            <Categoria />
          </Route>
          <Route path="/administrador/repartidor">
            <RepartidorContainer />
          </Route>
          <Route path="/administrador/productos">
            <ProductoContainer />
          </Route>
          <Route path="/administrador/ordenes" exact>
            <OrdenesContainer />
          </Route>
          <Route path="/administrador/ordenes/:id" exact>
            <Detailordenes />
          </Route>
          {/* pagina para las ordenes que estan para entregar */}
          <Route path="/administrador/orden/asignacion">
            <AsignacionContainer />
          </Route>
          {/* <Route path="/administrador/orden/entregando">
            <OrdenEjecucion />
          </Route> */}
          {/* pagina para las ordenes que esten estado finalizado */}
          <Route path="/administrador/orden/finalizados" exact>
            <OrdenesFinalize />
          </Route>
        </Switch>
        </div>
         {/* }  */}
      </Router>
        </div>
    )
}
export default App;