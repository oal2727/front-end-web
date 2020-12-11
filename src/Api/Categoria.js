import Api from "../Api/api"
export default{
    get(){
        return Api().get("/v1/categoria")
    },
    delete(id){
        return Api().delete(`v1/categoria/${id}`)
    },
    post(data){
        return Api().post("v1/categoria",data)
    },
    put(data){
        return Api().put(`v1/categoria/${data.IDCATEGORIA}`,data)
    }
}