import { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Button,
  Avatar,
} from '@material-tailwind/react';

const SpeakerCard = ({
  id,
  imageUrl,
  name,
  designation,
  rating,
  numberOfRatings,
  details,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [data, setData] = useState([]);
  const [latestEvents, setLatestEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/admin/get-speakerevent/${id}`,
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

          const eventsWithDifference = data
            .filter((event) => event.status !== 'pending')
            .map((event) => {
              const eventDate = new Date(event.eventStart);
              const differenceInMilliseconds = Math.abs(
                eventDate - currentDate
              );
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

  const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  return (
    <div>
      <Card
        onClick={handleOpen}
        className="w-56 h-96 cursor-pointer hover:bg-blue-100 "
      >
        <CardHeader floated={false} className="h-36 object-cover shadow-none">
          <img src={imageUrl} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {designation}
          </Typography>
        </CardBody>
        
        
      </Card>
      <Dialog open={open} handler={handleOpen}>
        <div className="flex flex-col items-center ng-col">
          <DialogHeader className="text-center">{name}</DialogHeader>
          <Avatar src={imageUrl} alt="avatar" size="xxl" />
        </div>
        <DialogBody>
  <div>
    <p>{details}</p>
    <div>
      <h1 className='text-bold text-black mt-2'>Upcoming Events</h1>
      <div>
        {/* Map and render the list of upcoming events */}
        {latestEvents.length > 0 ? (
          latestEvents.map((event) => (
            <div key={event._id} className="event-item">
              {/* Render event details as needed */}
              <h2>{event.eventName}</h2>
              <p>{formatDate(event.eventStart)}</p>
              <hr />
            </div>
          ))
        ) : (
          <div>
            <p>No upcoming events</p>
          </div>
        )}
      </div>
    </div>
  </div>
</DialogBody>

        <DialogFooter>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};



export default SpeakerCard;


