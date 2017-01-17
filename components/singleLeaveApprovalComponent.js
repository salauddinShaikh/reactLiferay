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
                project: 'Project1',
                manager: 'Manager1',
                status: 'Approved',
            }, {
                project: 'Project2',
                manager: 'Manager2',
                status: 'Approved'
            }, {
                project: 'Project3',
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
            }, 
            {
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
                                        <td> <strong>Reason</strong> </td>
                                        <td> {rec[this.props.ID-1].Reason} </td>
                                    </tr>
                                    <tr>
                                        <td> <strong>Start Date</strong> </td>
                                        <td> {rec[this.props.ID-1].StartDate} </td>
                                    </tr>
                                    <tr>
                                        <td> <strong>End Date</strong> </td>
                                        <td> {rec[this.props.ID-1].EndDate} </td>
                                    </tr>
                                    <tr>
                                        <td> <strong>Status</strong> </td>
                                        <td> { this.statusLabel(rec[this.props.ID-1].status) } </td>
                                    </tr>
                                    <tr>
                                        <td> <strong>No. of Days</strong> </td>
                                        <td> {rec[this.props.ID-1].NoOfDays} </td>
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
                                        <th> Active Project </th>
                                        <th> Concerned Manager </th>
                                        <th> Approval Status </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        managerStatus.map((row, index) => {
                                            return(
                                                <tr key={index+1}>
                                                    <td> {row.project} </td>
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


                    <div className="form-group">
                        <label>Reason</label>
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fa fa-file-text"></i>
                            </span>
                            <textarea type="text" className="form-control" >
                            </textarea>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn default" onClick={this.props.onReject}>Reject</button>
                        <button type="submit" className="btn default pull-right" onClick={this.props.onApprove}>Approve</button>
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