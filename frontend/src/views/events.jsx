import { useEffect, useState } from "react";
import  EventCard  from "../components/EventCard";

export default function Events() {

  const [data, setData] = useState([]);
  const [latestEvents, setLatestEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          'http://localhost:8000/api/admin/get-all-event',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setData(data);

          const currentDate = new Date();

          const eventsWithDifference = data.map(event => {
            const eventDate = new Date(event.eventStart);
            const differenceInMilliseconds = Math.abs(eventDate - currentDate);
            return { ...event, differenceInMilliseconds };
          });

          // Sorting events by the calculated difference in ascending order 
          const sortedEvents = eventsWithDifference.sort((a, b) => a.differenceInMilliseconds - b.differenceInMilliseconds);

        
         

          setLatestEvents(sortedEvents);
        }
        console.error('Error fetching event data:', response.statusText);
      } catch (error) {
        console.error('Error fetching event data:', error.message);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="mx-7 -my-20">
      <h1 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl p-14 mt-5">Explore Events</h1>
      <div className="grid grid-cols-3 gap-5 mb-16">
      {latestEvents.map((event) => (
          <EventCard key={event._id} eventName={event.eventName} eventBannerUrl={event.eventBannerUrl} eventVenue={event.eventVenue} id={event._id}  eventStart={event.eventStart} />
        ))}
        
      </div>
    </div>
  );
}