import Header from "../../helpers/Header";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { dataBase } from "./config/pokeConection";
import { Link } from "react-router-dom";

const Pokedex = () => {
  const [pokeLista, setPokeLista] = useState([]);
  const mostrarPokeLista = async () => {
    const pokeCollection = collection(dataBase, "pokemon");
    const data = await getDocs(pokeCollection);
    setPokeLista(data.docs.map((doc) => ({ ...doc.data() })));
    console.log(data.docs.map((doc) => ({ ...doc.data() })));
  };
  useEffect(() => {
    mostrarPokeLista();
  }, []);
  return (
    <section>
      <Header />
      <h1>Listado de pokemon</h1>
      <section className="containerBtn">
        <Link to={"/poke-crear"} className="btnCrear">
          Crear
        </Link>
      </section>
      <section className="container_cards">
        {pokeLista.map((pokeItem) => (
          <section key={pokeItem.nombre} className="card">
            <img src={pokeItem.imagen} alt="pokemon" />
            <h1>{pokeItem.nombre}</h1>
            <p>{pokeItem.descripcion}</p>
            <h3>{pokeItem.tipo}</h3>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Pokedex;
