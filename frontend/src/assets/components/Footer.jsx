import { Typography } from "@material-tailwind/react";
 
export default function Footer() {
  return (
    <footer className="w-full p-8 bg-light-blue-100">
      <div className="flex flex-row flex-wrap items-center gap-y-6 gap-x-12 text-center justify-between">
        <img src="./EventSync.png" alt="logo" className=" w-[100px]" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="https://github.com/akilmtahsin/eventsync.git"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Github
            </Typography>
          </li>
         
    
          <li>
            <Typography
              as="a"
              href="mailto:akilmtahsin@gmail.com"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
    
      <Typography color="blue-gray" className="text-center font-bold">
        &copy; 2023 akilmtahsin
      </Typography>
    </footer>
  );
}