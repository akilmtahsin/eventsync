import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';

export default function SpeakerList({ speakerIds }) {

  const [speakerData, setSpeakerData] = useState([]);

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
          setSpeakerData(data);
        }else
        console.error('Error fetching speaker data:', response.statusText);
      } catch (error) {
        console.error('Error fetching speaker data:', error.message);
      }
    };

    fetchSpeakers();
  }, []);

 

  console.log(speakerIds)
  

  const filteredSpeakers = speakerData.filter((speaker) => {
    return speakerIds.includes(speaker && speaker._id); //fixed with return statement
    //filtering does not allow console.log but with return it can proceed with ;
  });



  return (
    <Card className="w-[700px] shadow-none bg-gray-300">
      <List>
        {filteredSpeakers.map((speaker) => (
          <ListItem key={speaker._id}>
            <ListItemPrefix>
              <Avatar
                variant="circular"
                alt="speakerphoto"
                src={speaker.imageUrl}
              />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
                {speaker.name}
                
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                {speaker.designation}
              </Typography>
            </div>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
