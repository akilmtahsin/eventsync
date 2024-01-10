import { NavLink } from "react-router-dom";
import  EventCard  from "./EventCard";
import { useEffect, useState } from "react";

export default function EventsSection() {
  


  const [latestEvents, setLatestEvents] = useState([]);

  useEffect(() => {
    const fetchLatestEvents = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/admin/get-all-event');
        if (response.ok) {
          const data = await response.json();
          const currentDate = new Date();

          const eventsWithDifference = data.map(event => {
            const eventDate = new Date(event.eventStart);
            const differenceInMilliseconds = Math.abs(eventDate - currentDate);
            return { ...event, differenceInMilliseconds };
          });

          // Sort events by the calculated difference in ascending order
          const sortedEvents = eventsWithDifference.sort((a, b) => a.differenceInMilliseconds - b.differenceInMilliseconds);

          // Slice the array to get the nearest events (you can adjust the number as needed)
          const slicedNearestEvents = sortedEvents.slice(0, 3);

          setLatestEvents(slicedNearestEvents);
        } else {
          console.error('Error fetching latest events:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching latest events:', error.message);
      }
    };

    fetchLatestEvents();
  }, []);

  


  return (
    <div className="flex flex-col items-center mt-10 mx-auto h-screen mb-5 bg-blue-100 pt-10 rounded-xl">
      <h2 className="self-start ml-10 font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
        Upcoming Events
      </h2>
      <div className=" flex flex-row pt-7">
      {latestEvents.map((event) => (
          <EventCard
            key={event.id} 
            eventName={event.eventName}
            eventBannerUrl={event.eventBannerUrl}
            eventVenue={event.eventVenue}
            eventStart={event.eventStart}
            id={event._id}
          />
        ))}
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
