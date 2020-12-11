import cookie from 'js-cookie'
export const isLoginUsuario = () =>{
    if(cookie.get('tokenCliente')){
        return true
    }
    if(cookie.get('tokenAdministrador')){
        return true
    }
    return false
}

export const setToken = (data,tipo)=>{
    if(tipo === "cliente"){
        return cookie.set('tokenCliente',data,{expires:30})
    }else{
        return cookie.set('tokenAdministrador',data,{expires:30})
    }
}

export const deleteToken = (tipo)=>{
   if(tipo === "cliente"){
        return cookie.remove('tokenCliente')
   }else{
      return cookie.remove('tokenAdministrador')
   }
}

export const obtenerData=(rol)=>{
    if(rol === "cliente"){
        return cookie.get("tokenCliente")
    }else{
        return cookie.get("tokenAdministrador")
    }
}