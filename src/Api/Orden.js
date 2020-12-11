import Api from "../Api/api"
export default{
  
    detailOrden(id){
        return Api().get(`/v1/detalle/orden/${id}`)
    },
   
    //ORDEN EN ENTREGA
    get(){
        return Api().get("/v1/orden")
    },
    // EN PROCESO
    ordenesEnProceso(){
        return Api().get("/v1/order/process")
    },
    //CAMBIA EL ESTADO DE PROCESO A ENTREGA POR EL REPATRTIDOR QUE SE ASIGNA
     ordenesEnEjecucion(){
        return Api().get("/v1/order/execution")
    },
    //ORDEN FINALIZADO
    ordenesFinalizadas(){
        return Api().get("/v1/order/finalize")
    },
    zonaDeReparto(){
        return Api().get("/v1/zonadereparto")
    },

    crearOrden(data){
        return Api().post("/v1/orden",data)
    },
    crearDetalleOrden(data){
        return Api().post("/v1/detalleorden",data)
    },
    //actualizar estados
    //actualizar estado a "EN PROCESO"
    updateStateProcess(data){
        return Api().post('/v1/orden/state/process',data)
    },
    //actualizar estado a "EN ENTREGA"
    ordenesEnEejecucion(data){
        return Api().post('/v1/orden/state/execution',data)
    },
    updateOrdenesFinalizadas(data){
        return Api().post('/v1/orden/state/finalize',data)
    },
    tipodePago(){
        return Api().get('/v1/order/tipodepago')
    }
}