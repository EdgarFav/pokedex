/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const PokemonModal = ({ pokemon, onClose }) => {

    const [details, setDetails] = useState(null)

    useEffect(() => {
        fetch(pokemon.url)
            .then((response) => response.json())
            .then((data) => setDetails(data))
        console.log(pokemon.url);
    }, [pokemon])

    if (!details) return null

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-white rounded-lg p-6 max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="center text-3xl font-bold capitalize">{details.name}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        &times;
                    </button>
                </div>
                <div className="flex justify-center mb-4">
                    <motion.img
                        src={details.sprites.other.showdown.front_default || "/placeholder.svg"}
                        alt={details.name}
                        width={180}
                        height={180}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: [0.5, 1.2, 1] }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="font-bold">Type:</h3>
                        <p className="capitalize">{details.types.map((t) => t.type.name).join(", ")}</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Height:</h3>
                        <p>{details.height / 10} m</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Weight:</h3>
                        <p>{details.weight / 10} kg</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Abilities:</h3>
                        <p className="capitalize">{details.abilities.map((a) => a.ability.name).join(", ")}</p>
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="font-bold">Stats:</h3>
                    <div className="flex flex-col gap-1">
                        {details.stats.map((stat, index) => (
                            <div key={index} className="flex justify-between">
                                <span className="capitalize">{stat.stat.name}: </span>
                                <span>{stat.base_stat}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default PokemonModal