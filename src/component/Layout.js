import React from 'react';


//Imagenes
import titleRyM from '../images/TitleRickAndMarty.png';

//Estilos
import './styles/Layout.css';


function Layout (props) {
    return (
        <div>
            <div className="Layout">
                <div className="Layout-head">
                    <img src={titleRyM} alt="Rick And Marty"></img>
                </div>
            </div>
            {props.children}
        </div>
    );
}

export default Layout;