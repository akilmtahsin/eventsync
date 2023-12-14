
import { SpeakerCard } from "../components/SpeakerCard"
export default function Speakers() {
  return (
    <div className="mx-7 -my-20">
     <h1 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl p-14">Speakers</h1>
      <div className="grid grid-cols-3 gap-5 max-w-[1200px] mx-auto mb-16">
        <SpeakerCard/>
        <SpeakerCard/>
        <SpeakerCard/>
        <SpeakerCard/>
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
