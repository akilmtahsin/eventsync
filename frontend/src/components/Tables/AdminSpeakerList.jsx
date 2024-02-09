import { Chip } from '@material-tailwind/react';
import { useEffect, useState } from 'react';

export function AdminSpeakerTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/admin/get-all-speaker', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setData(data);

          console.log(data);
        }
        console.error('Error fetching speaker data:', response.statusText);
      } catch (error) {
        console.error('Error fetching speaker data:', error.message);
      }
    };

    fetchSpeakers();
  }, []);

  return (
    <div className="flex flex-col">
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
                    Created by
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Rating
                  </th>
                  
                 
                 
                </tr>
              </thead>

              <tbody>
                {data.map((speaker, index) => (
                  <tr className="border-b dark:border-neutral-500" key={index}>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {speaker.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {speaker.designation}
                    </td>
                    
                    <td className="whitespace-wrap overflow-hidden px-6 py-4">
                      <div className="w-60 text-justify">
                       {speaker.details}
                      </div>
                    </td>
                    <td className="whitespace-wrap px-6 py-4">
                      {' '}
                      {speaker.organizerName}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {speaker.rating ? (
                        <Chip variant="outlined" value={speaker.rating} />
                      ) : (
                        <Chip
                          variant="ghost"
                          value="Not Rated"
                          className="rounded-full"
                        />
                      )}
                    </td>

                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSpeakerTable;
