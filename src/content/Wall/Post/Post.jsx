import React from 'react';
import style from './Post.module.css'
const Post = (props) => {
    return (
        <div className={style.blockPost}>
            <img className={style.ava} src={props.post.ava} alt="ava"/>
            <div className={style.name}>{props.post.name}</div>
            <div className={style.text}>{props.post.text}</div>
            <div className={style.likes}>likes &rarr; {props.post.likesCount}</div>
        </div>
    );
};

export default Post;