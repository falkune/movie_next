import React, { useContext } from "react";
import ApiContext from "@/context/apicontext";
import RecipeReviewCard from "./Movie";
import { Movie } from "@/models/movie-model";
import { Alert, AlertTitle, Box } from "@mui/material";


const FavoriteMovies = () => {
    const state = useContext(ApiContext);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Liste des favoris</h1>
            <div style={styles.container}>
                {state.favoriteMovies.length > 0 ? (
                    state.favoriteMovies.map((element: Movie) => (
                        <RecipeReviewCard key={element.id} element={element} />
                    ))
                ) : (
                    <Alert severity="info">
                        <AlertTitle>Info</AlertTitle>
                        Vous n'avez pas encore ajouté de favoris.
                    </Alert>
                )}
            </div>
        </Box>
    )
}
export default FavoriteMovies;

const styles = {
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    } as React.CSSProperties,
}