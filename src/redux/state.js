let rendePage = () => {}

let state = {
    wallData : {
        inputPost: [
            {id: 1, ava: "https://pic.rutubelist.ru/user/66/37/66370b638af9d17b6d6a359d2e7c29d5.jpg", name: "Vasya", text: "First! Bitches!", likesCount: 5},
            {id: 2, ava: "https://pic.rutubelist.ru/user/66/37/66370b638af9d17b6d6a359d2e7c29d5.jpg", name: "Petya", text: "Second message :(", likesCount: 10},
        ],
        outputPost: ''
    }
}
window.state = state;
export let outputPost = (props) => {
    state.wallData.outputPost = props;
    rendePage();
}

export let addPost = () => {
    debugger;
    let newPost = {
        id: 3,
        ava: "https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg",
        name: "Leha",
        text: state.wallData.outputPost,
        likesCount: 0
    };
    state.wallData.inputPost.push(newPost);
    state.wallData.outputPost = "";
    rendePage();
}

export let subscribe = (observer) => {
    rendePage = observer;
}

export default state;