import React, {Component} from 'react';

class General extends Component {
    render() {
        return (
            <div className="uk-container uk-container-expand general">
                <div className="uk-grid uk-grid-medium" data-uk-grid="masonry: true">
                    <div className="uk-width-1-1@l uk-first-column">
                        <div className="uk-card uk-card-default uk-card-small uk-card-hover">
                            <div className="uk-card-header">
                                <div className="uk-grid uk-grid-small">
                                    <div className="uk-width-auto"><h4>General Informations</h4></div>
                                </div>
                            </div>
                            <div className="uk-card-body">
                                <ul>
                                    <li> Wydział: Centrum Kształcenia Międzynarodowego</li>
                                    <li> Course: informatyka</li>
                                    <li> Specialty: Computer Science</li>
                                    <li> Mode of study: full-time</li>
                                    <li> Długość studiów:3.5</li>
                                    <li> Tok główny:yes</li>
                                </ul>
                            </div>
                        </div>
                        <hr/>
                        <div className="uk-card uk-card-default uk-card-small uk-card-hover">
                            <div className="uk-card-header">
                                <div className="uk-grid uk-grid-small">
                                    <div className="uk-width-auto"><h4>Valid Data</h4></div>
                                </div>
                            </div>
                            <div className="uk-card-body">
                                <ul>
                                    <li> Current year:3</li>
                                    <li> Current semester:5</li>
                                    <li> Semestr akademicki:2018/19</li>
                                </ul>
                            </div>
                        </div>
                        <hr/>
                        <div className="uk-card uk-card-default uk-card-small uk-card-hover">
                            <div className="uk-card-header">
                                <div className="uk-grid uk-grid-small">
                                    <div className="uk-width-auto"><h4>Grade Point Average</h4></div>
                                </div>
                            </div>
                            <div className="uk-card-body">
                                <ul>
                                    <li> ZStatus:rejestracja pełna</li>
                                    <li> Za semestr:5.0</li>
                                    <li> Za całe studia:4.21</li>
                                    <li> Uznane:20</li>
                                    <li> Zdobyte/Nominalne:120/150</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default General;