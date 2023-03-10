import React from "react";
import style from './App.module.css';
import Header from "./content/Header/Header";
import NavBar from "./content/NavBar/NavBar";
import MainContent from './content/MainContent/MainContent'

function App() {
    return (
        <div className={style.app}>
            <header>
                <Header/>
            </header>
            <div className={style.content}>
                <NavBar/>
                <MainContent/>
            </div>
        </div>
    );
}

export default App;
