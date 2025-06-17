import React, { useContext } from 'react'
import { FinContext } from '../Context/FinContext';

function Transaction() {
      const {type,setType,amount,setAmount,category,setCategory,date,setDate,desc,setDesc,list,submitTransaction} = useContext(FinContext);
  return (
        <div className='p-10 flex flex-col w-[450px] items-start shadow-md text-[18px] gap-4 '>
                  <div className='flex flex-col items-center justify-center mb-2'>
                     <h1 className="text-2xl font-semibold text-gray-800">💸 New Transaction</h1>
                     <p className="text-sm text-gray-500">Add your income or expense entry</p>
                  </div>

                   <div className='flex items-center justify-between w-full'>
                     <span className='font-semibold'>Type :</span> 
                   <select className='outline-none p-2 border' value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="">select type</option>
                    <option value="income">Income</option>
                    <option value="expense">Expenses</option>
                  </select>
                   </div>

                  <div className='flex items-center justify-between w-full'>
                   <span className='font-semibold'>Amount : </span>
                  <input 
                  className='border rounded-md p-1 w-[150px] outline-none' 
                  type="number" 
                  value={amount} 
                  onChange={(e) => setAmount(e.target.value)} />
                  </div>
                   
                  <div className='w-full flex items-center justify-between'>
                    
                    <span className='font-semibold'>Category : </span>
                    <select className='outline-none p-2 border' value={category} onChange={(e) => setCategory(e.target.value)}>
                      <option value="">select category</option>
                      <option value="food">food</option>
                      <option value="clothes">clothes</option>
                      <option value="salary">salary</option>
                      <option value="fees">fees</option>
                      <option value="travelling">travelling</option>
                      <option value="pm">pocket money</option>
                    </select>
                  </div>

                   <div className='w-full flex items-center justify-between'>
                     <span className='font-semibold'>Date : </span>
                    <input className='border p-2 rounded-md' type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div >

                  <div className='w-full flex items-center justify-between'>
                  <span className='font-semibold'>Description : </span>
                  <input className='border rounded-md p-1 outline-none text-[17px]' type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
                   </div>

                    <button className='bg-blue-600 text-white rounded-md p-2 mt-5 ml-24' onClick={submitTransaction}>Add Transaction</button>
                  </div>
  )
}

export default Transaction
