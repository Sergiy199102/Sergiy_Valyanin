import React from 'react';
import MenuComponent from './Components/Navigation/Navigation.jsx';
import MovieComponent from './Components/single-card/SingleCard.jsx';
import { Grid, Paper, Typography } from '@mui/material';


const App = () => {
    return (
        <div>
            <MenuComponent />
        </div>
    );
};


const App = () => {
    const handleMovieClick = (movieId) => {
        console.log('Clicked on movie with ID:', movieId);
    };

    return (
        <div>
            <MovieComponent
                id={1}
                name="Movie 1"
                time="2h 30m"
                image="path/to/image1.jpg"
                onClickHandler={handleMovieClick}
            />

            <MovieComponent
                id={2}
                name="Movie 2"
                time="1h 45m"
                image="path/to/image2.jpg"
                onClickHandler={handleMovieClick}
            />
        </div>
    );
};


const mockData = [
    { id: 1, name: 'Home Alone', image: 'https://example.com/home_alone.jpg', time: '1hr: 50mins' },
    { id: 2, name: 'Black Adam', image: 'https://example.com/black_adam.jpg', time: '2hr: 10mins' },
    { id: 3, name: 'Back to the Future', image: 'https://example.com/back_to_the_future.jpg', time: '2hr: 50mins' },
    { id: 4, name: 'Avengers', image: 'https://example.com/avengers.jpg', time: '2hr:30mins' },
];

const App = () => {
    const handleMovieClick = (movieId) => {
        console.log('Clicked on movie with ID:', movieId);
    };

    return (
        <Grid container spacing={2}>
            {mockData.map((movie) => (
                <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                    <SingleCard
                        id={movie.id}
                        name={movie.name}
                        time={movie.time}
                        image={movie.image}
                        onClickHandler={handleMovieClick}
                    />
                </Grid>
            ))}
        </Grid>
    );
};


<Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
    <Typography variant="body2" align="center">
        &copy; 2023 Your Movie App Footer
    </Typography>
</Paper>

export default App;