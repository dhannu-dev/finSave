import React, { useContext } from 'react'
import { FinContext } from '../Context/FinContext'

function DashboardOverviews() {
  const { totalExpenses, totalIncome,budget,setBudget} = useContext(FinContext);

    const isOverBudget = budget && totalExpenses >= budget;

  return (
    <div className="w-[550px] mt-16 ml-48 p-10 bg-white rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Dashboard Overview</h2>

      <div className="flex flex-col gap-3 text-gray-800 text-[18px]">
        <div className="flex justify-between items-center">
          <span className="font-medium">💰 Total Income:</span>
          <span className="text-green-600 font-semibold">₹{totalIncome}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">💸 Total Expense:</span>
          <span className="text-red-600 font-semibold">₹{totalExpenses}</span>
        </div> 
        <div className="flex flex-col mt-4">
          <label className="mb-1 font-medium">📊 Budget Line:</label>
          { isOverBudget && <p className="text-sm text-red-600 bg-red-100 px-4 py-2 rounded-lg font-medium border border-red-300">
  ⚠️ You’ve crossed the budget limit!
</p>}
          <div className="flex items-center gap-3">
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="p-2 w-full border rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition mt-2"
              placeholder="Enter budget amount"
            />
            <button className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardOverviews
