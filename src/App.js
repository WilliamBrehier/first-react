import React from 'react';
import './App.css';
import Header from './component/Header';
import Movie from './component/Movie';
import movies from './data/movie-data';


class App extends React.Component {

    render() {

        return (
            <div className="App">
                <Header />
                <main>
                    {
                        movies.map(m => <Movie {...m} />)
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
