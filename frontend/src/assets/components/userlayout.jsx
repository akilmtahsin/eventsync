import { Outlet } from "react-router-dom";

export default function Userlayout(){
  return(
    <div>
      <h1>
        Layout For User
        <Outlet/>
      </h1>
    </div>
  )
}

