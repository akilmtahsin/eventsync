import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";




export default function DefaultLayout(){


 
  return(
    <>
      <div className="">
      
    
      <div className="flex h-screen overflow-hidden ">
        <div className="relative flex flex-1 flex-col overflow-y-auto  overflow-x-hidden gap-6  ">
          
         <NavBar/>
         <div className="mx-auto max-w-screen-2xl ">
        <Outlet/>
            </div>
         
          <footer>
            <Footer/>
          </footer>
        </div>
        
      </div>
      
    </div>
    </>
  )
}


