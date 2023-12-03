import { EventCard } from "../assets/components/EventCard";

export default function EventsGrid() {
  return (
    <div>
      <h1 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl p-14">Upcoming Events</h1>
      <div className="grid grid-cols-4 gap-5">
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