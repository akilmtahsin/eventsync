import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';

import { cookies } from '../../../config/cookies';

export function UserEditDialog({ handleModalClose }) {
  const token = cookies.get('user_token');

  const [formData, setFormData] = useState({
    imageUrl: '',
    username: '',
    email: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(``, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        });
        if (res.ok) {
          const data = await res.json();
          setFormData({
            imageUrl: data.imageUrl,
            username: data.username,
            email: data.email,
          });
        }
      } catch (error) {
        console.log('Profile error', error);
      }
      fetchProfile();
    };
  }, []);

  const handleInputFieldChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  const handleConfirm = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/user/update', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
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

  const handleConfirmAndClose = () => {
    handleConfirm(); // Call the handleConfirm function
    handleOpen(); // Call the handleOpen function to close the dialog
  };

  return (
    <>
      <Dialog open={true}>
        <DialogHeader>Edit Personal Info</DialogHeader>
        <DialogBody>
          <form action="POST">
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
                    onChange={handleConfirm}
                    name="username"
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
          </form>
        </DialogBody>
        <DialogFooter>
          <div className="flex justify-between w-56 ">
            <Button variant="gradient" color="red" onClick={handleModalClose}>
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
