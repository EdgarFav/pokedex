/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { usePokemonStore } from "../store/pokemonStore";
import { useEffect } from "react";
import CardSkeleton from "./CardSkeleton";

const PokemonFilters = ({ onSelectPokemon }) => {
    const { searchQuery, setSearchQuery, searchedPokemon, searchPokemon, loading } = usePokemonStore();
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 20;

    useEffect(() => {
        searchPokemon();
    }, []);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const filteredPokemon = searchedPokemon.filter((p) => {
        if (searchQuery === "") {
            return true;
        } else if (p.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            return true;
        }
        return false;
    });

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filteredPokemon.slice(indexOfFirstCard, indexOfLastCard);

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
                {currentCards.map((p) => (
                    <button
                        key={p.name}
                        className="bg-gray-100 rounded-lg p-4 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
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

            <div className="flex justify-between mt-4 w-full">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="bg-gray-300 p-2 rounded-2xl disabled:opacity-50 cursor-pointer"
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={indexOfLastCard >= filteredPokemon.length}
                    className="bg-gray-300 p-2 rounded-2xl disabled:opacity-50 cursor-pointer"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PokemonFilters;