import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';

export function EventEditDialog() {
  const [speakers, setSpeakers] = useState([{ name: '', designation: '' }]);
  const [open, setOpen] = React.useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');

  const handleOpen = () => setOpen(!open);

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
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className=" h-16 text-lg bg-green-800 hover:opacity-90 flex items-center -z-4 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-5 h-5 mr-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Add New Event
      </Button>
      <Dialog size="xxl" open={open} handler={handleOpen}>
        <DialogHeader>Add Events</DialogHeader>
        <DialogBody className="h-[700px] overflow-y-scroll">
          <form action="POST" onSubmit={handleSubmit}>
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2.5 block text-black dark:text-white">
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
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2.5 block text-black dark:text-white">
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
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2.5 block text-black dark:text-white">
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
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2.5 block text-black dark:text-white">
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
                    <label className="mb-2.5 block text-black dark:text-white">
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

            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2.5 block text-black dark:text-white">
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
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2.5 block text-black dark:text-white">
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
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6">
                {speakers.map((speaker, index) => (
                  <div key={index} className="w-full">
                    <label className="mb-2.5 block text-black dark:text-white">
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
                    <label className="mb-2.5 block text-black dark:text-white">
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
                ))}
              </div>
            </div>

            <div className="p-6.5">
              <button
                type="button"
                className="bg-green-400 text-white py-2 px-4 rounded mt-4"
                onClick={handleAddSpeaker}
              >
                Add More Speakers
              </button>
              
            </div>
          </form>
        </DialogBody>
        <DialogFooter>
          <div className="flex justify-between w-56 ">
            <Button variant="gradient" color="red" onClick={handleOpen}>
              <span>Cancel</span>
            </Button>
            <Button type="submit" variant="gradient" color="green" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}
