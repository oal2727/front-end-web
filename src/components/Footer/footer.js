import React from "react"

const Footer = ()=>{
    return(
  <footer>
    <div className="footer-container">
     <div className="box-footer">
       <p className="title-box">Siguenos en Nuestras Redes Sociales</p>
       <div className="box-social">
         <i id="icon_social" className="fab fa-facebook-f"></i>
         <i id="icon_social" className="fab fa-whatsapp"></i>
         <i id="icon_social" className="fab fa-instagram"></i>
       </div>
    </div>
    
    <div className="box-footer">
      <p className="title-box">Acerca de la Plataforma</p>
      <div className="box-about">
        <p>Nosotros</p>
          <p>Terminos y Condiciones</p>
          <p>Politica de Privacidad</p>
      </div>
    </div>
    
    <div className="box-footer">
      <p className="title-box">Hora de Atencion</p>
      <div className="box-atencion">
        <p>Lunes 9:00-10:00pm</p>
        <p>Lunes 9:00-10:00pm </p>
        <p> Lunes 9:00-10:00pm</p>
      </div>
  </div>
    </div>
    <div className="copyright">
      <hr className="copyright-line"/>
      <p> Todos los Derechos Reservados | 2020</p>
    </div>
  </footer>
    )
}
export default Footer;