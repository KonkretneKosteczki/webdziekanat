import React, {Component} from 'react';

class Regulations extends Component {
    render() {
        return (
            <div className="uk-container uk-container-expand  uk-width-2-3@m">
                <hr/>
                <div className="uk-grid uk-grid-medium" data-uk-grid="masonry: true">
                    <div className="uk-width-1-2@l uk-first-column">
                        <div className="uk-card uk-card-default uk-card-small uk-card-hover">
                            <div className="uk-card-header">
                                <div className="uk-grid uk-grid-small">
                                    <div className="uk-width-auto"><h4>University Statute</h4></div>
                                </div>
                            </div>
                            <div className="uk-card-body">
                                <div>
                                    <a href="https://politechnikalodzka.ssdip.bip.gov.pl/statut-politechniki-lodzkiej/statut-politechniki-lodzkiej.html">Technical University of Lodz statute</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-2@l uk-grid-margin uk-first-column">
                        <div className="uk-card uk-card-default uk-card-small uk-card-hover">
                            <div className="uk-card-header">
                                <div className="uk-grid uk-grid-small">
                                    <div className="uk-width-auto"><h4>Regulations</h4></div>
                                </div>
                            </div>
                            <div className="uk-card-body">
                                <div>
                                    <a href="https://www.p.lodz.pl/pl/lista/regulamin-studiow">University Regulations for Students</a>
                                </div>
                                <div>
                                    <a href="https://www.p.lodz.pl/pl/regulamin-studiow-doktoranckich-politechnice-lodzkiej">University Regulations for Doctorants</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-2@l uk-first-column">
                        <div className="uk-card uk-card-default uk-card-small uk-card-hover">
                            <div className="uk-card-header">
                                <div className="uk-grid uk-grid-small">
                                    <div className="uk-width-auto"><h4>Ordinance</h4></div>
                                </div>
                            </div>
                            <div className="uk-card-body">
                                <div>
                                    <a href="https://ck.p.lodz.pl/strony/spe-regulamin">Zarządzenia Rektora Nr 15/2010 w sprawie zasad organizacji i korzystania z poczty elektronicznej</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-2@l uk-grid-margin uk-first-column">
                        <div className="uk-card uk-card-default uk-card-small uk-card-hover">
                            <div className="uk-card-header">
                                <div className="uk-grid uk-grid-small">
                                    <div className="uk-width-auto"><h4>Material assistance</h4></div>
                                </div>
                            </div>
                            <div className="uk-card-body">
                                <div>
                                    <a href="https://www.p.lodz.pl/pl/lista/pomoc-materialna-dla-studentow">Financial help for students</a>
                                </div>
                                <div>
                                    <a href="https://www.p.lodz.pl/pl/lista/pomoc-materialna-dla-doktorantow">Financial help for doctorants</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Regulations;