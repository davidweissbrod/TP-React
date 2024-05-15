import react, { Fragment } from "react"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Presentacion(){
    return(
        <Fragment>
            <div class = "presentacion">
                <img src="/img/infor-animado" alt="imagen arriba"></img>
                <h3>Hola!</h3>
                <h1>Somos Ian Roitman y David Weissbrod</h1>
                <p>Estudiantes de la escuela ORT en orientacion en Informatica</p>
            </div>
            <Presentacion/>
        </Fragment>
    );
}

export default Presentacion;