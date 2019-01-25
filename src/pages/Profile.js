import React, {Component} from 'react';
import General from "../components/profile/general";
import ReportCard from "../components/profile/report-card";
import MedicalExamination from "../components/profile/medical-examination";

class Profile extends Component {
    render() {
        return (
            <div className="profile uk-width-2-3@m">
                <h4 className="uk-heading-line uk-text-bold"><span>Computer Science: Data on college</span></h4>
                <ul className="uk-accordion" data-uk-accordion>
                    <li>
                        {/*eslint-disable-next-line*/}
                        <a className="uk-accordion-title uk-background-default" href="#">General</a>
                        <div className="uk-accordion-content">
                            <General/>
                        </div>
                    </li>
                    <li>
                        {/*eslint-disable-next-line*/}
                        <a className="uk-accordion-title uk-background-default" href="#">Report Card</a>
                        <div className="uk-accordion-content">
                            <ReportCard/>
                        </div>
                    </li>
                    <li>
                        {/*eslint-disable-next-line*/}
                        <a className="uk-accordion-title uk-background-default" href="#">Medical Examination</a>
                        <div className="uk-accordion-content">
                            <MedicalExamination/>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Profile;