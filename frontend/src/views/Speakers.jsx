import { useEffect, useState } from 'react';
import SpeakerCard from '../components/SpeakerCard'
export default function Speakers() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await fetch(
          'http://localhost:8000/api/admin/get-all-speaker',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

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

   const filterSpeakers = (speakers, query) => {
    return speakers.filter((speakers) =>
      speakers.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredSpeakers = filterSpeakers(data, searchQuery);

  return (
    <div className="mx-7 -my-20">
      <div className="flex justify-between">
        <h1 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl p-14 mt-5">
          Speakers
        </h1>
        <div className="h-4 mt-20">
          <input
            className="rounded-full"
            type="text"
            placeholder="Search by Speaker Name"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-5 gap-5 max-w-[1200px] mx-auto mb-16">
        {filteredSpeakers.map((speaker) => (
          <SpeakerCard
            key={speaker._id}
            id={speaker._id}
            name={speaker.name}
            designation={speaker.designation}
            details={speaker.details}
            imageUrl={speaker.imageUrl}
            rating={speaker.rating}
            numberOfRatings={speaker.numberOfRatings}
          />
        ))}
      </div>
      {filteredSpeakers.length === 0 && (
        <div className="h-[80vh] w-screen">
          <p className="mx-auto text-7xl mt-4 text-blue-400">
            No speakers Found...
          </p>
        </div>
      )}
    </div>
  );
}
