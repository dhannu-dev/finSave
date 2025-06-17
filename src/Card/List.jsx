import React, { useContext } from 'react';
import { FinContext } from '../Context/FinContext';

function List() {
  const { list,deleteTransaction,loggedInUser } = useContext(FinContext);

  const filterList = list.filter((cur) => cur.loggedInUser === loggedInUser);

  return (
    <div className="p-6 mt-5">
      <h2 className="text-2xl font-semibold mb-4 text-center">Transaction List</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Type</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {filterList.map((cur) => (
              <tr key={cur.id} className="text-center hover:bg-gray-50 transition">
                <td className="px-4 py-2 border">{cur.date}</td>
                <td className="px-4 py-2 border">{cur.type}</td>
                <td className="px-4 py-2 border">{cur.category}</td>
                <td className="px-4 py-2 border">₹{cur.amount}</td>
                <td className="px-4 py-2 border">{cur.desc}</td>
                <td className="px-4 py-2 border">
                  <button onClick={() => deleteTransaction(cur.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filterList.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
