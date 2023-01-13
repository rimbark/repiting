import React from 'react';
import style from './Wall.module.css'
import Post from "./Post/Post";
import {outputPost} from "../../redux/state";

const Wall = (props) => {
    let inputPost = props.state.wallData.inputPost.map( post => <Post post={post}/>)
    let outputText = React.createRef();
    let onTextChanging = () => {
    let text = outputText.current.value;
    outputPost(text);
    }

    return (
        <div className={style.wall}>
            <div className={style.image}></div>
            <div className={style.myPosting}>
                <textarea className={style.textArea} ref={outputText} onChange={onTextChanging} value={props.state.wallData.outputPost}></textarea>
                <button onClick={props.addPost}>Push me to sent message</button>
            </div>
            <div className={style.myPosts}>
                {inputPost}
            </div>
        </div>
    );
}
export default Wall;