

const UserPaymentsTable = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light ">
              <thead className="border-b font-medium bg-blue-800 text-white">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">TransactionID</th>
                  <th scope="col" className="px-6 py-4">EventID</th>
                  <th scope="col" className="px-6 py-4">Amount</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">Mark</td>
                  <td className="whitespace-nowrap px-6 py-4">Otto</td>
                  
                  <td className="whitespace-nowrap px-6 py-4">Amount</td>
                 
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                  <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                  <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                
                  <td className="whitespace-nowrap px-6 py-4">Amount</td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                  <td className="whitespace-nowrap px-6 py-4">Larry</td>
                  <td className="whitespace-nowrap px-6 py-4">Wild</td>
                  
                  <td className="whitespace-nowrap px-6 py-4">Amount</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPaymentsTable;
