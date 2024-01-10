// import {
//   Chip,
//   Dialog,
//   DialogHeader,
//   DialogFooter,
//   DialogBody,
//   Avatar,
//   Button,
// } from '@material-tailwind/react';

import { Chip } from '@material-tailwind/react';
import { PricingCard } from '../components/Pricing';
import  SpeakerList  from '../components/Tables/SpeakerList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function EventDetails() {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/admin/get-event/${id}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.ok) {
          const eventData = await response.json();
          setData(eventData);
          
        }
        console.error('Error fetching event data:', response.statusText);
      } catch (error) {
        console.error('Error fetching event data:', error.message);
      }
    };

    fetchEvents();
  }, [id]);

 

  const handleOpen = () => setOpen(!open);

  const startDate = new Date(data.eventStart).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
    // second: 'numeric', // Optionally include seconds
});

const endDate = new Date(data.eventEnd).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
    // second: 'numeric', // Optionally include seconds
});

const speakerIds = Array.isArray(data.speakers) ? data.speakers.map(speaker => speaker.id) : [];

console.log(speakerIds)


  return (
    <div>
      {/* <Dialog open={open} handler={handleOpen}>
          <div className="flex flex-col items-center">
            <DialogHeader className="text-center">SpeakerName</DialogHeader>
            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl" />
          </div>
          <DialogBody>
           Speaker Details Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis dicta laudantium doloremque soluta mollitia. Aspernatur neque magnam est quaerat consequuntur exercitationem vitae fuga tempora, qui, nulla ipsam ea dicta, accusantium libero sint!
          </DialogBody>
          <DialogFooter>
      
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Close</span>
            </Button>
          </DialogFooter>
        </Dialog> */}

      <div className="grid grid-cols-4">
        <div className="max-w-[900px]  col-span-3">
          <div className=" w-full bg-gray-200 rounded-xl p-4 flex flex-col flex-wrap">
            <div className="flex gap-2 my-2">
              <Chip
                variant="ghost"
                color="green"
                size="sm"
                value={data.paymentStatus}
                icon={
                  <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />
                }
              />
              <Chip
                variant="ghost"
                color="green"
                size="sm"
                value={data.eventType}
                icon={
                  <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />
                }
              />
            </div>
            <h1 className="text-3xl text-black font-bold">{data.eventName}</h1>
            <div className="flex justify-start gap-2" onClick={handleOpen}>
              <p className="">By</p>{' '}
              <p
                className="cursor-pointer underline font-bold font-sans text-blue-900"
                href=""
              >
                {data.createdBy ? (
                  <span>{data.createdBy}</span>
                ) : data.organizer ? (
                  <span>{data.organizer}</span>
                ) : (
                  <span>No creator information available</span>
                )}
              </p>
            </div>
            <div className="flex justify-start items-center gap-x-1 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xl p-2">
                {startDate} to {endDate}
              </p>
            </div>
            <div className="flex justify-start items-center gap-x-1 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xl p-2">{data.eventVenue}</p>
            </div>
            <div className="flex justify-start items-center gap-x-1 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xl p-2">
                <span>{data.eventVacancy}</span> Seats
              </p>
            </div>
            <div className="flex justify-start">
              <div className="flex justify-start items-star gap-x-1 mt-1">
                <div className="mt-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-xl p-2">Speakers:</p>
              </div>
              <div className="flex flow-col justify-start">
                <SpeakerList speakerIds={speakerIds} />
              </div>
            </div>
          </div>
          <div className=" w-full rounded-xl mt-3">
            <h1 className="text-3xl font-bold ">Event Details</h1>
            <hr className=' mb-5' />
            <p className="text-xl">{data.eventDetails}</p>
           
          </div>
        </div>
        <div className="col-span-1">
          <PricingCard
            eventBannerUrl={data.eventBannerUrl}
            paymentAmount={data.paymentAmount}
            paymentStatus={data.paymentStatus}
            eventStart={data.eventStart}
            eventId={data._id}
          />
        </div>
      </div>
    </div>
  );
}
