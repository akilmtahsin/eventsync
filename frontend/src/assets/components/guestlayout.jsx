import { Outlet } from "react-router-dom";

export default function Guestlayout(){
  return(
    <div>
      <h1>
        Layout For Guest
        <Outlet/>
      </h1>
    </div>
  )
}

