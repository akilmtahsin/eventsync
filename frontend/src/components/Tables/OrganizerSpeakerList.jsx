import React from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';

export function OrganizerSpeakerList() {
  const [open, setOpen] = React.useState(false);

  const handleSpeakerEdit = () => setOpen(!open);

  return (
    
    <div className="flex flex-col">
      
      <Dialog open={open} handler={handleSpeakerEdit}>
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
                     Speaker Designation
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
          <Button variant="gradient" color="red" onClick={handleSpeakerEdit}>
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleSpeakerEdit}>
              <span>Confirm</span>
            </Button>
        </div>
        </DialogFooter>
      </Dialog>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light border-collapse border border-slate-500">
              <thead className="border-b font-medium bg-blue-800 text-white">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    SpeakerName
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Designation 
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Details
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Rating
                  </th>
                  <th scope="col" className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">Name</td>
                  <td className="whitespace-nowrap px-6 py-4">Designation</td>
                  <td className="whitespace-wrap px-6 py-4"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci est dolore laboriosam vitae quae ut sint temporibus? Labore, aperiam magni. Iste sint ipsam blanditiis facere, animi omnis quae quo dolore doloribus ex! Dignissimos!
                     </td>

                  <td className="whitespace-nowrap px-6 py-4">Amount</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className=" max-w-full flex justify-center">
                      <button onClick={handleSpeakerEdit} className="flex gap-x-1 justify-between items-center mr-3 bg-green-800 hover:bg-opacity-90 rounded-full p-2 text-white">
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

                        <p>Edit</p>
                      </button>

                      <div className="flex gap-x-2 justify-between items-center mr-3 bg-red-500 hover:bg-opacity-90 rounded-full p-2 text-white">
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
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>

                        <p>Delete</p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerSpeakerList;
