
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <Link className="enlaceNav" to={'/calculadora'}>Calculadora</Link>
            <Link className="enlaceNav" to={'/peliculas'}>Api Peliculas</Link>
            <Link className="enlaceNav rick" to={'/rick'}>Api Rick and Morty</Link>
            <Link className="enlaceNav" to={'/pokedex'}>Pokedex</Link>
            <Link className="enlaceNav" to={'/crud'}>Crud</Link>
        </nav>
    </header>
  )
}

export default Header