//list of created events with status approved

import { AdminEventApproved } from "../../components/Tables/AdminEventAcceptedTable";





const ViewApproved = () => {
  return (
    <div>
      <div className="bg-white flex flex-col shadow-lg p-10">
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-display font-medium tracking-tighter text-blue-600 text-3xl p-10">Events</h1>
        

        </div>
        <AdminEventApproved/>
    </div>
    </div>
  )
}

export default ViewApproved;