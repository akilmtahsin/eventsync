import { Avatar } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { cookies } from '../../config/cookies';

const Profile = () => {
  const token = cookies.get('user_token');
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
            authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await res.json();
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

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageUrl = e.target?.result;
        setFormData({
          ...formData,
          imageUrl,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/user/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Profile updated successfully');
      } else {
        console.error('Error updating user profile:', response.statusText);
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
    <>
      <div className="bg-white flex flex-col shadow-lg p-10">
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-display font-medium tracking-tighter text-blue-600 text-3xl p-10">
            User Information
          </h1>
          <button
            onClick={handleProfileUpdate}
            className=" h-16 text-lg bg-green-800 hover:opacity-90 flex gap-x-3 items-center -z-4 "
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
          </button>

          <div className="p-10 overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="mt-45 px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
              <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
                <div className="relative drop-shadow-2">
                  <Avatar src={formData.imageUrl} alt="avatar" size="xxl" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
                  {formData.username}
                </h3>
                <h4 className="mb-1.5 text-sm font-semibold text-blue-gray-800">
                  {formData.email}
                </h4>

                <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-2 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
                  <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                    <span className="px-3 font-semibold text-black dark:text-white">
                      10
                    </span>
                    <span className="text-sm">Event Enrolled</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                    <span className="px-3 font-semibold text-black dark:text-white">
                      2
                    </span>
                    <span className="text-sm">Event Attended</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form handleSubmit={handleSubmit}>
        <div className="p-6.5">
          <div className="mb-4.5 flex flex-col gap-6">
            <div className="w-full">
              <label className="mb-2.5 block text-black dark:text-white">
                User Name
              </label>
              <input
                type="text"
                placeholder="Edit your name"
                className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-red-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                value={formData.username}
                onChange={handleInputFieldChange}
                name="username"
                disabled={isFormDisabled}
              />
            </div>
          </div>
        </div>
        <div className="p-6.5">
          <div className="mb-4.5 flex flex-col gap-6">
            <div className="w-full">
              <label className="mb-2.5 block text-black dark:text-white">
                Email
              </label>
              <input
                type="email"
                placeholder="Edit your email"
                className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-red-600 disabled:cursor-default disabled:bg-white "
                value={formData.email}
                onChange={handleInputFieldChange}
                name="email"
                disabled={isFormDisabled}
              />
            </div>
          </div>
        </div>
        <div className="p-6.5">
          <div className="mb-4.5 flex flex-col gap-6">
            <div className="w-full">
              <label className="mb-2.5 block text-black dark:text-white">
                Photo
              </label>
              <input
                type="file"
                placeholder="Select a photo"
                className="w-full rounded border-none bg-transparent py-3 px-5 font-medium outline-none transition active:border-blue-600 disabled:cursor-default disabled:bg-whiter focus:outline-blue-600 outline-blue-gray-600"
                onChange={handleInputFieldChange}
                disabled={isFormDisabled}
              />
              <img
                src={formData.imageUrl}
                alt="Preview"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100px',
                  marginTop: '10px',
                }}
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Profile;
