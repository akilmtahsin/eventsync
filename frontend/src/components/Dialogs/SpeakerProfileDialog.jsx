import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar
} from "@material-tailwind/react";
 
export function SpeakerProfileDialog() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <div className="flex flex-col items-center">
          <DialogHeader className="text-center">SpeakerName</DialogHeader>
          <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl" />
        </div>
        <DialogBody>
         Speaker Details Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis dicta laudantium doloremque soluta mollitia. Aspernatur neque magnam est quaerat consequuntur exercitationem vitae fuga tempora, qui, nulla ipsam ea dicta, accusantium libero sint!
        </DialogBody>
        <DialogFooter>
          
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}