
import { EventCard } from './EventCard'
import { Button } from '@material-tailwind/react'

export default function EventsSection() {
  return (
    <div className='flex flex-col items-center mt-10 max-w-[900px] mx-auto h-screen'>
      <h2 className='self-start font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl'>Upcoming Events</h2>
      <div className='flex flex-row gap-y-6 pt-7'>
        <EventCard/>
        <EventCard/>
        <EventCard/>
      </div>
      <Button className="flex rounded-full items-center gap-2 mt-5">
        View All
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </Button>
    </div>
  )
}
