import React, {Component} from 'react';
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom';
import Home from "./pages/Home"
import Header from "./components/header"

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <BrowserRouter>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/topics">Topics</Link>
                        <Route exact path="/" component={Home}/>
                    </div>
                </BrowserRouter>
                <footer>
                    footer
                </footer>
            </div>
        );
    }
}

export default App;
