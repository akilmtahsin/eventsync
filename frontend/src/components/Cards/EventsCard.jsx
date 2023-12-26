

const EventsCard = ({cardName, number}) => {
  return (
    <div>
      <div className="font-sans rounded-lg bg-blue-300 py-6 px-8 shadow-lg">

<div className="mt-4 flex items-end justify-between">
  <div>
    <h4 className="text-3xl font-bold text-white">
      {number}
    </h4>
    <span className="text-sm font-bold">{cardName}</span>
  </div>
</div>
</div>
    </div>
  )
}

export default EventsCard
