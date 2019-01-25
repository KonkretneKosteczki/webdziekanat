import React, {Component} from 'react';

class BulletinBoard extends Component {
    render() {
        return (
            <div className="uk-container uk-container-expand  uk-width-2-3@m">
                <hr/>
                <div className="uk-grid uk-grid-medium" data-uk-grid="masonry: true">
                    <div className="uk-width-1-2@l uk-first-column">
                        <div className="uk-card uk-card-default uk-card-small uk-card-hover">
                            <div className="uk-card-header">
                                <div className="uk-grid uk-grid-small">
                                    <div className="uk-width-auto"><h4>General Informations</h4></div>
                                </div>
                            </div>
                            <div className="uk-card-body">
                                <div>
                                    <a href="http://platontv.pl/play?PlayerType=2&id=624">Wireless Network Configuration</a>
                                </div>
                                <div>
                                    <a href="https://edu.p.lodz.pl/mod/page/view.php?id=7724">Password Issuing Procedure</a>
                                </div>
                                <div>
                                    <a href="http://azs.p.lodz.pl/zaliczenie-z-wf-u/">PE course information</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-2@l uk-first-column">
                        <div className="uk-card uk-card-default uk-card-small uk-card-hover">
                            <div className="uk-card-header">
                                <div className="uk-grid uk-grid-small">
                                    <div className="uk-width-auto"><h4>Department Messages</h4></div>
                                </div>
                            </div>
                            <div className="uk-card-body">
                                <div>
                                    <a href="http://chemiabudowlana.edu.pl/">Construction Chemicals</a>
                                </div>
                                <div>
                                    <a href="https://www.cj.p.lodz.pl/">Foreign Language Centre</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BulletinBoard;