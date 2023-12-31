

const SpeakerForm = () => {
  return (
    <div>
      <form action="#">
            <div className="p-6.5 mb-2">
              <div className="mb-4.5 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Speaker Name
                  </label>
                  <input
                    type="text"
                    placeholder="Edit Name"
                    className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>
            </div>
            <div className="p-6.5 mb-2">
              <div className="mb-4.5 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2.5 block text-black dark:text-white">
                     Speaker Designation
                  </label>
                  <input
                    type="text"
                    placeholder="Edit Details"
                    className="w-full rounded border-[1.5px] border-solid bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-white "
                  />
                </div>
              </div>
            </div>
            <div className="p-6.5 mb-2">
              <div className="mb-4.5 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2.5 block text-black dark:text-white">
                     Speaker Details
                  </label>
                  <textarea 
                    placeholder="Edit Details..."
                    className="w-full rounded border-[1.5px] border-solid align-top bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-white ">
                    
                  </textarea>
                </div>
              </div>
            </div>
            
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Speaker Photo
                  </label>
                  <input
                    type="file"
                    placeholder="Select a photo"
                    className="w-full rounded border-none bg-transparent py-3 px-5 font-medium outline-none transition active:border-blue-600 disabled:cursor-default disabled:bg-whiter focus:outline-blue-600 outline-blue-gray-600"
                  />
                </div>
              </div>
            </div>
            
          </form>
    </div>
  )
}

export default SpeakerForm;
