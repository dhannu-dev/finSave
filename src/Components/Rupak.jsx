import React, { useContext } from 'react'
import Transaction from '../Card/Transaction'
import DashboardOverviews from '../Card/DashboardOverviews'
import List from '../Card/List'
import { FinContext } from '../Context/FinContext'

function Rupak() {
  const { loggedInUser } = useContext(FinContext)

  return (
    <div className="p-4 sm:p-6 lg:p-10">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 sm:mb-8">
        👋 <span className="text-gray-500">Hello,</span>{' '}
        <span className="text-blue-600 decoration-blue-400">{loggedInUser}</span>
        <span className="block text-sm sm:text-base mt-1 ml-4 sm:ml-10 text-gray-600 font-medium">
          Welcome back to <span className="text-blue-500 font-semibold">FinSave</span> – manage your money wisely!
        </span>
      </h2>

      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10 mb-8">
        <Transaction />
        <DashboardOverviews />
      </div>

      <List />
    </div>
  )
}

export default Rupak
