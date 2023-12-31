import { Avatar } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { cookies } from '../../config/cookies';

const Profile = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);

  const token = cookies.get('user_token');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        
        const response = await fetch('http://localhost:8000/api/user/profile', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });

        if (response.ok) {
          const user = await response.json();
          setUsername(user.username);
          setEmail(user.email);
          setImage(user.imageUrl);
        } else {
          // Handle error response
          console.error('Error fetching user profile:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
      }
    };

    fetchUserProfile();
  }, []);

  


  return (
    <>
      <div className="p-10 overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="mt-45 px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2">
              <Avatar
                src={image}
                alt="avatar"
                size="xxl"
              />
             
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              {username}
            </h3>
            <h4 className="mb-1.5 text-sm font-semibold text-blue-gray-800">
              {email}
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
    </>
  );
};

export default Profile;
