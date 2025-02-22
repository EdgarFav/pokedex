/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select"
import { usePokemonStore } from "../store/pokemonStore";
import { useEffect } from "react";
import CardSkeleton from "./CardSkeleton";

const PokemonFilters = ({ onSelectPokemon }) => {

    const { searchQuery, setSearchQuery, searchedPokemon, searchPokemon, loading } = usePokemonStore();

    // useEffect(() => {
    //     setTimeout(() => {
    //         searchPokemon();
    //     }
    //         , 2000);
    // }, [])

    useEffect(() => {
        searchPokemon();
    }, [])

    return (
        <div className="flex flex-col items-center">
            <Input
                type="text"
                placeholder="🔍Search Pokémon..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mb-5"
            />

            {loading && <CardSkeleton cards={100} />}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {searchedPokemon.filter((p) => {
                    if (searchQuery === "") {
                        return true
                    } else if (p.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                        return true
                    }
                    return false
                }).map((p) => (
                    <button
                        key={p.name}
                        className="bg-gray-100 rounded-lg p-4 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        onClick={() => onSelectPokemon(p)}
                    >
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
                            alt={p.name}
                            width={150}
                            height={150}
                            className="mx-auto transition-transform duration-300 hover:scale-130"
                        />
                        <p className="text-center capitalize mt-2">{p.name}</p>
                    </button>
                ))}
            </div>

            {/* <Select className="w-5">
                <SelectTrigger>
                    <SelectValue placeholder="Select Pokémon types" />
                </SelectTrigger>
                <SelectContent>
                </SelectContent>
            </Select> */}

        </div>
    )
}

export default PokemonFilters