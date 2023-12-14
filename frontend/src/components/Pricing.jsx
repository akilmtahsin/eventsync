import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 

 

 
export function PricingCard() {
  return (
    <Card color="gray" variant="fill" className="w-full max-w-[20rem] h-auto p-8">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <img
      className="h-[140px] w-full object-cover object-center"
      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      alt="nature image"
    />
        
      </CardHeader>
      <CardBody className="p-0">
      <Typography
          variant="h5"
          color="white"
          className="mt-6 flex justify-center gap-1 text-7xl font-normal"
        >
          <span className="mt-2 text-4xl">$</span>29{" "}
          
        </Typography>
      </CardBody>
      <CardFooter className="mt-12 p-0">   
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Get Tickets
        </Button>
      </CardFooter>
    </Card>
  );
}