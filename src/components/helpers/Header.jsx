
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <Link to={'/calculadora'}>Calculadora</Link>
            <Link to={'/peliculas'}>Api Peliculas</Link>
            <Link to={'/rick'}>Api Rick and Morty</Link>
            <Link to={'/pokedex'}>Pokedex</Link>
            <Link to={'/crud'}>Crud</Link>
        </nav>
    </header>
  )
}

export default Header