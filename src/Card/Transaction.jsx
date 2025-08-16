import React, { useContext } from 'react'
import { FinContext } from '../Context/FinContext';

function Transaction() {
  const { type, setType, amount, setAmount, category, setCategory, date, setDate, desc, setDesc, submitTransaction } = useContext(FinContext);

  return (
    <div className="p-6 sm:p-10 flex flex-col w-full max-w-md mx-auto items-start shadow-md text-base sm:text-[18px] gap-4">
      <div className="flex flex-col items-center justify-center mb-2 w-full">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">💸 New Transaction</h1>
        <p className="text-sm text-gray-500">Add your income or expense entry</p>
      </div>

      {/* Type */}
      <div className="flex items-center justify-between w-full">
        <span className="font-semibold">Type :</span>
        <select
          className="outline-none p-2 border rounded-md w-1/2"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">select type</option>
          <option value="income">Income</option>
          <option value="expense">Expenses</option>
        </select>
      </div>

      {/* Amount */}
      <div className="flex items-center justify-between w-full">
        <span className="font-semibold">Amount : </span>
        <input
          className="border rounded-md p-2 w-1/2 outline-none"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {/* Category */}
      <div className="w-full flex items-center justify-between">
        <span className="font-semibold">Category : </span>
        <select
          className="outline-none p-2 border rounded-md w-1/2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">select category</option>
          <option value="food">food</option>
          <option value="clothes">clothes</option>
          <option value="salary">salary</option>
          <option value="fees">fees</option>
          <option value="travelling">travelling</option>
          <option value="pm">pocket money</option>
        </select>
      </div>

      {/* Date */}
      <div className="w-full flex items-center justify-between">
        <span className="font-semibold">Date : </span>
        <input
          className="border p-2 rounded-md w-1/2"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Description */}
      <div className="w-full flex items-center justify-between">
        <span className="font-semibold">Description : </span>
        <input
          className="border rounded-md p-2 outline-none w-1/2"
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-600 text-white rounded-md p-2 mt-5 w-full sm:w-auto"
        onClick={submitTransaction}
      >
        Add Transaction
      </button>
    </div>
  )
}

export default Transaction
