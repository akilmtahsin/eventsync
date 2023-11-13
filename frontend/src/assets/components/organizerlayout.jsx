import { Outlet } from "react-router-dom";

export default function Organizerlayout(){
  return(
    <div>
      <h1>
        Layout For Organizer
        <Outlet/>
      </h1>
    </div>
  )
}

