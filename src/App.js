import "./App.css";
import Forms from "./Components/FinalForm/Formss";
// import Login from "./Components/Login";
import Sign from "./Components/Sign";
// import Page from "./Components/Page";
import Uploads from "./Components/Uploads/Uploads";
import Slides from "./Components/SlideNav/Slides";
import Popup from "./Components/FinalForm/Popup";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ErrorBoudry from "./Components/ErrorBoundry/ErrorBoudry";
import LazyLoad from "./Components/LazyLoad/LazyLoad";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Suspense } from "react";

const Page = LazyLoad(()=>import('../src/Components/Page'));
const Login = LazyLoad(()=>import('../src/Components/Login'));


const  App=()=>{
  console.log(process.env.REACT_APP_SERVER_URL,"urlll")

  return (
    <>
   <ErrorBoudry>
     <Slides/>
      <BrowserRouter>
       <Suspense fallback={<h1>Loading...</h1>}> 
        <Routes>    
           
          <Route path="/" element={<Sign />} />
          <Route path="/popup" element={<Popup/>}/>
          <Route path="/Login" element={<Login />} />
          {/* <Route path="/Page" element={<Page />} /> */}
          <Route path="/Upload" element={<Uploads/>}/>
          <Route path="/Forms" element={<Forms/>}/>
          <Route path="/Page" element={
          <PrivateRoute>
             <Page/>
          </PrivateRoute>}/>
        </Routes>
        </Suspense>  

      </BrowserRouter>
      </ErrorBoudry>
    </>
  );
}

export default App;
