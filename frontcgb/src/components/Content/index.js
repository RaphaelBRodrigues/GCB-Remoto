import React, {useState} from 'react';
import "./index.css";

import List from '../List';
import CreateForm from '../CreateForm';

import Search from '../Search';

export default ({showList ,showCreateUser}) =>{




    return(
        <main>
            <Search />
            {showList && <List/>}
            {showCreateUser && <CreateForm/>}
        </main>
    );
}