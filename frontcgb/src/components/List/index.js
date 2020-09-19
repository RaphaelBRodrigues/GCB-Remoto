import React from 'react';

import "./index.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faClipboard ,faSearch } from '@fortawesome/free-solid-svg-icons'


export default () => {
    return (
        <div id="search-block">
          <FontAwesomeIcon icon={faSearch}/>   <input placeholder={"Insira o CRM do médico"} type="text" />
        </div>
    );
}

