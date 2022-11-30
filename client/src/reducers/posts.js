export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL' :
            return action.payload;
        case 'CREATE' :
            return [...posts, action.payload];
        case 'UPDATE' :
            posts.map(post => post._id === action.payload._id ? action.payload : post)
            console.log('update', posts)
            return posts.map(post => post._id === action.payload._id ? action.payload : post);
        default :
            return posts;
    }
}