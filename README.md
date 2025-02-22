# Pokédex

Este proyecto es una Pokédex interactiva construida con React y Vite. Permite a los usuarios buscar y ver detalles de diferentes Pokémon utilizando la API de PokeAPI.

## Características

- **Búsqueda de Pokémon**: Los usuarios pueden buscar Pokémon por nombre.
- **Visualización de detalles**: Al seleccionar un Pokémon, se muestra un modal con detalles como tipo, altura, peso, habilidades y estadísticas.
- **Paginación**: La lista de Pokémon se puede navegar mediante paginación de 20 en 20 cards.
- **Skeleton Loading**: Muestra un esqueleto de carga mientras se obtienen los datos de los Pokémon.
- **Diseño Responsivo**: La interfaz se adapta a diferentes tamaños de pantalla.

## Tecnologías Utilizadas

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **Vite**: Herramienta de construcción rápida para proyectos de frontend.
- **Tailwind CSS**: Framework de CSS para estilos rápidos y responsivos.
- **Framer Motion**: Biblioteca para animaciones en React.
- **Zustand**: Biblioteca para el manejo del estado global.
- **Radix UI**: Componentes accesibles y sin estilo para construir interfaces de usuario.
- **ESLint**: Herramienta para el análisis de código estático y mantener la calidad del código.
- **API de PokeAPI**: Fuente de datos para obtener información sobre los Pokémon.

## Aspectos Clave del proyecto

- **Home**:
  
![image](https://github.com/user-attachments/assets/79c6be32-ee6d-43af-b7b4-2f3637e8d90e)

- En la seccion de home maneje una UI minimalista enfoncadome en los colores primarios Pokemons y me enfoque principalmente en la UX agregando funcionalidad e interactividad a la pagina con animaciones de la biblioteca Framer motion para hacerlas suaves y precisas.
- Implemente una vista de loader de tipo skeleton con la biblioteca Skeleton React Loading
- Utilice Zuztand para el manejo de estados globales por la facilidad y practicidad de uso, no lo habia usado y decidi aprender a manejarlo e implementarlo correctamente

- **Detail**:
  
![image](https://github.com/user-attachments/assets/f4bb4881-663e-4b9c-886b-493ea206ed30)

-En esta seccion se usaba la URL de imagenes de la API de pokeapi mostrando gifs y los datos solicitados en cada card por medio de un modal
