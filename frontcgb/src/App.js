import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import "./assets/styles/global.css";



function App() {

    const [showList,setShowList] = useState(false);
    const [showCreateUser,setShowCreateUser] = useState(true);

    return (
    <div className="App">
        <Header setShowList={setShowList} setShowCreateUser={setShowCreateUser} />
        <Content showCreateUser={showCreateUser} showList={showList}/>
        <Footer />

    </div>
  );
}

export default App;
