import React ,{useEffect}from 'react'

import {
  useLocation, useNavigate
} from 'react-router-dom';
import { cookies } from '../../config/cookies';
import toast from 'react-hot-toast';



const PaymentProcessing = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const order_id = queryParams.get('order_id');
  const navigate = useNavigate();


  useEffect(()=>{
  
    
      const verifyPayment = async ()=>{
        const res = await fetch(
          'http://localhost:8000/api/verify-payment ',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              authorization: `Bearer ${cookies.get('user_token')}`,
            },
            body: JSON.stringify({
              order_id
            }),
          }
          
        );

        if(res.ok){
          const data = await res.json();
          generateTicket(data.eventId, data.paymentAmount);

          // console.log(data);
        }

      } 
      verifyPayment();

  },[])


  const generateTicket = async(eventId, paymentAmount)=>{
    try {
      const response = await fetch('http://localhost:8000/api/ticket/issue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${cookies.get('user_token')}`,
        },
        body: JSON.stringify({
          eventId,
          paymentAmount,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Successfully created ticket.');
        navigate(`/ticket/view/${data.ticket}`);
      }    
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>

      Generating.....
    </div>
  )
}

export default PaymentProcessing
