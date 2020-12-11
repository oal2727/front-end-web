import React from 'react'
import {Route} from 'react-router-dom'

const PublicRouter = ({component:Component,...rest})=>{

    return(
        <Route {...rest} render={(props) => (
                  <Component {...props}  />
              )} />
    )
}
export default PublicRouter;

