import { Routes,Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import UserDetails from "./UserDetails"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";




function App() {
  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: true,
    });
  }, []);

  return (
    <>
       
            <Routes>
              <Route path="/" element={<Dashboard/>}></Route>
              <Route path="/user/:id" element={<UserDetails/>}></Route>
            </Routes>
      
    </>
  )
}

export default App
