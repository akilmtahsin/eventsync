import { useState } from "react";

export default function EventCreationForm() {
  const [speakers, setSpeakers] = useState([{ name: '', designation: '' }]);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');

  const handlePaymentStatusChange = (value) => {
    setPaymentStatus(value);
    setPaymentAmount('');
  };

  const handleAddSpeaker = () => {
    setSpeakers([...speakers, { name: '', designation: '' }]);
  };

  const handleSpeakerChange = (index, field, value) => {
    const updatedSpeakers = [...speakers];
    updatedSpeakers[index][field] = value;
    setSpeakers(updatedSpeakers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here

    // Reset the form state if needed
    
  };
  return (
    
    <>
      <div className="bg-white flex flex-col shadow-lg p-10">
        <h1 className="font-display font-medium tracking-tighter text-blue-600 text-3xl p-10">
          Create New Event
        </h1>
      
      <div className="flex flex-col justify-between">
      <form action="POST" onSubmit={handleSubmit}>
            <div className="p-3">
              <div className="mb-3 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2 block text-black dark:text-white">
                    Event Name
                  </label>
                  <input
                    type="text"
                    placeholder="Edit Name"
                    required
                    className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-red-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="mb-3 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2 block text-black dark:text-white">
                    Event Details
                  </label>
                  <input
                    type="text"
                    placeholder="Edit Details"
                    className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-red-600 disabled:cursor-default disabled:bg-white "
                  />
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="mb-3 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2 block text-black dark:text-white">
                    Event Type
                  </label>
                  <select required className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-red-600 disabled:cursor-default disabled:bg-white">
                    
                    <option value="seminar">Seminar</option>
                    <option value="webinar">Webinar</option>
                    <option value="conference">Conference</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="mb-3 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2 block text-black dark:text-white">
                    Paid or Unpaid
                  </label>
                  <select
                    className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-red-600 disabled:cursor-default disabled:bg-white"
                    onChange={(e) => handlePaymentStatusChange(e.target.value)}
                    required
                    value={paymentStatus}
                  >
                    <option value="paid">Paid</option>
                    <option value="unpaid">Unpaid</option>
                  </select>
                </div>
                {paymentStatus === 'paid' && (
                  <div className="w-full">
                    <label className="mb-2 block text-black dark:text-white">
                      Payment Amount
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Payment Amount"
                      required
                      className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-red-600 disabled:cursor-default disabled:bg-white"
                      value={paymentAmount}
                      onChange={(e) => setPaymentAmount(e.target.value)}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="p-3">
              <div className="mb-3 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2 block text-black dark:text-white">
                    Event Venue
                  </label>
                  <input
                    type="text"
                    placeholder="Edit Details"
                    className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-red-600 disabled:cursor-default disabled:bg-white "
                  />
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="mb-3 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2 block text-black dark:text-white">
                    Event Banner
                  </label>
                  <input
                    type="file"
                    placeholder="Select a photo"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>
            </div>
            <div className="border-2 border-blue-600 p-3 ">
              <h4 className="mb-3 p-3 font-bold text-xl text-blue-600">Speaker Section</h4>
              <div className="p-3">
                <div className="mb-3 flex flex-col gap-6">
                  {speakers.map((speaker, index) => (
                    <div key={index} className="w-full">
                      <div className="mb-3">
                        <label className="mb-2 block text-black dark:text-white">
                          Speaker {index + 1} Name
                        </label>
                        <input
                          type="text"
                          placeholder={`Speaker ${index + 1} Name`}
                          required
                          className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-red-600 disabled:cursor-default disabled:bg-white"
                          value={speaker.name}
                          onChange={(e) =>
                            handleSpeakerChange(index, 'name', e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2 block text-black dark:text-white">
                          Speaker {index + 1} Designation
                        </label>
                        <input
                          type="text"
                          placeholder={`Speaker ${index + 1} Designation`}
                          required
                          className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-red-600 disabled:cursor-default disabled:bg-white"
                          value={speaker.designation}
                          onChange={(e) =>
                            handleSpeakerChange(
                              index,
                              'designation',
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  ))}
            </div>
              </div>
            </div>

            <div className="p-6 flex justify-between">
              <button
                type="button"
                className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
                onClick={handleAddSpeaker}
              >
                Add More Speakers
              </button>
              <button
                type="submit"
                className="bg-green-400 text-white py-2 px-4 rounded mt-4"
              
              >
                Submit
              </button>
              
            </div>
          </form>
      </div>
      </div>
    </>
  );
}
