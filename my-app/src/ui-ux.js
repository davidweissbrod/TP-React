import React, { Fragment } from 'react';
import './index.css';
import fotoUxUi from './img/ui-ux'

function UxUi(){
    return(
        <Fragment>
            <img src = {fotoUxUi} alt = "foto ux-ui"/>
            <p>UX/UI</p>
        </Fragment>
    );
}