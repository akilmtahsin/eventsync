import { Outlet } from "react-router-dom";

export default function Admin(){
  return(
    <div>
      <h1>
        Admin Layout
        <Outlet/>
      </h1>
    </div>
  )
}

