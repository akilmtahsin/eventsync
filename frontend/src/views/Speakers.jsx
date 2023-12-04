
import { SpeakerCard } from "../assets/components/SpeakerCard"
export default function Speakers() {
  return (
    <div>
     <h1 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl p-14">Speakers</h1>
      <div className="grid grid-cols-3 gap-5 max-w-[1200px] mx-auto">
        <SpeakerCard/>
        <SpeakerCard/>
        <SpeakerCard/>
        <SpeakerCard/>
        <SpeakerCard/>
        <SpeakerCard/> 
        <SpeakerCard/>
        <SpeakerCard/>
        <SpeakerCard/>
    </div>
    </div>
  )
}
