
import {Signup} from "./pages/Signup.tsx";
import {Dashboard} from "./pages/dashboard.tsx";
import {Signin} from "./pages/Signin.tsx";
import{BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path = "/signup" element ={<Signup/>}/>
          <Route path = "/signin" element ={<Signin/>}/>
          <Route path = "/dashboard" element ={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
