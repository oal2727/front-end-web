import React from "react"

const Orden = ()=>{
    return(
        <div className="orden-finalize-box">
          <div className="container-orden-finalize">
        <div className="orden-head-detail">
          <p style={{color:"blue"}}>Orden #294</p>
          <p style={{color:"green"}}>Total : 280.00</p>
          </div>
          
          <p style={{color:"red"}}>Estado de Orden</p>
          
         <div className="order-finalize-body">
           <p>Detalle de Orden</p>
           <div className="dual-box-detail">
             <p>Total de Productos adquiridos :15 </p>
                          <p>Total de Productos adquiridos :20 </p>
           </div>
           <div className="dual-box-detail">
             <p>Costo Total de Pedido :15 </p>
                          <p>Metodo de Pago : en efectivo </p>
           </div>
           <div className="dual-box-detail">
             <p className="direction-orden-finalize">Direccion de entrega: Jr de la union </p>
                          <p>Costo Adicional por envio : S./100</p>
           </div>
          </div>
            
          </div>
        </div>
    )
}
export default Orden;