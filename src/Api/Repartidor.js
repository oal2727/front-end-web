import Api from "../Api/api"
export default{
    get(){
        return Api().get("/v1/repartidor")
    },
    delete(id){
        return Api().delete(`v1/repartidor/${id}`)
    },
    post(data){
        return Api().post("v1/repartidor",data)
    },
 
}