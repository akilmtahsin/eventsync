import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { cookies } from '../../config/cookies';
import toast from 'react-hot-toast';
import {  NavLink } from 'react-router-dom';

export function PricingCard({
  eventBannerUrl,
  paymentAmount,
  paymentStatus,
  eventStart,
  eventId,
}) {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [registrationResult, setRegistrationResult] = useState(null);
  const [data, setData] = useState('');
  
  const commonButtonProps = {
    size: "lg",
    color: "white",
    className: "hover:scale-[1.02] focus:scale-[1.02] active:scale-100",
    ripple: false,
    fullWidth: true,
  };

  function calculateTimeRemaining() {
    const now = new Date();
    const start = new Date(eventStart);

    const difference = start - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (difference <= 0) {
      // Event has already started
      return 'Registration time is over';
    }

    return `${days} day${days > 1 ? 's' : ''} left`;
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000); // Update every minute

    return () => clearInterval(timerInterval);
  }, [eventStart]);

  const handleTicketIssue = async (e) => {
    e.preventDefault();
    

    try {
    
      const response = await fetch(
        'http://localhost:8000/api/ticket/issue ',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${cookies.get('user_token')}`,
          },
          body: JSON.stringify({
            eventId,
            paymentAmount,
          }),
        }
        
      );

      const data = await response.json();

     setData(data);


      if (response.ok) {
        toast.success('Successfully created ticket.');
        setRegistrationResult(data.ticket);
        console.log('Ticket ID:', data.ticket);
        <NavLink to={`/ticket/view/${registrationResult}`} className="inline-block"/>
        
     
       
      } else if(response.status===400) {
        setRegistrationResult(data.ticket);
        toast.error('User already registered');
      }
      else{
        toast.error('Error Creating Ticket',response.statusText);
      }
    } catch (error) {
      console.error('Error Creating Ticket:', error.message);
    }
  };



  return (
    <Card
      color="gray"
      variant="gradient"
      className="w-full max-w-[20rem] h-auto p-8"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <img
          className="h-[140px] w-full object-cover object-center"
          src={eventBannerUrl}
          alt="eventBanner"
        />
      </CardHeader>
      <CardBody className="p-0">
        <Typography
          variant="h5"
          color="white"
          className="mt-6 flex justify-center items-center gap-1 text-7xl font-normal"
        >
          {paymentStatus === 'paid' ? (
            <p>
              <span className="mt-2 text-4xl">৳</span>
              <span className="text-5xl font-bold text-white">
                {paymentAmount}
              </span>
            </p>
          ) : (
            <p className="text-5xl font-bold">Free</p>
          )}
        </Typography>
      </CardBody>
      <CardFooter className="mt-12 p-0 flex flex-col gap-y-4 items-center">
  <Chip color="amber" value={timeRemaining} className="rounded-full" />
  {timeRemaining !== 'Registration time is over' && (
    <>
      
        <Button
          {...commonButtonProps}
          onClick={handleTicketIssue}
        >
          Get Tickets
        </Button>
      
       {registrationResult && (
         <NavLink to={`/ticket/view/${registrationResult}`} className="inline-block">
        <Button
         {...commonButtonProps}
        
         
       >
         View Ticket
       </Button>
         </NavLink>
       ) }
      
    </>
  )}
</CardFooter>

    </Card>
  );
}
