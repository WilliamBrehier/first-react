import React from 'react';
import './App.css';
import Header from './component/Header';
import Movie from './component/Movie';
import movies from './data/movie-data';


/*
*
* 1) Est-ce que la donnée doit être accessible en dehors du scope de sa méthode ? Si non -> Variable local
* 2) Est-ce que la donnée doit être accessible en dehors du composant ? Si oui -> Props
* 3) Est-ce que la donnée a un impact direct ou indirect sur le rendu ? Si oui -> State
* 4) Sinon -> propriété classique
*
* */



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "resultMovies": "" ,
            "order": ""      
        }
    }

    filterMovies = (ev) => {
        this.setState({
            "resultMovies": ev.target.value.toLowerCase()
        });
       }

    
   
    

    render() {
        const {resultMovies, order} = this.state;

        return (
            <div className="App">
                <Header />

                <section>
                    <form>
                        <input type="text" placeholder="Rechercher un film" onChange={this.filterMovies} />
                    </form>
                </section>

                <div>
                    <span>Trier par : </span>
                    <button onClick={() => this.setState({"order": "year"})}>Année</button>
                    <button onClick={() => this.setState({"order": "title"})}>Titre</button>
                    <button onClick={() => this.setState({"order": "director"})}>Réalisateur</button>
                </div>
  
            
                <main>
                    {
                        movies
                        .filter(m =>
                            m.title.toLowerCase().includes(resultMovies)
                            || m.director.toLowerCase().includes(resultMovies)
                            || m.synopsis.toLowerCase().includes(resultMovies)
                            || m.year.toString().includes(resultMovies)
                        )
                        .sort((a, b) => !order ? 0 : a[order].toString().localeCompare(b[order].toString()))
                        .map(m => <Movie {...m} key={m.title + m.year} />)
                        // movies.map(m => <Movie {...m} key={m.title + m.year} />)
                            // le spread operator permet de récupérer toutes les propriétés d'un objet
                            // title={m.title}
                            // year={m.year}
                            // synopsis={m.synopsis}
                            // director={m.director}

                            /* <Movie 
                                title ="Bien dégagé derrière les oreilles"
                                year = {1789}
                                director = "Danton"
                                synopsis = "Le 16ème petit Louis s'en alla gaïment aux Invalides, puis se retrouva assailli par des sans-culottes au bonnet étrange"
                            /> */
                    }
                   
                </main>
            </div>
        );
    }
}

export default App;
