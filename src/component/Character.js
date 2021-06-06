import React from 'react';

class Character extends React.Component {
    render() {
        return (
            <div className="Card">
                <div className="Card-Header">
                    <img src={this.props.character.image} className="Card-Img" alt="Personaje" />
                </div>    
                <div className="Card-Body">
                    <h3 className="Card-Title">{this.props.character.name}</h3>
                    <div className="Card-Resumen" >
                        <div>{this.props.character.status}</div>
                        <div>{this.props.character.species}</div>
                        <div>{this.props.character.gender}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Character;