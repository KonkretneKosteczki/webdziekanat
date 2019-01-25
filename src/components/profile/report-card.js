import React, {Component} from 'react';

class ReportCard extends Component {
    constructor(props) {
        super(props);

        this.state = { value: 'Third'};
    }
    onChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return (
            <div>
                <div className="uk-margin">
                    <label className="uk-form-label" htmlFor="form-stacked-select">Semester</label>
                    <div className="uk-form-controls">
                        <select value={this.state.value} onChange={this.onChange.bind(this)} className="uk-select" id="form-stacked-select">
                            <option value="First">First</option>
                            <option value="Second">Second</option>
                            <option value="Third">Third</option>
                        </select>
                    </div>
                </div>
                {this.state.value === "First" ?
                    <table className="uk-table uk-table-striped">
                    <thead>
                    <tr>
                        <th>Code</th>
                        <th>Subject</th>
                        <th>Professor</th>
                        <th>ECTS</th>
                        <th>Grades</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>000001</td>
                        <td>Subject Name</td>
                        <td>Professor Name</td>
                        <td>4</td>
                        <td>5 5 5</td>
                    </tr>
                    <tr>
                        <td>000002</td>
                        <td>Subject Name</td>
                        <td>Professor Name</td>
                        <td>4</td>
                        <td>5 5 5</td>
                    </tr>
                    <tr>
                        <td>000003</td>
                        <td>Subject Name</td>
                        <td>Professor Name</td>
                        <td>4</td>
                        <td>5 5 5</td>
                    </tr>
                    <tr>
                        <td>000004</td>
                        <td>Subject Name</td>
                        <td>Professor Name</td>
                        <td>4</td>
                        <td>5 5 5</td>
                    </tr>
                    </tbody>
                </table> : this.state.value === "Second" ?
                    <table className="uk-table uk-table-striped">
                            <thead>
                            <tr>
                                <th>Code</th>
                                <th>Subject</th>
                                <th>Professor</th>
                                <th>ECTS</th>
                                <th>Grades</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>000011</td>
                                <td>Subject Name</td>
                                <td>Professor Name</td>
                                <td>4</td>
                                <td>5 5 5</td>
                            </tr>
                            <tr>
                                <td>000012</td>
                                <td>Subject Name</td>
                                <td>Professor Name</td>
                                <td>4</td>
                                <td>5 5 5</td>
                            </tr>
                            <tr>
                                <td>000013</td>
                                <td>Subject Name</td>
                                <td>Professor Name</td>
                                <td>4</td>
                                <td>5 5 5</td>
                            </tr>
                            <tr>
                                <td>000014</td>
                                <td>Subject Name</td>
                                <td>Professor Name</td>
                                <td>4</td>
                                <td>5 5 5</td>
                            </tr>
                            </tbody>
                        </table> :
                    <table className="uk-table uk-table-striped">
                            <thead>
                            <tr>
                                <th>Code</th>
                                <th>Subject</th>
                                <th>Professor</th>
                                <th>ECTS</th>
                                <th>Grades</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>000021</td>
                                <td>Subject Name</td>
                                <td>Professor Name</td>
                                <td>4</td>
                                <td>5 5 5</td>
                            </tr>
                            <tr>
                                <td>000022</td>
                                <td>Subject Name</td>
                                <td>Professor Name</td>
                                <td>4</td>
                                <td>5 5 5</td>
                            </tr>
                            <tr>
                                <td>000023</td>
                                <td>Subject Name</td>
                                <td>Professor Name</td>
                                <td>4</td>
                                <td>5 5 5</td>
                            </tr>
                            <tr>
                                <td>000024</td>
                                <td>Subject Name</td>
                                <td>Professor Name</td>
                                <td>4</td>
                                <td>5 5 5</td>
                            </tr>
                            </tbody>
                        </table>
                }
            </div>
        );
    }
}
export default ReportCard;
