import { useEffect, useState } from 'react';
import SpeakerCard from '../components/SpeakerCard'
export default function Speakers() {
  const [data, setData] = useState([]);

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

  return (
    <div className="mx-7 -my-20">
      <h1 className="font-display text-4xl mt-5 font-medium tracking-tighter text-blue-600 sm:text-5xl p-14">
        Speakers
      </h1>
      <div className="grid grid-cols-5 gap-5 max-w-[1200px] mx-auto mb-16">
        {data.map((speaker) => (
          <SpeakerCard
            key={speaker._id}
            name={speaker.name}
            designation={speaker.designation}
            details={speaker.details}
            imageUrl={speaker.imageUrl}
            rating={speaker.rating}
            numberOfRatings={speaker.numberOfRatings}
          />
        ))}
      </div>
    </div>
  );
}
