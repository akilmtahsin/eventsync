import { useState } from 'react';
import { Chip } from '@material-tailwind/react';

export function AdminEventPending() {
  const [paymentStatus, setPaymentStatus] = useState('unpaid');
  const [paymentAmount, setPaymentAmount] = useState('100');
  const [status, setStatus] = useState('pending');
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
                        <Chip color="amber" value="Pending" />
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
                      <button className="flex gap-x-2 justify-between items-center mr-3 bg-green-500 hover:bg-opacity-90 rounded-full p-3 text-white">
                         

                         <p>Approve</p>
                       </button>
                        <button className="flex gap-x-2 justify-between items-center mr-3 bg-red-500 hover:bg-opacity-90 rounded-full p-3 text-white">
                          

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
