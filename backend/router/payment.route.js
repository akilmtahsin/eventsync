const express = require("express");
const router = express.Router();
const shurjopay = require("shurjopay")();
const auth = require("../middleware/auth");
const Payment = require("../model/payment.model");
const Ticket = require("../model/ticket.model");

 shurjopay.config(
  "https://sandbox.shurjopayment.com",
  "sp_sandbox",
  "pyyk97hu&6u6",
  "SP",
  "http://localhost:3000/payment-processing"
);


router.post("/payment", auth, async (req, res) => {
  const {  paymentAmount, eventId  } = req.body;

  shurjopay.makePayment(
    {
      amount: paymentAmount,
      currency: "BDT",
      customer_name: "Shanto",
      customer_address: "Mohakhali",
      client_ip: "102.324.0.5",
      customer_phone: "01517162394",
      customer_city: "Dhaka",
      customer_post_code: "1229",
      order_id:"abc123",
    },
    async (response_data) => {
      await Payment.create({
        amount: paymentAmount,
        eventId,
        userId:req.userId
        ,
        orderId:response_data.sp_order_id,
      })

      res.status(200).json(response_data);
    },
    (error) => {
      res.status(200).json(response_data);
      console.log(error);
    }
  );
});

router.post("/verify-payment", async(req, res) => {
  const { order_id } = req.body;
  try {
    const data = await Payment.findOne({orderId:order_id})

    res.status(200).json(data)
  } catch (error) {
    console.log(error);
  }
});

router.post('/check-ticket',auth,async(req, res)=>{
  try {
    const{eventId} = req.body;
    const id = req.userId

    const existingTicket = await Ticket.findOne({
      event: eventId,
      registeredUsers: id,
    });

    if (existingTicket) {
      // User already has a ticket, update the existing ticket if needed
      // For example, you might want to update some information or just send a message
      return res
        .status(200)
        .json({
          message: "User already registered for the event",
          ticket: existingTicket._id,
        });
    }


    res.status(404).json()
    
  } catch (error) {
    res.status(404).json()
  }

})

module.exports = router;
