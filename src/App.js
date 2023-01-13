import React from "react";
import style from './App.module.css';
import Header from "./content/Header/Header";
import MainContent from "./content/MainContent/MainContent";
import NavBar from "./content/NavBar/NavBar";

function App(props) {
    return (
        <page className={style.app}>
            <header>
                <Header/>
            </header>
            <content className={style.content}>
                <NavBar/>
                <MainContent state={props.state} addPost={props.addPost}/>
            </content>
        </page>
    );
}

export default App;
