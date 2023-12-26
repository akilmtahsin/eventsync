import EventsCard from "../../components/Cards/EventsCard";
import OrganizerCard from "../../components/Cards/OrganizerCard";
import PaymentsCard from "../../components/Cards/PaymentsCard";
import SpeakersCard from "../../components/Cards/SpeakersCard";
import UserCard from "../../components/Cards/UserCard";


export default function AdminDashboard() {
  return (
    <div className="bg-white flex flex-col shadow-lg p-10">
      <h1 className="font-display font-medium tracking-tighter text-blue-600 text-3xl p-10">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
        <EventsCard cardName="Total Events Created" number="13"/>
        <OrganizerCard cardName="Total Organizers" number="23" />
        <SpeakersCard cardName="Total Speakers" number="43"/>
        <UserCard cardName="Total Users" number="21"/>
        <PaymentsCard cardName="Payments Made" number="13"/>
      </div>
    </div>
  );
}
