import { Button } from "@material-tailwind/react";
export default function Hero() {
  return (
    <>
      <div className=" font-sans max-w-[900px] mt-0 w-full mx-auto flex flex-col justify-center text-center">
        <div>
          {/* <div className="mx-auto flex items-center gap-4 px-4 justify-center">
            
          </div> */}
          <img
      className="h-[250px] w-full rounded-lg object-cover object-center"
      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      alt="nature image"
    />
          <h1 className="text-7xl font-bold text-font-display tracking-tighter text-blue-600 text-left">
            Conference on Importance of Blockchain
          </h1>
          <p className="text-left text-mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            animi! Doloribus, rerum doloremque sequi hic numquam itaque
            repellendus error amet earum delectus nostrum, modi repellat ad
            cumque ab impedit odit assumenda voluptatibus minima totam! Quam,
            eligendi.
          </p>
          <div>
            <dl className="mt-10 grid grid-cols-4 gap-x-10 gap-y-6 justify-center text-left">
              <div>
                <dt className="font-mono text-sm text-blue-600">Speaker</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  02
                </dd>
              </div>
              <div>
                <dt className="font-mono text-sm text-blue-600">
                  People Attending
                </dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  02
                </dd>
              </div>
              <div>
                <dt className="font-mono text-sm text-blue-600">Venue</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  IUBAT
                </dd>
              </div>
              <div>
                <dt className="font-mono text-sm text-blue-600">Location</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  Uttara, Dhaka
                </dd>
              </div>
            </dl>
          </div>
          <div className="max-w-[350px] mx-auto flex justify-between items-center gap-y-6 mt-10">
            <a className="inline-flex justify-center rounded-full text-blue-500 p-4 text-base font-semibold border-[1px] border-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70" href="#">
             Learn More
            </a>
            <a
              className="inline-flex justify-center rounded-full bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
              href=""
            >
              Get Your Tickets
            </a>
          </div>
         
        </div>
      </div>
    </>
  );
}
