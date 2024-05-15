import React, { Fragment } from 'react';
import './index.css';
import desarrolloWeb from './img/desarrollo-web';

function DesarrolloWeb(){
    return(
        <Fragment>
            <img src = {desarrolloWeb} alt = "foto desarrollo"/>
            <p>Desarrollo Web</p>
        </Fragment>
    );
}

export default DesarrolloWeb;