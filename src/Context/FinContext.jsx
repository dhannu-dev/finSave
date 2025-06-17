import { createContext, useEffect, useState } from "react";

export const FinContext = createContext();

export const FinProvider = ({children}) => {

  const [input, setInput] = useState('');
  const [password,setPassword] = useState('');

  const [loggedInUser,setLoggedInUser] = useState(() => {
    const savedName = localStorage.getItem('name');
    return savedName ? JSON.parse(savedName) : '';
  })

  const [amount,setAmount] = useState('');
  const [category,setCategory] = useState('');
  const [type,setType] = useState('');
  const [date,setDate] = useState('');
  const [desc,setDesc] = useState('');


  const [budget,setBudget] = useState(() => {
    const savedBudget = localStorage.getItem('budgetLine');
    return savedBudget ? JSON.parse(savedBudget) : '';
  });


  const [list,setList] = useState(() => {
    const savedTransaction = localStorage.getItem('transaction');
    return savedTransaction ? JSON.parse(savedTransaction) : []
  });




  useEffect(() => {
    localStorage.setItem('budgetLine', JSON.stringify(budget));
  },[budget]);



  useEffect(() => {
     if(loggedInUser){
      localStorage.setItem('name' , JSON.stringify(loggedInUser));
     }
  },[loggedInUser])



  useEffect(() => {
    localStorage.setItem('transaction', JSON.stringify(list));
  },[list])



  const submitTransaction = () => {
    if(!amount || !category || !type){
        alert('please fill all input fields');
        return;
    }
    setList((prev) => [...prev,{
        id : Date.now(),
        amount,
        category,
        type,
        date,
        desc,
        loggedInUser,
        budget
    }]);

    setAmount('');
    setCategory('');
    setType('');
    setDesc('');
    setDate('')
  }



  const deleteTransaction = (value) => {
      setList((prev) => prev.filter((cur) => cur.id !== value))
  };

  

 const totalExpenses = list.reduce((acc,cur) => {
    if(cur.type === 'expense' && cur.loggedInUser === loggedInUser){
      return acc + Number(cur.amount)
    }else{
      return acc
    }
  },0);
  
  const totalIncome = list.reduce((acc,cur) => {
      if(cur.type === 'income' && cur.loggedInUser === loggedInUser){
        return acc + Number(cur.amount);
      }else{
        return acc
      }
  },0)
 
 


  console.log(list)


    return(
        <FinContext.Provider 
        value={{
            amount,
            setAmount,
            category,
            setCategory,
            type,
            setType,
            date,
            setDate,
            desc,
            setDesc,
            list,
            submitTransaction,
            deleteTransaction,
            totalExpenses,
            totalIncome,
            input,
            setInput,
            setLoggedInUser,
            loggedInUser,
            budget,
            setBudget,
            password,
            setPassword
        }}>

            {children}
        </FinContext.Provider>
    )
}