import React, { Fragment } from 'react';
import './index.css';
import fotoIan from "./img/ian"

function Ian(){
    return(
        <Fragment>
            <div class = "presentacion-ian">
                <img src = {fotoIan} alt = "foto de Ian"></img>
                <div class = "txt-ian">
                    <p>
                        Soy estudiante de la secundaria ORT desde 2019, y desde 2022 estoy en la orientacion de Informatica. 
                        Me apasiona mucho la politica exterior y los debates por eso me gustaria estudiar algo relacionado a eso.
                        Me gusta mucho trabajar en grupos y mas si es con amigos, ya que suele ser mas divertido y llevadero.
                        En cuanto a mis habilidades soy muy habil para debatir, hablar frente a un publico y me gusta diseñar.
                    </p>
                </div>
            </div>
        </Fragment>
    );
}

export default Ian;