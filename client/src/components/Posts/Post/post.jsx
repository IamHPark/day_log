import React from "react";
import { Card, CardMedia, Typography, Button, CardContent, CardActions } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux'

import useStyles from './styles';
import { deletePost } from '../../../actions/posts'

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    // const { post } = props
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} alt="image" component="img"/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button size="small" onClick={()=>{ setCurrentId(post._id)}}><MoreHorizIcon fontSize="medium"/></Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map(tag => `#${tag}`)}</Typography>
            </div>
            <Typography className={classes.title} variant="h6" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography className={classes.body} variant="body1" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={()=>{}}>
                    <ThumbUpAltIcon fontSize="small"/>
                    Like {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={()=> dispatch(deletePost(post._id)) }>
                    <DeleteIcon fontSize="medium"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;