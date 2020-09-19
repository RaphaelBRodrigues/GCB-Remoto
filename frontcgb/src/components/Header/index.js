import React from 'react';
import logo from '../../assets/images/logo.png';
import "./index.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faClipboard } from '@fortawesome/free-solid-svg-icons'

export default () =>{
    return(
        <section>
            <header>
                    <nav>
                        <ul>
                            <li>
                                <a>
                                    <img src={logo} />
                                </a>
                            </li>
                        </ul>
                </nav>
             </header>
            <nav>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faClipboard} />
                        <p>
                            Listar
                        </p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faPlus} />
                        <p>
                            Criar
                        </p>
                    </li>
                </ul>
        </nav>
    </section>


    );
}