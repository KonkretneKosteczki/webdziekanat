import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {redirect: false}
    }

    render() {
        return (
            <header className={"header"} id="header"
                    data-uk-sticky="show-on-up: true; animation: uk-animation-fade; media: @l">
                <div className="uk-container">
                    <nav id="navbar" data-uk-navbar="mode: click;">
                        <div className="uk-navbar-left nav-overlay">
                            <ul className="uk-navbar-nav">
                                <li>
                                    {this.state.redirect ? (<Redirect to="/Profile"/>) : ""}
                                    {this.state.redirect ? this.setState({redirect: false}) : ""}
                                    {this.props.user === "" ?
                                        <a href="/login" title="Sign In">Sign In</a> :
                                        // eslint-disable-next-line
                                        <a onClick={() => this.setState({redirect: true})}>User: {this.props.user}</a>
                                    }
                                </li>
                                {this.props.user === "" ? "" :
                                <li>
                                    <a href="/login" title="Sign Out">Sign Out</a>
                                </li>}
                                {/*<li>*/}
                                {/*<a href="/">EN</a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*<a href="/">PL</a>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                        <div className="uk-navbar-center nav-overlay">
                            <p className="uk-navbar-item uk-logo" title="Logo">
                                <img src="/logo.png" alt="Logo"/></p>
                        </div>
                        <div className="uk-navbar-right nav-overlay">
                            <div className="uk-navbar-item">
                                <a className="icon uk-visible@s"
                                   href="http://virtul.p.lodz.pl/" data-uk-icon="users">virtul</a>
                                <a className="icon uk-visible@s"
                                   href="http://poczta.p.lodz.pl/" data-uk-icon="mail">zimbra</a>
                                <a className="icon uk-visible@s"
                                   href="http://edu.p.lodz.pl/" data-uk-icon="world">wikamp</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;