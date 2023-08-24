import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Movie } from '@/models/movie-model';
import { styled, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ApiContext from '@/context/apicontext';

interface RecipeReviewCardProps {
    element: Movie;
}

const FixedWidthCard = styled(Card)({
    width: 350,
    margin: '5px 10px',
});

const CardActionsWrapper = styled(CardActions)({
    justifyContent: 'space-between',
});

export default function RecipeReviewCard({ element }: RecipeReviewCardProps) {

    const state = useContext(ApiContext);

    // Vérifier si le film est déjà dans la liste des favoris
    const isFavorite = state.favoriteMovies.some((movie) => movie.id === element.id);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            // Le film est déjà dans la liste des favoris, donc on le retire
            state.setFavoriteMovies((prevFavoriteMovies) => prevFavoriteMovies.filter((movie) => movie.id !== element.id));
        } else {
            // Le film n'est pas dans la liste des favoris, donc on l'ajoute
            state.setFavoriteMovies((prevFavoriteMovies) => [...prevFavoriteMovies, element]);
        }
    };

    return (
        <FixedWidthCard sx={{ maxWidth: 350 }}>
            <CardHeader
                titleTypographyProps={{ fontSize: '1em', fontWeight: 'bold' }}
                title={element.title}
            />
            <CardMedia
                component="img"
                height="194"
                image={process.env.NEXT_PUBLIC_IMAGE_PREFIXE + element.poster_path}
                alt="Paella dish"
            />

            <CardActionsWrapper disableSpacing>
                <Typography sx={{ margin: '0px 10px' }}>Note: {element.vote_average}</Typography>
                <IconButton aria-label="add to favorites" onClick={handleFavoriteToggle}>
                    {/* <FavoriteIcon /> */}
                    {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteIcon />}
                </IconButton>
                <IconButton aria-label="view">
                    <VisibilityIcon />
                </IconButton>
            </CardActionsWrapper>
        </FixedWidthCard>
    );
}
