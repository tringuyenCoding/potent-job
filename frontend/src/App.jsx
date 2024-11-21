
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/Signin',
    element: <Signin/>,
  },
  {
    path: '/Signup',
    element: <Signup/>,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
