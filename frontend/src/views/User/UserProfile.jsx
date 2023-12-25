import Profile from "../../components/Profile";
import { UserEditDialog } from "../../components/Dialogs/UserEditDialog";

export default function UserProfile(){
  return(
    <div className="bg-white flex flex-col shadow-lg p-10">
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-display font-medium tracking-tighter text-blue-600 text-3xl p-10">User Information</h1>
          <UserEditDialog/>
        </div>
        <Profile/>
    </div>
  )
}

 