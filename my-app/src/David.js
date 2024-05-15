import React, { Fragment } from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function David(){
    return(
        <Fragment>
            <img src = "/img/david"></img>
            <div class = "txt-david">
                <p>
                    Soy un estudiante de la Escuela ORT desde 2020, cuando entre a la institucion en
                    primer año. Elegi la especializacion de informatica, ya que me apasiona todo lo que 
                    tenga que ver con la tecnologia. Participo muy bien en proyectos grupales y soy capaz
                    de tomar una posicion de lider en estos cuando es necesario. Siempre trabajo con mucho entusiasmo
                    y busco lo mejor para el proyecto.

                    Edad: 17 años
                    Email: david.weissbrod@gmail.com
                </p>
            </div>
            <David/>
        </Fragment>
    );
}

export default David;