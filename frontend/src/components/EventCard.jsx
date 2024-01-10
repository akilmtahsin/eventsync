import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

import { NavLink } from "react-router-dom";

function EventCard({ id, eventName, eventVenue, eventBannerUrl, eventStart }) {

  const formattedDate = new Date(eventStart).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <Card className="max-w-[24rem] max-h-[24rem] overflow-hidden m-7">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none min-h-[10rem] max-h-[10rem]"
        
      >
        <img
          src={eventBannerUrl}
          alt="Banner"
        />
      </CardHeader>
      <CardBody className="min-h-[10rem]">
        <Typography variant="h4" color="blue-gray">
          {eventName}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {eventVenue}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <Typography className="font-normal">{formattedDate}</Typography>
        <NavLink to={`/events/details/${id}`} className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </NavLink>
      </CardFooter>
    </Card>
  );
}

export default EventCard;
