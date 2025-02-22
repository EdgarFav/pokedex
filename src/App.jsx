

import './App.css'
// import { useEffect } from "react"
import { AnimatePresence } from "framer-motion"
// import PokemonCards from './components/PokemonCards'
import PokemonModal from './components/PokemonModal'
import PokemonFilters from './components/PokemonFilter'
// import CardSkeleton from './components/CardSkeleton'
import { usePokemonStore } from './store/pokemonStore'
import Footer from './components/Footer'

function App() {

  // const { pokemons, selectedPokemon, loading, getPokemons, setSelectedPokemon } = usePokemonStore();
  const { selectedPokemon, setSelectedPokemon } = usePokemonStore();


  // useEffect(() => {
  //   setTimeout(() => {
  //     getPokemons();
  //   }
  //     , 2000);
  // }, []);

  // useEffect(() => {
  //   getPokemons();
  // }, []);

  return (
    <main className="min-h-screen bg-red-600 p-4">
      <div className="min-h-screen max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Pokédex</h1>
        <PokemonFilters onSelectPokemon={setSelectedPokemon} />
        {/* {loading && <CardSkeleton cards={20} />}
        <PokemonCards pokemon={pokemons} onSelectPokemon={setSelectedPokemon} /> */}
        <AnimatePresence>
          {selectedPokemon && <PokemonModal pokemon={selectedPokemon} onClose={() => setSelectedPokemon(null)} />}
        </AnimatePresence>
      </div>
      <Footer />
    </main>
  )
}

export default App
