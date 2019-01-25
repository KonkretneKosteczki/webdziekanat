import React, {Component} from 'react';

class MedicalExamination extends Component {
    render() {
        return (
            <table className="uk-table uk-table-striped">
                <thead>
                <tr>
                    <th>Number</th>
                    <th>Expiration date</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>CKM/Lek/77/2016/17/SID</td>
                    <td>2019-11-22</td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default MedicalExamination;