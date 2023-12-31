import SpeakerForm from "../../components/Forms/SpeakerForm"


const SpeakerRegistration = () => {
  return (
    <div className="bg-white flex flex-col shadow-lg p-10">
        <h1 className="font-display font-medium tracking-tighter text-blue-600 text-3xl p-10">
          Create New Speaker
        </h1>

        <div>
          <SpeakerForm/>
        </div>
      
    </div>
  )
}

export default SpeakerRegistration
