import React from 'react';
import "./index.css";

import List from '../List';

import Search from '../Search';

export default () =>{
    return(
        <main>
            <Search />
            {true && <List/>}
        </main>
    );
}