import Hero from "../components/Hero/Hero";
import Cards from "../components/Cards/Cards";
import tendencias from "../components/assets/data";
import nuevacoleccion from "../components/assets/new_collections";
// import Hero from "../components/Hero/Hero";

function Tienda() {


  return (
    <>
      <Hero />
      <Cards data={datitosTendencias} titulo="Tendencias" />
      <Cards data={datatitosNewCollection} titulo="Nueva colección" />
    </>
  );
}

export default Tienda;
