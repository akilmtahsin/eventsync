import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/contextProvider";

export default function Admin(){
  const {user, token} = useStateContext()
 if (!token){
  

  return <Navigate to = "/login"/>
 }
  return(
    <div>
      <h1>
        Admin Layout
        <Outlet/>
      </h1>
    </div>
  )
}

