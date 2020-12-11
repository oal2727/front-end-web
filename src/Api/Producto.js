import Api from "../Api/api"
export default{
    get(){
        return Api().get("/v1/producto")
    },
    post(data){
        return Api().post("/v1/producto",data)
    },
    delete(id){
        return Api().delete(`/v1/producto/${id}`)
    },
    update(data){
        return Api().put(`/v1/producto/${data.id}`,data)
    },
    
    listInitialize(){
        return Api().get('/v1/producto/initial')
    },
  
}