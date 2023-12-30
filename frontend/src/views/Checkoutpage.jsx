import { useState } from 'react';

const CheckoutPage = ({ eventName, eventVenue }) => {
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleCheckout = () => {
    // Implement actual checkout logic, e.g., connect to a payment gateway
    // and submit the user's details and payment information.
    console.log('Processing payment:', userData);
  };

  return (
    <div className="container min-h-screen mx-auto mt-8">
      <h1 className="font-display text-4xl font-sans tracking-tighter text-blue-600 sm:text-5xl p-14">Check Out</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Event Details</h2>
        <p>Event: {eventName}</p>
        <p>At: {eventVenue}</p>
      </div>

      <form>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">User Details</h2>
          <label className="block text-sm font-medium text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={userData.fullName}
            onChange={handleInputChange}
            className="form-input mt-1 block w-full"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className="form-input mt-1 block w-full"
            required
          />
        </div>

       

        <button
          type="button"
          onClick={handleCheckout}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
