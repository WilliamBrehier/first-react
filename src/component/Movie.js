import React from 'react';
import './Movie.css';
import Galerie from './Galerie';




class Movie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "isShort": true
        }
    }
    
    
        moreInfo = () => {
            this.setState({
                "isShort": false
            });
        };
    
        lessInfo = () => {
            this.setState({
                "isShort": true
            });
        }

    
    

    render() {
        const {title, year, director, synopsis, posterUrl} = this.props;
        const {isShort} = this.state;

        return (
            <article className='movie-item'>
                <h2>{title}</h2> 
                {/* cela correspond à this.props.title grâce à la ligne 7 */}
                <Galerie urls={posterUrl} title={title} />
                <p>Date de sortie : {year}</p>
                <p>Réalisateur : {director}</p>
                <p>{isShort ? synopsis.substring(0, 20) + "..." : synopsis}</p>
                <button onClick={isShort ? this.moreInfo : this.lessInfo}>{isShort ? "Plus d'info" : "Moins d'info"}</button>
               
            </article>
        );
    }
}

export default Movie;