import Header from './components/Header';
import Footer from './components/Footer';

import Main from './components/Main';
import SideBar from './components/SideBar';
import UserList from './components/UserList'; // adam gibi import ettim. 


import './App.css';
import './components/Layout.css';
import "bootstrap/dist/css/bootstrap.min.css" // 'npm i bootstrap'  sonrasında internetten bulup yazdım. :) 


function App() {
    return (
        <>
            <Header />
            <div className="content-section">
                <SideBar />
                <Main />
                <UserList />
            </div>
            <Footer />
        </>
    );
}


export default App;
