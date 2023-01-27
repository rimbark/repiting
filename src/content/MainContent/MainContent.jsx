import React from 'react';
import style from './MainContent.module.css'
import {Route, Routes} from "react-router-dom";
import WallContainer from '../Wall/WallContainer'

const MainContent = () => {
    return (
        <div className={style.placement}>
            <Routes>
                <Route path={"/wall/*"} element={<WallContainer/>}/>
                <Route path={'/messages/*'} element={<MessagesContainer/>}/>
                {/*<Music/>*/}
                {/*<Photos/>*/}
            </Routes>
        </div>
    );
}

export default MainContent;