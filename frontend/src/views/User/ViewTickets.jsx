import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { cookies } from '../../../config/cookies';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ViewTickets = () => {
  const { ticketId } = useParams();
  const [ticketDetails, setTicketDetails] = useState(null);

  const getUserIdFromToken = () => {
    const userToken = cookies.get('user_token');

    if (userToken) {
      try {
        const decodedToken = jwtDecode(userToken);

        // Assuming your token has a property named 'userRole'
        const userId = decodedToken.id;

        if (userId) {
          // Now you have the user role

          return userId;
        } else {
          console.error('User id not found in the token');
        }
      } catch (error) {
        console.error('Error decoding token:', error.message);
      }
    } else {
      console.error('Not Authorized');
    }
  };

  // Call the function to get the user role
  const userId = getUserIdFromToken();
  console.log(userId);

  useEffect(() => {
    const fetchTicketDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/ticket/view/${ticketId}`
        );
        if (response.ok) {
          const data = await response.json();
          setTicketDetails(data.ticket);
        } else {
          console.error('Error fetching ticket details:', response.statusText);
          toast.error('Error fetching ticket details', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching ticket details:', error.message);
      }
    };

    fetchTicketDetails();
  }, [ticketId]);

  const startDate = ticketDetails?.eventDate
  ? new Date(ticketDetails.eventDate).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: 'numeric',
      // second: 'numeric', // Optionally include seconds
    })
  : 'Loading...';

  

const handlePrint = () => {
  const ticketDetailsDiv = document.getElementById('ticketDetails');

  html2canvas(ticketDetailsDiv, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('ticket.pdf');
  });
};

  

  return (
    <div className="h-screen">
      <h1 className="font-display font-medium tracking-tighter text-blue-600 text-3xl p-10">
        View Ticket
      </h1>
      <div className='flex justify-end'>
        <button onClick={handlePrint} className="bg-green-500 text-white px-4 py-2 mt-4 mb-3 rounded-md">
                Print Ticket
              </button>
      </div>
      <dvi>
        {ticketDetails ? (
          <div id="ticketDetails" className='h-[24rem] w-[60rem] bg-blue-100 p-8 rounded-xl'>
            <h2 className='text-3xl text-center mb-7'>Ticket Details</h2>
            <p className='text-lg font-mono mt-2'>Ticket ID: <span className='font-bold font-sans'>{ticketDetails._id}</span></p>
            <p className='text-lg font-mono  mt-2' >Event: <span className='font-bold font-sans' >{ticketDetails.eventName}</span></p>
            <p className='text-lg font-mono  mt-2' >Event Date and Time:  <span className='font-bold font-sans' >{startDate}</span></p>
            <p className='text-lg font-mono  mt-2' >Event Venue: <span className='font-bold font-sans' >{ticketDetails.eventVenue}</span></p>
            <p className='text-lg font-mono  mt-2' >Event Link: <span className='font-bold font-sans' >{ticketDetails.eventLink}</span></p>
            <p className='text-lg font-mono  mt-2' >Ticket Price: <span className='font-bold font-sans' >{ticketDetails.ticketPrice}</span></p>
            <p className='text-lg font-mono  mt-2 mb-4 inline'  >The ticket is electronically generated for: </p>

            <span className='font-bold text-xl font-sans ml-2'>
              {ticketDetails.registeredUsers.map((user) =>
                user._id === userId ? user.username : null
              )}
            </span>
          </div>
        ) : (
          <p>Loading ticket details...</p>
        )}
      </dvi>
    </div>
  );
};

export default ViewTickets;
