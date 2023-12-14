import { EventCard } from "../components/EventCard";

export default function Events() {
  return (
    <div className="mx-7 -my-20">
      <h1 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl p-14">Upcoming Events</h1>
      <div className="grid grid-cols-3 gap-5 mb-16">
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
      </div>
    </div>
  );
}