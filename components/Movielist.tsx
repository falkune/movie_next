import React, { useContext } from "react";
import ApiContext from "@/context/apicontext";
import RecipeReviewCard from "./Movie";
import { Movie } from "@/models/movie-model";
import { Box } from "@mui/material";
import BasicPagination from "./pagination";
import movieStyles from '../public/css/movie.module.css'

const MovieList = () => {
    const state = useContext(ApiContext);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60%' }}>
            <h1>Liste des films de l'API</h1>
            <div className={movieStyles.container}>
                {
                    state.moviesInfo.results.map((element: Movie) =>
                        <RecipeReviewCard key={element.id} element={element} />
                    )
                }
            </div>
            <BasicPagination />
        </Box>
    )

}
export default MovieList;
