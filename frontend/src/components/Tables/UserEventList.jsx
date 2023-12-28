import { useState } from 'react';

const UserAttendedEvent = () => {
  // const [done, setDone] = useState({});

  let done = false;

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium bg-blue-800 text-white">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Event ID
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Event Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Event Details
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Type
                    </th>
                    
                    <th scope="col" className="px-6 py-4">
                      Organized By
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Speakers
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Current Status
                    </th>
                    <th scope="col" className="px-6 py-4"></th>
                  </tr>
                </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">8399</td>
                  <td className="whitespace-nowrap px-6 py-4">EventName</td>
                  <td className="whitespace-wrap px-6 py-4"><div className='w-60 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cum voluptates autem, illo quaerat mollitia et impedit quas minima repellendus ab accusamus?</div></td>

                  <td className="whitespace-nowrap px-6 py-4">Type</td>
                  <td className="whitespace-nowrap px-6 py-4">Organizer</td>
                  <td className="whitespace-nowrap px-6 py-4">
                      <div>
                      <ul>
                        <li className='list-disc'>Speaker 1</li>
                        <li className='list-disc'>Speker 2</li>
                        </ul>
                        </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">In 3 Days</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className=" max-w-full flex justify-center">
                      {!done ? (
                        
                          <div className="flex gap-x-1 justify-between items-center mr-3 bg-blue-200 hover:bg-opacity-90 rounded-full p-2 text-white">
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
                                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>

                            <p>Download Ticket</p>
                          </div>
                        
                      ) : (
                        
                          <div className="flex gap-x-2 justify-between items-center mr-3 bg-orange-500 hover:bg-opacity-90 rounded-full p-2 text-white">
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
                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                              />
                            </svg>

                            <p>Rate</p>
                          </div>
                        
                      )}
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

export default UserAttendedEvent;
