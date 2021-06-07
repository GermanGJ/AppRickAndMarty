import React from 'react';

import Character from './Character';
import Loader from './Loader';

import './styles/Personajes.css';


class Characters extends React.Component {

    state = {
        nextPage: 1,
        loading: true,
        error: null,
        data: {
            results: [],
        }
    };

    componentDidMount() {
        this.fetchCharacters();
    }

    fetchCharacters = async () => {
        this.setState({ loading: true, error: null });
        try {
            await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`)
                .then(response => response.json())
                .then(data => this.setState({loading: false, 
                                                data: {
                                                    info: data.info,
                                                    results: [].concat(this.state.data.results, data.results)
                                                },
                                                nextPage: this.state.nextPage + 1,
                                            }));
        }
        catch (error){
            this.setState({loading: false, error: error});
        }
    }

    render() {

        if (this.props.error) {
            return `Error: ${this.props.error.message}`;
        }

        if (this.state.data.results.length === 0) {
            return (
              <div>
                <h3>No badges were found.</h3>
              </div>
            );
          }

        return (
            <div>
                <div className="Characters">
                    {
                        this.state.data.results.map((charter) => {
                            return (
                                <div className="Character-Card" key={charter.id} >
                                    <Character character={charter}>{charter.name}</Character>
                                </div>
                            );
                        })
                    }
                </div>
                
                <div>
                    {
                        this.state.loading && (
                            <div>
                                <Loader></Loader>
                            </div>    
                        )
                    }
                </div>

                <div className="Grupo-Boton" >
                    {!this.state.loading && (
                            <button className="Grupo-Boton__Full" onClick={() => this.fetchCharacters()} >Cargar 20 Personajes Mas....</button>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Characters;