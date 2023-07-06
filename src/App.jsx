import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./components/layouts/Home"
import Calculadora from "./components/layouts/calculadora/Calculadora"
const router =createBrowserRouter([
  {
    path: '/',
    element:<Home />
  },
  {
    path: '/calculadora',
    element:<Calculadora />
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
