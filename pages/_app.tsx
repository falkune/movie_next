import { ApiProvider } from "@/context/apicontext";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { getMovieList } from "@/services/movie-service";
import { Movie, MoviesData } from "@/models/movie-model";

function MyApp({ Component, pageProps }: AppProps) {
  // Votre state global ou initialisation ici si nécessaire
  const [moviesInfo, setMoviesInfo] = useState<MoviesData>({
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Appel de la fonction getMovieList pour obtenir les informations des films
        const movies: any = await getMovieList(moviesInfo.page);

        setMoviesInfo(movies);
      } catch (error) {
        console.error("Erreur lors de la récupération des films :", error);
      }
    };

    fetchData();
  }, []);


  return (
    <ApiProvider value={{ moviesInfo, setMoviesInfo, favoriteMovies, setFavoriteMovies }}>
      <Component {...pageProps} />
    </ApiProvider>
  );
}

export default MyApp;
