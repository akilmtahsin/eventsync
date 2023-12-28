//list of created events with status approved

import { OrganizerEventRejected } from "../../components/Tables/OrganizerEventRejected";


const RejectedEvents = () => {
  return (
    <div>
      <div className="bg-white flex flex-col shadow-lg p-10">
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-display font-medium tracking-tighter text-blue-600 text-3xl p-10">Events</h1>
        

        </div>
        <OrganizerEventRejected/>
    </div>
    </div>
  )
}

export default RejectedEvents;