import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';

import { cookies } from '../../../config/cookies';

export function UserEditDialog() {

 

  const [imageUrl, setImageUrl] = useState('');
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const token = cookies.get('user_token');

  const handleOpen = () => setOpen(!open);

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageUrl = e.target?.result;
        setImageUrl(imageUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleConfirm = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/user/update', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify({
         username,
         email,
         imageUrl
        }),
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

  const handleConfirmAndClose = () => {
    handleConfirm(); // Call the handleConfirm function
    handleOpen(); // Call the handleOpen function to close the dialog
  };

  return (
    <>
      <Button
        onClick={handleOpen}
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
      </Button>
      <Dialog  open={open} handler={handleOpen}>
        <DialogHeader>Edit Personal Info</DialogHeader>
        <DialogBody>
          <form action="POST" >
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={handleImageChange}
                  />
                  <img
                    src={imageUrl}
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
          </form>
        </DialogBody>
        <DialogFooter>
          <div className="flex justify-between w-56 ">
            <Button variant="gradient" color="red" onClick={handleOpen}>
              <span>Cancel</span>
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={handleConfirmAndClose}
            >
              <span>Confirm</span>
            </Button>
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}
