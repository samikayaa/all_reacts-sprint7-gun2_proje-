import Header from './components/Header';
import Footer from './components/Footer';

import Main from './components/Main';
import SideBar from './components/SideBar';
import UserList from './components/UserList'; // adam gibi import ettim. 

import './App.css';
import './components/Layout.css';
import "bootstrap/dist/css/bootstrap.min.css" // 'npm i bootstrap'  sonrasında internetten bulup yazdım. :) 

import { useState } from 'react';


function App() {

    const [kullanicilar, setKullanicilar] = useState([]);

    const addUser = (kullanici) => {
        setKullanicilar([...kullanicilar, kullanici])
    }

    return (
        <>
            <Header />
            <div className="content-section">
                <SideBar />
                <SideBarss2 />
                <Main />
                <Mainss2 addUser={addUser} />
                <UserList kullanicilar={kullanicilar} />
                <UserListss2 kullanicilar={kullanicilar} />
            </div>
            <Footer />
        </>
    );
}


export default App;
