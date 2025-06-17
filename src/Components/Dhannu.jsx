import React, { useContext, useState } from 'react'
import { FinContext } from '../Context/FinContext'
import Transaction from '../Card/Transaction'
import List from '../Card/List'
import DashboardOverviews from '../Card/DashboardOverviews'
import { users } from '../Users/user'

function Dhannu() {
   const {loggedInUser,input} = useContext(FinContext);
   console.log(loggedInUser)
  return (
    <div className='p-10'>   
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
           👋 <span className="text-gray-500">Hello,</span>{' '}
               <span className="text-blue-600  decoration-blue-400">
               {loggedInUser}
              </span>
                <span className="block text-base mt-1 ml-10 text-gray-600 font-medium">
                  Welcome back to <span className="text-blue-500 font-semibold">FinSave</span> – manage your money wisely!
                 </span>
            </h2>
          <div className='flex items-start px-10'>
             <Transaction />  
             <DashboardOverviews />
          </div>
          <List />    
     </div>
  )
}

export default Dhannu
