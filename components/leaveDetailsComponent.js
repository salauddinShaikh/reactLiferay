// import React from 'react';

class LeaveDetailsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            LeaveRecord: {
                Approvers: [],
                Leave: {
                    StartDate: '',
                    EndDate: '',
                    Status: {},
                    LeaveId: 0,
                    NoOfDays: 0,
                    TypeOfLeave: {},
                    Reason: ''
                }
            }
        };
    }

    componentDidMount() {
        this.getLeaveDetailsAPI();
    }

    /**
     * getLeaveDetails API Call
     */
    getLeaveDetailsAPI() {
        var context = this;
        Liferay.Service(
            '/eternus.leave/GetLeaveByEmployeeIdLeaveId',
            {
                employeeId: Liferay.ThemeDisplay.getUserId(),
                leaveId: context.props.ID
            },
            function (obj) {
                console.log('getLeaveDetailsAPI', obj);
                context.setState({ LeaveRecord: obj });
            }
        );
    }

    render() {
        var context = this;
        return (
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
                                        <td> {context.state.LeaveRecord.Leave.Reason} </td>
                                    </tr>
                                    <tr>
                                        <td> Start Date </td>
                                        <td> {context.state.LeaveRecord.Leave.StartDate} </td>
                                    </tr>
                                    <tr>
                                        <td> End Date </td>
                                        <td> {context.state.LeaveRecord.Leave.EndDate} </td>
                                    </tr>
                                    <tr>
                                        <td> Status </td>
                                        <td> { this.statusLabel(context.state.LeaveRecord.Leave.Status.Text) } </td>
                                    </tr>
                                    <tr>
                                        <td> No.of Days </td>
                                        <td> {context.state.LeaveRecord.Leave.NoOfDays} </td>
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
                                        context.state.LeaveRecord.Approvers.map((row, index) => {
                                            return (
                                                <tr key={index + 1}>
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
                        <button className="btn pull-right" onClick={this.props.onEditClick.bind(null, this.props.ID) } > <i className="fa fa-pencil-square-o"></i> Edit </button>
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