import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: ""
        }
    }
    render() {
        return (
            <div className="uk-flex uk-flex-center uk-flex-middle uk-background-muted">
                <div className="uk-width-medium uk-padding-small">
                        <fieldset className="uk-fieldset">
                            <legend className="uk-legend">Login</legend>
                            <div className="uk-margin">
                                <div className="uk-inline uk-width-1-1">
                                    <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: user"></span>
                                    <input className="uk-input uk-form-large" required placeholder="Username"
                                           value={this.state.login} type="text" onChange={(e)=> this.setState({login: e.target.value})}/>
                                </div>
                            </div>
                            <div className="uk-margin">
                                <div className="uk-inline uk-width-1-1">
                                    <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
                                    <input className="uk-input uk-form-large" required placeholder="Password"
                                           type="password"/>
                                </div>
                            </div>

                            <div className="uk-margin">
                                <label><input className="uk-checkbox" type="checkbox"/> Keep me logged in</label>
                            </div>
                            <div className="uk-margin">
                                <button onClick={()=>this.props.loginFunction(this.state.login)} className="uk-button uk-button-primary uk-button-primary uk-button-large uk-width-1-1">LOG IN
                                </button>
                            </div>
                        </fieldset>
                    <div>
                        <div className="uk-text-center">
                            <p className="trigger uk-link-reset uk-text-small"
                               data-uk-toggle="target: #recover;animation: uk-animation-slide-top-small">Forgot your
                                password?</p>
                        </div>
                        <div className="uk-margin-small-top" id="recover" hidden>
                            <form action="/sendPass">
                                <div className="uk-margin-small">
                                    <div className="uk-inline uk-width-1-1">
                                        <span className="uk-form-icon uk-form-icon-flip"
                                              data-uk-icon="icon: mail"></span>
                                        <input className="uk-input" placeholder="E-mail" required type="text"/>
                                    </div>
                                </div>
                                <div className="uk-margin-small">
                                    <button type="submit" className="uk-button uk-button-primary uk-width-1-1">SEND
                                        PASSWORD
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;