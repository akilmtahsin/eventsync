//list of created events with status approved
import { EventCreationDialog } from "../../components/Dialogs/EventCreationDialog";
import OrganizerEventList from "../../components/Tables/OrganizersEventList";




const CreatedEvents = () => {
  return (
    <div>
      <div className="bg-white flex flex-col shadow-lg p-10">
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-display font-medium tracking-tighter text-blue-600 text-3xl p-10">Events</h1>
          <EventCreationDialog/>

        </div>
        <OrganizerEventList/>
    </div>
    </div>
  )
}

export default CreatedEvents;