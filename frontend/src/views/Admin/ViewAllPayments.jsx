//all the payments list done by this user.id


import AdminPaymentsTable from '../../components/Tables/AdminPaymentList'


export default function ViewAllPayments() {
  return (
    <div>
      <div className="bg-white flex flex-col shadow-lg p-10">
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-display font-medium tracking-tighter text-blue-600 text-3xl p-10">Payments</h1>

        </div>
      <AdminPaymentsTable/>
    </div>
    </div>
  )
}
