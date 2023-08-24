import React, { useState, useEffect, useContext } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ApiContext from "@/context/apicontext";
import { getMovieList } from "@/services/movie-service";
import { MoviesData } from "@/models/movie-model";

export default function BasicPagination() {
    const state = useContext(ApiContext);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage])

    const fetchData = async (page: number) => {
        try {
            // Appel de la fonction getMovieList pour obtenir les informations des films de la page spécifiée
            const movies = await getMovieList(currentPage);

            // Mettre à jour le state avec les informations des films obtenues depuis l'API
            state.setMoviesInfo(movies as MoviesData);
        } catch (error) {
            console.error("Erreur lors de la récupération des films :", error);
        }
    };


    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        console.log(page)
        // Mettre à jour le state local avec le numéro de page sélectionné par l'utilisateur
        setCurrentPage(page);
    };
    return (
        <Stack spacing={2} sx={{ margin: "30px 0" }}>
            <Pagination count={state.moviesInfo.total_pages} color="primary" onChange={handlePageChange} />
        </Stack>
    );
}
