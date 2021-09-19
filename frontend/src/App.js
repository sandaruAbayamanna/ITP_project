import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import CreatePost from './components/CreatePost'
import EditPost from './components/EditPost'
import Home from './components/Home'
import PostDetails from './components/PostDetails'
import NavBar from './components/NavBar'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <NavBar/>
        
        <Route path="/" exact component={Home}/>
        <Route path="/addf" component={CreatePost}/>
        <Route path="/editf/:id" component={EditPost}/>
        <Route path="/post/:id" component={PostDetails}/>


        
      </div>
      </BrowserRouter>
    )
  }
}
