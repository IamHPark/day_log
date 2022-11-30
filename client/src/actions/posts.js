import * as api from '../api';
// be able to use functions inside api files like method. ex. api.fetchPosts

// Action Creators
// use thunk -> dealing with async logic -> async () -> instead of returning at the end, use dispatch()
export const getPosts = () => async (dispatch) => {

    try {
        // { data } = respons.data
        const { data } = await api.fetchPosts();
        console.log(data)
        dispatch({ type: "FETCH_ALL", payload: data })
    } catch (error) {
        console.log(error.message)
    }

    // must clare actions
    // action must have type
    // payload : usually store all of posts
    // const action = { type : 'FETCH_ALL', payload : [] }
    // dispatch(action);  -> go inside try
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)
        console.log('in update', data)
        dispatch({ type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}


// used in App.js dispatch