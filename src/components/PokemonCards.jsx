/* eslint-disable react/prop-types */

const PokemonCards = ({ pokemon, onSelectPokemon }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {pokemon.map((p, index) => (
                <button
                    key={p.name}
                    className="bg-gray-100 rounded-lg p-4 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    onClick={() => onSelectPokemon(p)}
                >
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                        alt={p.name}
                        width={150}
                        height={150}
                        className="mx-auto transition-transform duration-300 hover:scale-130"
                    />
                    <p className="text-center capitalize mt-2">{p.name}</p>
                </button>
            ))}
        </div>
    )
}

export default PokemonCards