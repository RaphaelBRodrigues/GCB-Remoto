import React, {useState} from 'react';
import "./index.css";

import List from '../List';
import CreateForm from '../CreateForm';

import Search from '../Search';

export default ({showList ,showCreateUser , setShowList , setShowCreateUser}) =>{


    const [customSearchDoctors,setCustomSearchDoctors] = useState([]);
    const [showRawList,setShowRawList] = useState(true);




    return(
        <main>
            <Search setShowRawList={setShowRawList} setCustomSearchDoctors={setCustomSearchDoctors} />
            {showList && <List showRawList={showRawList} customSearchDoctors={customSearchDoctors} />}
            {showCreateUser && <CreateForm setShowList={setShowList} setShowCreateUser={setShowCreateUser}/>}
        </main>
    );
}