import React from 'react';

class LeaveDetailsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        var managerStatus = [
            {
                manager: 'Manager1',
                status: 'Approved'
            }, {
                manager: 'Manager2',
                status: 'Approved'
            }, {
                manager: 'Manager3',
                status: 'Approved'
            }
        ];

        var rec = [
            {
                ID: 1,
                StartDate: '29/12/2016',
                EndDate: '01/01/2017',
                Reason: 'Not well',
                status: 'Approved',
                NoOfDays : 4
            }, {
                ID: 2,
                StartDate: '29/10/2016',
                EndDate: '01/11/2016',
                Reason: 'Not well',
                status: 'Approved',
                NoOfDays : 4
            }, {
                ID: 3,
                StartDate: '12/09/2016',
                EndDate: '12/09/2017',
                Reason: 'Going home',
                status: 'Partially Approved',
                NoOfDays : 1
            }, {
                ID: 4,
                StartDate: '12/01/2017',
                EndDate: '13/01/2017',
                Reason: 'Going home',
                status: 'Pending',
                NoOfDays : 2
            }
        ];

        return(
            <div className="portlet light bordered">
                <div className="portlet-title">
                    <div className="caption font-red-sunglo">
                        <span className="caption-subject bold uppercase">Leave Details</span>
                    </div>
                </div>
                <div className="portlet-body">
                    <div className="table-scrollable">
                        <div className="table table-hover">
                            <table className="table table-hover table-light">
                                <tbody>
                                    <tr>
                                        <td> Reason </td>
                                        <td> {rec[this.props.ID].Reason} </td>
                                    </tr>
                                    <tr>
                                        <td> Start Date </td>
                                        <td> {rec[this.props.ID].StartDate} </td>
                                    </tr>
                                    <tr>
                                        <td> End Date </td>
                                        <td> {rec[this.props.ID].EndDate} </td>
                                    </tr>
                                    <tr>
                                        <td> Status </td>
                                        <td> { this.statusLabel(rec[this.props.ID].status) } </td>
                                    </tr>
                                    <tr>
                                        <td> No. of Days </td>
                                        <td> {rec[this.props.ID].NoOfDays} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="table-scrollable">
                        <div className="table table-hover">
                            <table className="table table-hover table-light">
                                <thead>
                                    <tr>
                                        <th> Manager </th>
                                        <th> Approval Status </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        managerStatus.map((row, index) => {
                                            return(
                                                <tr key={index+1}>
                                                    <td> {row.manager} </td>
                                                    <td> {row.status} </td>
                                                </tr>
                                        );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className="form-actions">
                        <button className="btn" onClick={ this.props.onBackClick }> Back </button>
                        <button className="btn pull-right" onClick={this.props.onEditClick.bind(null,this.props.ID)} > <i className="fa fa-pencil-square-o"></i> Edit </button>
                    </div>
                </div>
            </div>
        );
    }

    statusLabel(status) {
        switch (status) {
            case 'Approved':
                return (
                    <div className="label label-success "> Approved </div>
                );

            case 'Partially Approved':
                return (
                    <div className="label label-info "> Partially Approved </div>
                );

            default:
                return (
                    <div className="label label-warning "> Pending </div>
                );
        }
    }
}

export default (LeaveDetailsComponent);