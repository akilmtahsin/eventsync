import React from 'react'

const ViewAllOrganizers = () => {
  return (
    <div>
      <div>
      <div className="bg-white flex flex-col shadow-lg p-10">
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-display font-medium tracking-tighter text-blue-600 text-3xl p-10">Speakers</h1>
        

        </div>
        <AdminSpeakerList/>
    </div>
    </div>
    </div>
  )
}

export default ViewAllOrganizers;
