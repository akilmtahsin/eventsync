import { useState } from 'react';
import toast from 'react-hot-toast';
import imageCompression from 'browser-image-compression';
import { Button } from '@material-tailwind/react';
import { cookies } from '../../../config/cookies';

const SpeakerForm = () => {
  const [speakerData, setSpeakerData] = useState({
    name: '',
    designation: '',
    details: '',
    imageUrl: '',
  });

  const token = cookies.get('user_token');

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];

    if (file) {
      try {
       
       

     
       


        const reader = new FileReader();

        reader.onload = (e) => {
          const imageUrl = e.target?.result;
          setSpeakerData({
            ...speakerData,
            imageUrl,
          });
        };

        reader.readAsDataURL(file);
      } catch (error) {
        console.error('Error compressing image:', error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
    
      const response = await fetch(
        'http://localhost:8000/api/speakers/create ',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(speakerData),
        }
      );

      

      if (response.ok) {
        toast.success('Successfully updated user profile.');
      } else if (response.status === 400) {
        toast.error('Speaker already exists!');
      } else {
        console.error('Error creating Speaker:', response.statusText);
        toast.error('Error Creating Speaker:',response.statusText);
      }
    } catch (error) {
      console.error('Error Creating Speaker:', error.message);
    }
  };

  const handleInputChange = (e) => {
    setSpeakerData({
      ...speakerData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="p-6.5 mb-2">
          <div className="mb-4.5 flex flex-col gap-6">
            <div className="w-full">
              <label className="mb-2.5 block text-black dark:text-white">
                Speaker Name
              </label>
              <input
                type="text"
                placeholder="Edit Name"
                className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                value={speakerData.name}
                name="name"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="p-6.5 mb-2">
          <div className="mb-4.5 flex flex-col gap-6">
            <div className="w-full">
              <label className="mb-2.5 block text-black dark:text-white">
                Speaker Designation
              </label>
              <input
                type="text"
                placeholder="Edit Details"
                className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-white "
                value={speakerData.designation}
                name="designation"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="p-6.5 mb-2">
          <div className="mb-4.5 flex flex-col gap-6">
            <div className="w-full">
              <label className="mb-2.5 block text-black dark:text-white">
                Speaker Details
              </label>
              <textarea
                placeholder="Edit Details..."
                className="w-full rounded border-[1.5px] border-solid align-top bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-white "
                value={speakerData.details}
                name="details"
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="p-6.5">
          <div className="mb-4.5 flex flex-col gap-6">
            <div className="w-full">
              <label className="mb-2.5 block text-black dark:text-white">
                Speaker Photo
              </label>
              <input
                type="file"
                placeholder="Select a photo"
                className="w-full rounded border-none bg-transparent py-3 px-5 font-medium outline-none transition active:border-blue-600 disabled:cursor-default disabled:bg-whiter focus:outline-blue-600 outline-blue-gray-600"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <div className='flex justify-end mt-3'><Button type="submit">Register Speaker</Button></div>
      </form>
    </div>
  );
};

export default SpeakerForm;
