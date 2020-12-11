import axios from 'axios'
import cookie from 'js-cookie'


let BaseApi = axios.create({
    baseURL:"http://localhost:8888/api"
})


let Api = function(){
    let token=cookie.get('token')
    if(token){
        BaseApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    return BaseApi
}

export default Api;