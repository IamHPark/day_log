import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post/post";
import useStyles from './styles'

const Posts = ({ setCurrentId }) => {
    // reducer/index.js 안에 reducer posts라고 저장해놨음
    const posts = useSelector((state) => state.posts )
    const classes = useStyles();

    console.log(posts)
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container spacing={3} alignItems="stretch">
                {posts.map(post => (
                    <Grid key={post._id} item xs={6} sm={4}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts;