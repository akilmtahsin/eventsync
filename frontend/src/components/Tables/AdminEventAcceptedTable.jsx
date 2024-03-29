import { useState } from 'react';
import { Chip } from '@material-tailwind/react';

export function AdminEventApproved() {
  const [paymentStatus, setPaymentStatus] = useState('unpaid');
  const [paymentAmount, setPaymentAmount] = useState('100');
  const [status, setStatus] = useState('approved');
  const [rating, setRating] = useState('4');

  return (
    <div className="flex flex-col">
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
                      Payment
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Rating
                    </th>
                    <th scope="col" className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">id</td>
                    <td className="whitespace-nowrap px-6 py-4">Name</td>
                    <td className="whitespace-wrap px-6 py-4">
                      <div className="w-60 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo cum voluptates autem, illo quaerat mollitia et
                        impedit quas minima repellendus ab accusamus?
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Seminar</td>
                    <td className="whitespace-nowrap px-6 py-4">Organizer</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div>
                        <ul>
                          <li className="list-disc">Speaker 1</li>
                          <li className="list-disc">Speker 2</li>
                        </ul>
                      </div>
                    </td>

                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="max-w-full flex justify-center">
                        {paymentStatus === 'paid' && (
                          <Chip
                            color="orange"
                            value={`${paymentAmount} Taka`}
                          />
                        )}
                        {paymentStatus === 'unpaid' && (
                          <Chip color="amber" value="Unpaid" />
                        )}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="max-w-full flex justify-center">
                        <Chip color="green" value="Approved" />
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {status === 'pending' || status === 'rejected' ? (
                        <Chip
                          variant="ghost"
                          value="Not Available"
                          className="rounded-full"
                        />
                      ) : (
                        <Chip value="4.7" className="rounded-full" />
                      )}
                    </td>

                    <td className="whitespace-nowrap px-6 py-4">
                      <div className=" max-w-full flex justify-center">
                        <button className="flex gap-x-2 justify-between items-center mr-3 bg-red-500 hover:bg-opacity-90 rounded-full p-3 text-white">
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
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
