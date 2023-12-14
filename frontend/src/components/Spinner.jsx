import { Spinner } from "@material-tailwind/react";
 
export function DefaultSpinner() {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
    
    <Spinner className="h-12 w-12" />
  </div>

  );
}