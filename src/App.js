import React from "react";
import style from './App.module.css';
import Header from "./content/Header/Header";
import NavBar from "./content/NavBar/NavBar";
import MainContent from './content/MainContent/MainContent'

function App() {
    return (
        <page className={style.app}>
            <header>
                <Header/>
            </header>
            <content className={style.content}>
                <NavBar/>
                <MainContent/>
            </content>
        </page>
    );
}

export default App;
