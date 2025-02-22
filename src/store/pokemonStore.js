import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const usePokemonStore = create(devtools((set, get) => ({

    pokemons: [],
    selectedPokemon: null,
    loading: true,
    searchQuery: "",
    searchedPokemon: [],

    getPokemons: async () => {
        try {
            set({ loading: true });

            const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
            if (!res.ok) throw new Error("Error al obtener los Pokémon");

            const data = await res.json();
            set({ pokemons: data.results, loading: false });
        } catch (error) {
            console.error(error);
            set({ loading: false });
        }
    },

    setSelectedPokemon: (pokemon) => set({ selectedPokemon: pokemon }),

    setSearchQuery: (query) => {
        set({ searchQuery: query });

        // Si el usuario borra el input, volvemos a cargar los Pokémon iniciales
        if (!query) {
            set({ searchedPokemon: get().searchedPokemon });
            return;
        }

        // Llamamos a searchPokemon cuando cambia el query
        get().searchPokemon(query);
    },

    searchPokemon: async () => {
        try {
            set({ loading: false });

            const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`);
            if (!res.ok) throw new Error("Error al obtener los Pokémon");

            const data = await res.json();
            const pokemonsWithId = data.results.map((pokemon) => {
                const id = pokemon.url.split('/').filter(Boolean).pop();
                return { ...pokemon, id };
            });

            set({ searchedPokemon: pokemonsWithId, loading: false });
        } catch (error) {
            console.error(error);
            set({ loading: false });
        }
    },

})));
