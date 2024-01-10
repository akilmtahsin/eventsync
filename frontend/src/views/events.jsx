import { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';

export default function Events() {
  const [data, setData] = useState([]);
  const [latestEvents, setLatestEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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

          const eventsWithDifference = data.map((event) => {
            const eventDate = new Date(event.eventStart);
            const differenceInMilliseconds = Math.abs(eventDate - currentDate);
            return { ...event, differenceInMilliseconds };
          });

          // Sorting events by the calculated difference in ascending order
          const sortedEvents = eventsWithDifference.sort(
            (a, b) => a.differenceInMilliseconds - b.differenceInMilliseconds
          );

          setLatestEvents(sortedEvents);
        }
        console.error('Error fetching event data:', response.statusText);
      } catch (error) {
        console.error('Error fetching event data:', error.message);
      }
    };

    fetchEvents();
  }, []);

  const filterEvents = (events, query) => {
    return latestEvents.filter((event) =>
      event.eventName.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEvents = filterEvents(latestEvents, searchQuery);

  return (
    <div className="mx-7 -my-20">
      <div className="flex justify-between">
        <h1 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl p-14 mt-5">
          Explore Events
        </h1>
        <div className="h-4 mt-20">
          <input
            className="rounded-full"
            type="text"
            placeholder="Search by Event Name"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>
      </div>
      

      <div className="grid grid-cols-3 gap-5 mb-16">
        {filteredEvents.map((event) => (
          <EventCard
            key={event._id}
            eventName={event.eventName}
            eventBannerUrl={event.eventBannerUrl}
            eventVenue={event.eventVenue}
            id={event._id}
            eventStart={event.eventStart}
          />
        ))}
      </div>
      {filteredEvents.length === 0 && (
        <div className="h-[80vh] w-screen">
          <p className="mx-auto text-7xl mt-4 text-blue-400">
            No events Found...
          </p>
        </div>
      )}
    </div>
  );
}
