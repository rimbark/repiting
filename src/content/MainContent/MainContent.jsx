import React from 'react';
import style from './MainContent.module.css'
import Wall from "../Wall/Wall";
import {Route, Routes} from "react-router-dom";

const MainContent = (props) => {
    return (
        <div className={style.placement}>
            <Routes>
                <Route path={"/wall/*"} element={<Wall state={props.state} addPost={props.addPost}/>}/>
                {/*<Messages/>*/}
                {/*<Music/>*/}
                {/*<Photos/>*/}
            </Routes>
        </div>
    );
}

export default MainContent;