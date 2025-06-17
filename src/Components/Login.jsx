import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { users } from '../Users/user'
import { FinContext } from '../Context/FinContext'

function Login() {
  const { input, setInput, setLoggedInUser, password, setPassword } = useContext(FinContext)
  const navigate = useNavigate()

  const handleNavigate = (e) => {
    e.preventDefault()
    const findUser = users.find(
      (cur) =>
        cur.name.toLowerCase() === input.toLowerCase() && cur.password === password
    )
    if (findUser) {
      setLoggedInUser(findUser.name)
      setInput('')
      setPassword('')
      navigate(findUser.name)
    } else {
      alert('Invalid username or password.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white w-full max-w-sm md:max-w-md rounded-2xl shadow-md p-8 md:p-10 border border-gray-200">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Fin<span className="text-blue-600">Save</span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">Manage your finance smartly</p>
        </div>

        <form onSubmit={handleNavigate} className="space-y-5">
          <div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400 text-sm"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400 text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition text-sm tracking-wide"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            © 2025 FinSave. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
