import { useEffect, useState } from 'react';
import { Chip } from '@material-tailwind/react';
import toast from 'react-hot-toast';

export function AdminEventPending() {
  const [events, setEvents] = useState([]);

  const handleApprove = async (eventId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/admin/approve-event/${eventId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        
        toast.success('Approved event');
  
        
      } else {
        console.error('Error approving event:', response.statusText);
        toast.error('Error approving event');
      }
    } catch (error) {
      console.error('Error approving event:', error.message);
    }
  };
  const handleReject = async (eventId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/admin/reject-event/${eventId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        
        toast.success('Rejected Event');
  
        
      } else {
        console.error('Error rejecting event:', response.statusText);
        toast.error('Error rejecting event');
      }
    } catch (error) {
      console.error('Error rejecting event:', error.message);
    }
  };

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
          const eventData = await response.json();
          // Filter events with status "pending"
          const pendingEvents = eventData.filter(
            (event) => event.status === 'pending'
          );
          setEvents(pendingEvents);
        } else {
          console.error('Error fetching event data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching event data:', error.message);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium bg-blue-800 text-white">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Event ID
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Event Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Event Details
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Organized By
                    </th>

                    <th scope="col" className="px-6 py-4">
                      Payment
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Rating
                    </th>
                    <th scope="col" className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event, index) => (
                    <tr
                      className="border-b dark:border-neutral-500"
                      key={index}
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        {event.eventId}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {event.eventName}
                      </td>
                      <td className="whitespace-wrap px-6 py-4">
                        <div className="w-60 text-justify">
                          {event.eventDetails}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {event.eventType}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {event.createdBy}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="max-w-full flex justify-center">
                          {event.paymentStatus === 'paid' && (
                            <Chip
                              color="orange"
                              value={`${event.paymentAmount} Taka`}
                            />
                          )}
                          {event.paymentStatus === 'unpaid' && (
                            <Chip color="amber" value="Unpaid" />
                          )}
                        </div>
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        {event.status === 'pending' && (
                          <Chip color="amber" value="Pending" />
                        )}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="max-w-full flex justify-center">
                          <Chip color="amber" value={event.rating} />
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className=" max-w-full flex justify-center">
                          <button
                            className="flex gap-x-2 justify-between items-center mr-3 bg-green-500 hover:bg-opacity-90 rounded-full p-3 text-white"
                            onClick={() => handleApprove(event._id)}
                          >
                            <p>Approve</p>
                          </button>
                          <button className="flex gap-x-2 justify-between items-center mr-3 bg-red-500 hover:bg-opacity-90 rounded-full p-3 text-white"
                          onClick={() => handleReject(event._id)}
                          >
                          
                            <p>Reject</p>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
