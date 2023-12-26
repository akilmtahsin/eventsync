import EventsCard from "../../components/Cards/EventsCard";
import PaymentsCard from "../../components/Cards/PaymentsCard";
import SpeakersCard from "../../components/Cards/SpeakersCard";
import UserCard from "../../components/Cards/UserCard";


export default function OrganizerDashboard() {
  return (
    <div className="bg-white flex flex-col shadow-lg p-10">
      <h1 className="font-display font-medium tracking-tighter text-blue-600 text-3xl p-10">
        Organizer Dashboard
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
        <EventsCard cardName="Total Events " number="13"/>
        <SpeakersCard cardName="Total Speakers" number="43"/>
        <UserCard cardName="Users Enrolled" number="21"/>
        <PaymentsCard cardName="Payments Made" number="13"/>
      </div>
    </div>
  );
}
