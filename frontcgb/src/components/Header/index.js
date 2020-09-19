import React from 'react';
import logo from '../../assets/images/logo.png';
import "./index.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faClipboard } from '@fortawesome/free-solid-svg-icons'

export default ({setShowList ,setShowCreateUser }) =>{



    function showCreateUser(){
        setShowCreateUser(true);
        setShowList(false);
    }

    function showList(){
        setShowCreateUser(false);
        setShowList(true);
    }

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
                    <li onClick={showList}>
                        <FontAwesomeIcon icon={faClipboard} />
                        <p>
                            Listar
                        </p>
                    </li>
                    <li onClick={showCreateUser}>
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