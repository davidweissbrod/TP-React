import React, { Fragment } from "react"
import './index.css';
import fotoDavidIan from "./img/david-ian"

function Presentacion(){
    return(
        <Fragment>
            <div class = "presentacion">
                <img src={fotoDavidIan} alt="imagen arriba"></img>
                <h3>Hola!</h3>
                <h1>Somos Ian Roitman y David Weissbrod</h1>
                <p>Estudiantes de la escuela ORT en la orientacion de Informatica</p>
            </div>
        </Fragment>
    );
}

export default Presentacion;