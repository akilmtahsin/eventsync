import React from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';

export function SpeakerEditDialog() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

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
        Edit
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Edit Speaker Details</DialogHeader>
        <DialogBody>
          <form action="#">
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Speaker Name
                  </label>
                  <input
                    type="text"
                    placeholder="Edit Name"
                    className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-red-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>
            </div>
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2.5 block text-black dark:text-white">
                     Speaker Details
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
                    Speaker Photo
                  </label>
                  <input
                    type="file"
                    placeholder="Select a photo"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>
            </div>
            
          </form>
        </DialogBody>
        <DialogFooter>
        <div className='flex justify-between w-56 '>
          <Button variant="gradient" color="red" onClick={handleOpen}>
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
        </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}
