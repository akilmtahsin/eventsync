//can download tickets
//rate button and rate event as well as speaker
//list of event with status ongoing including this.user.id
//if the event is over then user can rate

import UserEventList from "../../components/Tables/UserEventList"



const EnrolledEvent = () => {
  return (
    <div>
      <div className="bg-white flex flex-col shadow-lg p-10">
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-display font-medium tracking-tighter text-blue-600 text-3xl p-10">Events</h1>

        </div>
        <UserEventList/>
    </div>
    </div>
  )
}

export default EnrolledEvent
