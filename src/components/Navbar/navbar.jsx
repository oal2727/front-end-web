import React from "react";
import { Link } from "react-router-dom";
// import { Menuitems } from "./MenuItems";
import {isLoginUsuario,deleteToken} from "../../Api/token"
import { useSelector, useDispatch } from 'react-redux';
import {verificarAuthenticacion,selectAuthentication} from "../../Reducer/UserSlice"
import {selectProductoManagment,cleanProducts} from "../../Reducer/ManagmentSlicer" 
import Usuario from "../../Api/Usuario"
const Navbar = () => {
  const [toogle, setToogle] = React.useState(true);
  const dispatch= useDispatch()
  const authentication = useSelector(selectAuthentication);
  const totalCart = useSelector(selectProductoManagment)
  React.useEffect(()=>{
    const auth = isLoginUsuario()
    dispatch(verificarAuthenticacion(auth))
  },[])
  // const datome = ()=>{
  //   Usuario.me(data => {
  //     console.log(data)
  //   }).catch(err=>{

  //   })
  // }
  const changeToogle = () => {
    setToogle(!toogle);

  };
  const logout = ()=>{
    deleteToken("jose")
    dispatch(verificarAuthenticacion(false))
    dispatch(cleanProducts())
    Usuario.logout()
  }

  return (
    <nav className="navbar">
      <div className="logo-navbar">
        <i className="fas fa-store" id="logo_icon"></i>
        <span>FoodZone</span>
      </div>
      <div onClick={() => changeToogle()} id="icon_menu">
        <i className={toogle ? "fas fa-bars" : "fas fa-times"}></i>
      </div>
      <ul className={toogle ? "menus-item active" : "menus-item"}>
      <Link className="nav_link" to="/">
        Home
        </Link>
        <Link className="nav_link" to="/About">
        About
        </Link>
       { !authentication ? 
        <Link className="nav_link" to="/IniciarSession">
        Iniciar Session
     </Link>:
     <div>
      <Link className="nav_link"  onClick={()=>logout()}>
          Logout
      </Link>
      <Link className="nav_link" to="/Platos">
      Platos
    </Link>
  </div>

      }
       {/* <Link key={index} to={item.url} className={item.cName}>
              {item.title}
            </Link> */}
        <Link className="nav_link" to="/Managment">
          <i className="fas fa-shopping-cart"></i>
          Cart
          {totalCart.length ? `(${totalCart.length})` : ""}
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
