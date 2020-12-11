import React, { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import {deleteToken} from "../../Api/token"
import Usuario from "../../Api/Usuario"

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const history = useHistory();
  React.useEffect(()=>{
  },[])

  const logout = ()=>{
    deleteToken("administrador");
    //uso de redirect
    console.log("administrador ...")
    history.push("/administrador")
  }
  return (
    <>
      <div className="navbar">
        <div className="header">
          <Link to="#" className="menu-bars">
            <i class="fas fa-bars" onClick={showSidebar}></i>
          </Link>
          <div className="data-header">
            {/* <p className="nav_link_dashboard">Dash166</p> */}
            {/* <p  className="nav_link_dashboard" onClick={()=>logout()}>Logout</p> */}
          </div>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <i class="fas fa-times"></i>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <i className={item.icon}> </i>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
