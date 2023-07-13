import Header from "../../helpers/Header";
import { useState } from "react";
import { getDocs, collection } from "firebase/firestore";

const Pokedex = () => {
  const [pokeLista, setPokeLista] = useState();
  const mostrarPokeLista = () => {
    
  }
  return (
    <section>
      <Header />
      <section>
        <h1>Listado de pokemon</h1>
      </section>
    </section>
  );
};

export default Pokedex;
