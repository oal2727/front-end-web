import Api from "../Api/api"
export default{
    login(data){
        return Api().post("/v1/usuario/cliente/login",data)
    },
    loginAdministrador(data){
        return Api().post("/v1/usuario/administrador/login",data)
    },
    Register(data){
        return Api().post("/v1/usuario/cliente",data)
    },
    me(){
        return Api().get("/v1/usuario/me")
    },
    logout(){
        return Api().post("/v1/usuario/logout");
    },
    Pedido(){
        return Api().get("/pedido")
    }

}