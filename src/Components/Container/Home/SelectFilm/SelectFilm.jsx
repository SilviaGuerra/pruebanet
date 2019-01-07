import React from 'react';
import selectFilmStyles, { stylesMaterial } from './SelectFilmStyles';
import { Search, Notifications } from '@material-ui/icons';

const SelectFilm = (props) => {
    return (
        <div {...selectFilmStyles()}>
            <img src={props.movies.p_1} alt="p1"/>
            <img src="https://imgc.allpostersimages.com/img/print/posters/toy-story-woody-buzz_a-G-13390942-0.jpg" alt="Toy story" />
            <img              src="https://m.media-amazon.com/images/M/MV5BNTEwYzNiMGUtNzRlYS00MTMzLTliNzgtOGUxZGZiNThlNWYwXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_.jpg"
            alt="Black mirror" />
            <img src="https://images-na.ssl-images-amazon.com/images/I/51sRANqn-RL.jpg" alt="Amelie" />
            <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg" alt="Avengers" />
            <img src="https://imgc.allpostersimages.com/img/print/posters/toy-story-woody-buzz_a-G-13390942-0.jpg" alt="Toy story" />
            <img              src="https://m.media-amazon.com/images/M/MV5BNTEwYzNiMGUtNzRlYS00MTMzLTliNzgtOGUxZGZiNThlNWYwXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_.jpg"
            alt="Black mirror" />
            <img src="https://images-na.ssl-images-amazon.com/images/I/51sRANqn-RL.jpg" alt="Amelie" />
            <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg" alt="Avengers" />
            <img src="https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_.jpg" alt="Inside out"/>
        </div>
    );
}

export default SelectFilm;
