import React from "react"
import Navbar from "../../components/Navbar/navbar"
import PublicRouter from "../../Router/PageRouter/PublicRouter"
import PrivateRoute from "../../Router/PageRouter/PrivateRouter"
import Footer from "../../components/Footer/footer"
//public pages
import About from "./public/About";
import LogIn from "./public/Login";
import Home from "./public/Home";
import Register from "./public/Register";
//private pages
import Platos from "./private/Platos"
import Managment from "./private/Managment"
import DetalleOrden from "./private/DetalleOrden"
import OrderComplete from "./private/OrderComplete"

import {BrowserRouter as Router,Switch,Route} from "react-router-dom"


const Cliente = () => {
    // const rutas=[
    //     {id:1,path:"/",component:<Home/>},
    //     {id:2,path:"/About",component:<About/>},
    //     {id:3,path:'/IniciarSession',componente:<LogIn/>},
    //     {id:4,path:'/Register',componente:<Register/>},
    //     {id:5,path:'/Plato',componente:<Platos/>},
    //     {id:6,path:'/Managment',componente:<Managment/>}
    // ]
    const notfound = ()=>{
        return(
            <div>not found</div>
        )
    }

    return (
        <Router>

            <Navbar/>
            <Switch>
                {/* public router */}
               <PublicRouter component={Home} path="/" exact/>
               <PublicRouter component={About} path="/About" />
               <PublicRouter component={LogIn} path="/IniciarSession"  exact/>
               <PublicRouter component={Register} path="/Register" />
              
                {/* private router*/}
                <PrivateRoute component={Managment} path="/Managment" exact/>
                <PrivateRoute component={Platos} path="/Platos" exact/>
                <PrivateRoute component={OrderComplete} path="/Orden" />
                <PrivateRoute component={DetalleOrden} path="/Detalle" exact/>
                <Route path="*" component={notfound} />
            </Switch>
            <Footer/>
        </Router>
      );
}
 

export default Cliente;