import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./components/layouts/Home"
import Calculadora from "./components/layouts/calculadora/Calculadora"
import PokeHome from "./components/layouts/poke-crud/PokeHome"
import Pokedex from "./components/layouts/poke-crud/Pokedex"
const router =createBrowserRouter([
  {
    path: '/',
    element:<Home />
  },
  {
    path: '/calculadora',
    element:<Calculadora />
  },
  {
    path:'/pokedex',
    element:<PokeHome/>
  },
  {
    path:'/pokedex-listado',
    element:<Pokedex/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
