import { NavLink } from "react-router-dom";
import { EventCard } from "./EventCard";

export default function EventsSection() {
  return (
    <div className="flex flex-col items-center mt-10 max-w-[900px] mx-auto h-screen mb-5">
      <h2 className="self-start font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
        Upcoming Events
      </h2>
      <div className="flex flex-row gap-y-6 pt-7">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      <NavLink
        to="/events"
        className="w-[120px] inline-flex justify-between rounded-full text-blue-500 px-4 py-2 text-base font-semibold border-[1px] border-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
      >
        View All
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </NavLink>
    </div>
  );
}
