import React, {Component} from 'react';
import {Redirect, Route, BrowserRouter} from 'react-router-dom';

import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Schedule from "./pages/Schedule"
import Regulations from "./pages/Regulations"
import BulletinBoard from "./pages/BulletinBoard";
import ECTSCatalogue from "./pages/ECTSCatalogue";
import TuitionFees from "./pages/TuitionFees";
import Terms from "./pages/Terms";
import Article from "./pages/Article"

import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";

import './App.css';
import Message from "./components/message";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: "",
            redirect: false
        }
    }

    login(user) {
        this.setState({loggedInUser: user, redirect: true});
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Header user={this.state.loggedInUser}/>
                        {this.state.redirect ? (<Redirect to="/Home"/>)  : ""}
                        {this.state.redirect ? this.setState({redirect: false}):""}
                        <Navbar/>
                        <div className={"uk-background-muted content"}>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/Home" component={Home}/>
                            <Route exact path="/login" component={()=><Login loginFunction={this.login.bind(this)}/>}/>
                            <Route exact path="/Schedule" component={Schedule}/>
                            <Route exact path="/Regulations" component={Regulations}/>
                            <Route exact path="/BulletinBoard" component={BulletinBoard}/>
                            <Route exact path="/ECTSCatalogue" component={ECTSCatalogue}/>
                            <Route exact path="/TuitionFee" component={TuitionFees}/>
                            <Route exact path="/MandatoryTerms" component={Terms}/>
                            <Route exact path="/MeetingTerms" component={Terms}/>
                            <Route exact path="/Profile" component={Profile}/>
                            <Route exact path="/SendPass" component={()=> <Message message="Password has been send."/>}/>
                            <Route exact path="/Article/:articleNumber" component={Article}/>
                        </div>
                    </div>
                </BrowserRouter>
                <Footer/>
            </div>
        );
    }
}

export default App;
