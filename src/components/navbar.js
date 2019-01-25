import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: window.location.href.substr(window.location.href.lastIndexOf("/") + 1)
        }
    }

    componentDidUpdate() {
        const currentPage = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
        if (this.state.active !== currentPage) this.setState({active: currentPage});
    }

    render() {
        return (
            <div className="uk-container navbar">
                <nav className="nav-scroll">
                    <ul className="uk-subnav uk-flex uk-flex-between uk-flex-nowrap">
                        <li className={this.state.active === "Home" ? "uk-active" : ""}>
                            <Link to="/Home">Home</Link></li>
                        <li className={this.state.active === "Regulations" ? "uk-active" : ""}>
                            <Link to="/Regulations">Regulations</Link></li>
                        <li className={this.state.active === "BulletinBoard" ? "uk-active" : ""}>
                            <Link to="/BulletinBoard">Bulletin Board</Link></li>
                        <li className={this.state.active === "Schedule" ? "uk-active" : ""}>
                            <Link to="/Schedule">Schedule</Link></li>
                        <li className={this.state.active === "ECTSCatalogue" ? "uk-active" : ""}>
                            <Link to="/ECTSCatalogue">ECTS Catalogue</Link></li>
                        <li className={this.state.active === "TuitionFee" ? "uk-active" : ""}>
                            <Link to="/TuitionFee">Tuition Fee</Link></li>
                        <li className={this.state.active === "MandatoryTerms" ? "uk-active" : ""}>
                            <Link to="/MandatoryTerms">Mandatory Terms</Link></li>
                        <li className={this.state.active === "MeetingTerms" ? "uk-active" : ""}>
                            <Link to="/MeetingTerms">Meeting Terms</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;