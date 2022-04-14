import React from 'react';
import './Movie.css';
import Galerie from './Galerie';




class Movie extends React.Component {
    render() {
        const { title, year, synopsis, director, posterUrl } = this.props;

        return (
            <article className='movie-item'>
                <h2>{title}</h2> 
                {/* cela correspond à this.props.title grâce à la ligne 7 */}
                <Galerie urls={posterUrl} title={title} />
                <p>Date de sortie : {year}</p>
                <p>Réalisateur : {director}</p>
                <p>synopsis : {synopsis}</p>
            </article>
        );
    }
}

export default Movie;