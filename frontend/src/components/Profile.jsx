import { Avatar, Button } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { cookies } from '../../config/cookies';
import toast from 'react-hot-toast';
import imageCompression from 'browser-image-compression';

const Profile = () => {
  
  const [formData, setFormData] = useState({
    imageUrl: '',
    username: '',
    email: '',
    
  });

  const [isFormDisabled, setIsFormDisabled] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/user/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${cookies.get('user_token')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setFormData({
            imageUrl: data.imageUrl,
            username: data.username,
            email: data.email,
          });
        }
        console.error('Error fetching user profile:', response.statusText);
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
      }
    };

    fetchUserProfile();
  }, []);

  const handleImageChange = async (event) => {
    const file = event.target.files?.[0];

    if (file) {
      try {
        // Set options for image compression
        const options = {
          maxSizeMB: 0.01,
          maxWidthOrHeight: 800,
          useWebWorker: true,
        };

        // Compress the image
        const compressedFile = await imageCompression(file, options);

        // Convert compressed image to base64
        const reader = new FileReader();

        reader.onload = (e) => {
          const imageUrl = e.target?.result;
          setFormData({
            ...formData,
            imageUrl,
          });
        };

        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error('Error compressing image:', error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await fetch('http://localhost:8000/api/user/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${cookies.get('user_token')}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Successfully updated user profile.');
        window.location.reload(true);
      } else {
        console.error('Error updating user profile:', response.statusText);
        toast.error('Error updating user info');
      }
    } catch (error) {
      console.error('Error updating user profile:', error.message);
    }
  };

  const handleInputFieldChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProfileUpdate = () => {
    setIsFormDisabled(!isFormDisabled);
  };

  return (
    <div>
      <div className="bg-white flex flex-col shadow-lg p-10">
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-display font-medium tracking-tighter text-blue-600 text-3xl p-10">
            User Information
          </h1>
          <Button
            onClick={handleProfileUpdate}
            className=" h-10 text-md bg-green-800 hover:opacity-90 flex gap-x-3 items-center -z-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            Edit Info
          </Button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <div className="relative drop-shadow-2 w-36 flex justify-center mb-4">
              <Avatar size="xxl" src={formData.imageUrl} alt="Preview" />
              {!isFormDisabled && (
                <label
                  htmlFor="profile"
                  className="absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                    />
                  </svg>
                  <input
                    type="file"
                    name="profile"
                    id="profile"
                    className="sr-only"
                    onChange={handleImageChange}
                    disabled={isFormDisabled}
                  />
                </label>
              )}
            </div>
          </div>
          <div className="p-6.5">
            <div className="mb-4.5 flex flex-col gap-6">
              <div className="w-full">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                 {isFormDisabled?( <p>Name</p> ):(<p>Edit Name</p>)}
                </label>

                <input
                  type="text"
                  className="w-full rounded bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-red-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  value={formData.username}
                  onChange={handleInputFieldChange}
                  name="username"
                  disabled={isFormDisabled}
                />
              </div>
            </div>
          </div>
          <div className="p-6.5 mt-3">
            <div className="mb-4.5 flex flex-col gap-6">
              <div className="w-full">
              <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {isFormDisabled?( <p>Email</p> ):(<p>Edit Email</p>)} 
                </label>
                <input
                  type="text"
                  className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-red-600 disabled:cursor-default disabled:bg-white "
                  value={formData.email}
                  onChange={handleInputFieldChange}
                  name="email"
                  disabled={isFormDisabled}
                />
              </div>
            </div>
          </div>
          

          <div className="flex justify-end">
            <Button className="mt-4 " hidden={isFormDisabled} type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
