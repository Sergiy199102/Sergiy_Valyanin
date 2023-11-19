
import React from 'react';
import { Card, CardMedia, Button, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    card: {
        position: 'relative',
        width: 395,
        height: 222,
        borderRadius: 8,
        overflow: 'hidden',
    },
    cardMedia: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.80) 0%, rgba(20, 20, 20, 0.40) 50%, rgba(83, 100, 141, 0.00) 100%)',
    },
    button: {
        position: 'absolute',
        bottom: 10,
        left: '50%',
        transform: 'translateX(-50%)',
        border: '1px solid #E50914',
        background: '#E50914',
        width: 100,
        height: 30,
        color: '#fff',
    },
}));

const SingleCard = ({ id, name, time, image, onClickHandler }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card} onClick={() => onClickHandler(id)}>
            <CardMedia
                component="img"
                alt={name}
                image={image}
                className={classes.cardMedia}
            />
            <div className={classes.overlay}></div>
            <Button className={classes.button} variant="contained">
                Click Me
            </Button>
        </Card>
    );
};

export default SingleCard;


