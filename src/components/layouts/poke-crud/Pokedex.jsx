import Header from "../../helpers/Header";
import { useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { dataBase } from "./config/pokeConection";

const Pokedex = () => {
  const [pokeLista, setPokeLista] = useState();
  const mostrarPokeLista = async () => {
    const pokeCollection = collection(dataBase, "pokemon");
    const data = await getDocs(pokeCollection);
    setPokeLista(data.docs.map((doc) => ({ ...doc.data() })));
    console.log(data.docs.map((doc) => ({ ...doc.data() })));
  };
  //   mostrarPokeLista()
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
