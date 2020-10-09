import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import Landing from '../screens/Landing'
import Posts from '../screens/Posts'
import Post from '../screens/Post'


export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Posts}/>
            {/* <Route path='/blog' component={Posts}/> */}
            <Route exact path='/blog/:id' component={Post}/>
        </Switch>
    )
}