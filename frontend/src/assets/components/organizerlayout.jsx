import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/contextProvider";


export default function Organizerlayout(){

  const {user, token} = useStateContext()
 if (!token){
  return <Navigate to = "/login"/>
 }
  return(
    <div>
      <h1>
        Layout For Organizer
        <Outlet/>
      </h1>
    </div>
  )
}

