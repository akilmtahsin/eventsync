import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Button,
  Avatar,
} from "@material-tailwind/react";
import { useState } from "react";

export function SpeakerCard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <Card
        onClick={handleOpen}
        className="w-56 cursor-pointer hover:bg-blue-100 "
      >
        <CardHeader floated={false} className="h-36 object-cover shadow-none">
          <img
            src="/Images/dp.jpg"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Natalie Paisley
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            CEO / Co-Founder
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Typography variant="h6" color="blue-gray" className="font-medium">
            Rated
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            5.0
          </Typography>
        </CardFooter>
      </Card>
      <Dialog open={open} handler={handleOpen}>
        <div className="flex flex-col items-center">
          <DialogHeader className="text-center">SpeakerName</DialogHeader>
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            size="xxl"
          />
        </div>
        <DialogBody>
          Speaker Details Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Omnis dicta laudantium doloremque soluta mollitia. Aspernatur
          neque magnam est quaerat consequuntur exercitationem vitae fuga
          tempora, qui, nulla ipsam ea dicta, accusantium libero sint!
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
