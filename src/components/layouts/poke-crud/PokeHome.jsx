import Header from "../../helpers/Header"
import {Link} from 'react-router-dom'

const PokeHome = () => {
  return (
    <section>
        <Header/>
        <h1>Esto es pokedex</h1>
        <Link to={'/pokedex-listado'}>Pokedex</Link>
    </section>
  )
}

export default PokeHome