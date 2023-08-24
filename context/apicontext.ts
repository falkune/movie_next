// import {createContext}  from "react";
// import { MoviesData } from "@/models/movie-model";
 
// const ApiContext = createContext({});
 
// export const ApiProvider = ApiContext.Provider;
// export default ApiContext;



// ça c'est pour l'evolution quand les favoris seront gérés
import { createContext } from "react";
import { MoviesData } from "@/models/movie-model";

// Définir une interface pour le type du contexte
interface ApiContextType {
  moviesInfo: MoviesData;
  setMoviesInfo: React.Dispatch<React.SetStateAction<MoviesData>>;
  favoriteMovies: MoviesData["results"];
  setFavoriteMovies: React.Dispatch<React.SetStateAction<MoviesData["results"]>>;
}

// Créer le contexte avec la valeur par défaut {} comme avant, mais en utilisant l'interface comme type
const ApiContext = createContext<ApiContextType>({} as ApiContextType);

// Exporter le contexte
export const ApiProvider = ApiContext.Provider;
export default ApiContext;
