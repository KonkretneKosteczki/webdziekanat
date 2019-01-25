import React, {Component} from 'react';
import Calendar from "react-calendar";

class Terms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    onChange = date => this.setState({date});

    render() {
        return (
            <div className="uk-container uk-container-expand  uk-width-2-3@m">
                <hr/>
                <div className="uk-grid uk-grid-medium" data-uk-grid="masonry: true">
                    <div className="uk-width-1-2@l uk-first-column">
                        <div className="uk-card uk-card-default uk-card-small uk-card-hover">
                            <div className="uk-card-body">
                                <Calendar onChange={this.onChange} value={this.state.date}/>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-2@l uk-first-column">
                        <div className="uk-card uk-card-default uk-card-small uk-card-hover">
                            <div className="uk-card-header">
                                <div className="uk-width-auto">
                                    <h4>{["January", "February", "March", "April", "May", "June",
                                        "July", "August", "September", "October", "November", "December"
                                    ][this.state.date.getMonth()]}</h4></div>
                            </div>
                            <div className="uk-card-body">
                                {this.state.date.getDate()} - At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                                mollitia animi, id est laborum et dolorum fuga.</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Terms;