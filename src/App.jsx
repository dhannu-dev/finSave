import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Login from './Components/Login';
import Layout from './Components/Layout';
import Dhannu from './Components/Dhannu';
import Rohit from './Components/Rohit';
import Rupak from './Components/Rupak';
import Himanshu from './Components/Himanshu';


function App() {

  const router = createBrowserRouter([
    {
      path : '',
      element : <Login />,
    },
    {
      path : '/',
      element : <Layout />,
      children : [
        {
          path : 'dhannu',
          element : <Dhannu />
        },
        {
          path : 'rohit',
          element : <Rohit />
        },
        {
          path : 'rupak',
          element : <Rupak />
        },
        {
          path : 'himanshu',
          element : <Himanshu />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
