import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/contextProvider";

export default function Guestlayout(){

 const {token} = useStateContext()
 if(token){
  return <Navigate to = "/"/>
 }
  return(
    <div>
      <h1>
        Layout For Guest
        <Outlet/>
      </h1>
    </div>
  )
}

