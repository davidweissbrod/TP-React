import React, { Fragment } from 'react';
import './index.css';
import bd from './img/bd';

function BD(){
    return(
        <Fragment>
            <img src = {bd} alt = "foto bd"/>
            <p>Manejo de bases de datos SQL Server</p>
        </Fragment>
    );
}

export default BD;