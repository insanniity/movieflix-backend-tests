import {isAuthenticated, Role } from '../utils/auth';
import { Redirect, Route } from 'react-router-dom';

type Props ={
    children: React.ReactNode;
    path: string;
    allowedRoutes?: Role[];
}

const PrivateRoute = ({ children, path, allowedRoutes} : Props) => { 
    return (
      <Route 
        path={path}       
        render={({ location }) => {
                if(!isAuthenticated()){
                    return(
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: location }
                            }}
                        />
                    )
                }                   
                return children;
                
            }            
        }
      />
    );
  }

export default PrivateRoute;