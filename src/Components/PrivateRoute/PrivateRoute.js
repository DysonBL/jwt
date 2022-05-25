import { Navigate} from "react-router";

 const PrivateRoute =({children})=>{
    
    const auth= localStorage.getItem('Login');
    return  auth?  children:<Navigate to="/Login"/>

        
 }
export default PrivateRoute