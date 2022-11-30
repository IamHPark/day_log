import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux'

import { getPosts } from './actions/posts'
import logo from './images/logo.png'
import Posts from "./components/Posts/posts";
import Form from './components/Form/form'
import useStyles from './styles'


const App = () => {
    const [currentId, setCurrentId] = useState(0)
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch, currentId])


    return (
        <Container maxidth="lg" >
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">My Logs</Typography>
                <img className={classes.image} src={logo} alt="logo" height="60px" width="60px"/>
            </AppBar>
            <Grow in >
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={8}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;