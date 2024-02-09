import { useEffect, useState } from 'react';
import { cookies } from '../../../config/cookies';
import toast from 'react-hot-toast';

export default function EventCreationForm() {
  // const [speakers, setSpeakers] = useState([
  //   { id: '', name: '', designation: '' },
  // ]);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [formData, setFormData] = useState({
    eventName: '',
    eventDetails: '',
    eventType: '',
    paymentStatus: 'unpaid',
    paymentAmount: '0',
    eventVenue: '',
    eventLink:'',
    eventVacancy: '',
    eventStart: '',
    eventEnd: '',
    eventBannerUrl: '',
    speakers: [],
  });

  // const [selectedSpeaker, setSelectedSpeaker] = useState([]);
  
  const handleCheckboxChange =  (e, index) => {
    const speakerId = e.target.value;
    let speakerList = [...formData.speakers];
    if(e.target.checked){
      speakerList.push({id:speakerId})
    }else{
    
      speakerList = speakerList.filter((item)=> item.id!=speakerId)
    }

    setFormData({
      ...formData,
      speakers:speakerList
    })
    

   
    // let speakerList = [...selectedSpeaker];
    // // If the checkbox is checked, add the speaker to the selected speakers
    // if (e.target.checked) {
    //   speakerList[index]=speakerId;
    //    setSelectedSpeaker(speakerList)

    // } else {
    //   speakerList = speakerList.filter((item)=>{
    //     return item.id ==speakerId
    //   });
    //   setSelectedSpeaker(speakerList)
      
    // }
    // setFormData({...formData,
    //   speakers:selectedSpeaker})
  };


  const handlePaymentChange = (e, fieldName) => {
    const { value, type } = e.target;

    // Ensure that the entered value is not negative for numeric input
    const sanitizedValue =
      type === 'number' ? Math.max(0, parseInt(value, 10)) : value;

    if (fieldName === 'paymentStatus') {
      setPaymentStatus(sanitizedValue);
      // If payment status is changed, reset payment amount
      setPaymentAmount('');
    }

    if (fieldName === 'paymentAmount') {
      setPaymentAmount(sanitizedValue);
    }

    setFormData({
      ...formData,
      [fieldName]: sanitizedValue,
    });
  };

  const handleImageFileChange = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      try {
        const reader = new FileReader();

        reader.onload = (e) => {
          const eventBannerUrl = e.target?.result;

          setFormData(() => ({
            ...formData,
            eventBannerUrl,
          }));
        };

        reader.readAsDataURL(file);
      } catch (error) {
        console.error('Error compressing image:', error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    // console.log(formData)

    try {
      const response = await fetch(
        'http://localhost:8000/api/event/create-event',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${cookies.get('user_token')}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log('Successful response:', responseData);
        toast.success('Successfully Created Event');
      } else if (response.status === 400) {
        toast.error('Event Already Exist, Try Different Name.');
        ``;
      } else {
        console.error('Error:', response.statusText);
        toast.error('Event Creation Failed');
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Handle error, show error message, etc.
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    const sanitizedValue =
      type === 'number' ? Math.max(0, parseInt(value, 10)) : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: sanitizedValue,
    }));
  };

  const [data, setData] = useState([]);

  //fetching speaker information
  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/speakers/all', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${cookies.get('user_token')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setData(data);
        }

        console.error('Error fetching speaker data:', response.statusText);
      } catch (error) {
        console.error('Error fetching speaker data:', error.message);
      }
    };

    fetchSpeakers();
  }, []);

  const currentDate = new Date().toISOString().slice(0, 16);

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
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleInputChange}
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
                  <textarea
                    type="text"
                    placeholder="Edit Details"
                    className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-red-600 disabled:cursor-default disabled:bg-white "
                    name="eventDetails"
                    value={formData.eventDetails}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="mb-3 flex flex-col gap-6">
                <div className="w-full">
                  <label
                    htmlFor="eventType"
                    className="mb-2 block text-black dark:text-white"
                  >
                    Event Type
                  </label>
                  <select
                    required
                    className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-red-600 disabled:cursor-default disabled:bg-white"
                    name="eventType"
                    onChange={handleInputChange}
                    value={formData.eventType}
                  >
                    <option value="seminar">Seminar</option>
                    <option value="webinar">Webinar</option>
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
                    required
                    name="paymentStatus"
                    value={paymentStatus}
                    onChange={(e) => handlePaymentChange(e, 'paymentStatus')}
                  >
                    <option value="unpaid">Unpaid</option>
                    <option value="paid">Paid</option>
                  </select>
                </div>
                {paymentStatus === 'paid' && (
                  <div className="w-full">
                    <label className="mb-2 block text-black dark:text-white">
                      Payment Amount
                    </label>
                    <input
                      type="number"
                      placeholder="Enter Payment Amount"
                      required
                      className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-red-600 disabled:cursor-default disabled:bg-white"
                      value={paymentAmount}
                      onChange={(e) => handlePaymentChange(e, 'paymentAmount')}
                      onWheel={(e) => e.target.blur()}
                      name="paymentAmount"
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
                    name="eventVenue"
                    value={formData.eventVenue}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="mb-3 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2 block text-black dark:text-white">
                    Webinar Link
                  </label>
                  <input
                    type="text"
                    placeholder="provide link"
                    className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-red-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    name="eventLink"
                    value={formData.eventLink}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="mb-3 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2 block text-black dark:text-white">
                    Event Date (From)
                  </label>
                  <input
                    type="datetime-local"
                    required
                    className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-red-600 disabled:cursor-default disabled:bg-white"
                    name="eventStart"
                    value={formData.eventStart}
                    onChange={handleInputChange}
                    min={currentDate}
                  />
                </div>
              </div>
            </div>

            <div className="p-3">
              <div className="mb-3 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2 block text-black dark:text-white">
                    Event Date (To)
                  </label>
                  <input
                    type="datetime-local"
                    required
                    className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-red-600 disabled:cursor-default disabled:bg-white"
                    name="eventEnd"
                    value={formData.eventEnd}
                    onChange={handleInputChange}
                    min={currentDate}
                  />
                </div>
              </div>
            </div>

            <div className="p-3">
              <div className="mb-3 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2 block text-black dark:text-white">
                    Event Vacancy
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Event Vacancy"
                    className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-red-600 disabled:cursor-default disabled:bg-white"
                    name="eventVacancy"
                    value={formData.eventVacancy}
                    onChange={handleInputChange}
                    onWheel={(e) => e.target.blur()}
                  />
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="mb-3 flex flex-col gap-6">
                <div className="w-full">
                  <label
                    htmlFor="eventBannerUrl"
                    className="mb-2 block text-black dark:text-white"
                  >
                    Event Banner
                  </label>
                  <input
                    type="file"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    name="eventBannerUrl"
                    id="eventBannerUrl"
                    onChange={handleImageFileChange}
                  />
                  {formData.eventBannerUrl ? (
                    <img
                      src={formData.eventBannerUrl}
                      alt="Banner Preview"
                      className="h-32 w-96 object-cover mt-2"
                    />
                  ) : (
                    <p className="mt-2 font-semibold">No preview available</p>
                  )}
                </div>
              </div>
            </div>
            <fieldset className="border-2 border-blue-600 p-3">
              <legend className="mb-3 p-3 font-bold text-xl text-blue-600">
                Speaker Selection
              </legend>
              <div className="p-3">
                <div className="mb-3 flex flex-col gap-6">
                  {data.map((speakerOption, index) => (
                    <div key={speakerOption._id} className="w-full">
                      <div className="mb-3">
                        <div className="flex gap-2 items-center">
                          <input
                            type="checkbox"
                            id={`speakerCheckbox-${speakerOption._id}`}
                            value={speakerOption._id}
                            onChange={(e) => handleCheckboxChange(e, index)}
                          />
                          <label
                            htmlFor={`speakerCheckbox-${speakerOption._id}`}
                          >
                            {speakerOption.name}
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </fieldset>

            <div className="p-6 flex justify-end">
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
