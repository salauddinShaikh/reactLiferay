// import React from 'react';

class ActionComponent extends React.Component {
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
            },
            ButtonEnable: false,
            Comment: '',
        };
        this.handleCommentChange = this.handleCommentChange.bind(this);
    }

    componentDidMount() {
        this.getLeaveDetailsAPI();
    }

    handleCommentChange(e) {
        var context = this;
        context.setState({ Comment: e.target.value });
        context.validateComment();
    }

    validateComment() {
        var context = this;
        if (context.state.Comment.length > 0) {
            context.setState({ ButtonEnable: true });
        } else {
            context.setState({ ButtonEnable: false });
        }
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
                leaveId: 1
            },
            function (obj) {
                console.log('getLeaveDetailsAPI', obj);
                context.setState({ LeaveRecord: obj });
            }
        );
    }

    render() {

        var context = this;

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
                                        <th> Concerned Manager </th>
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


                    <div className="form-group">
                        <label>Comment</label>
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fa fa-file-text"></i>
                            </span>
                            <textarea type="text" className="form-control" value={context.state.Comment} onChange={context.handleCommentChange} onBlur={context.handleCommentChange}>
                            </textarea>
                        </div>
                    </div>

                    <div className="form-actions">
                        { this.buttonAction() }
                    </div>
                </div>
            </div>
        );
    }

    buttonAction() {
        var context = this;
        if (context.state.ButtonEnable) {
            return (
                <span>
                    <button type="button" className="btn default" onClick={this.props.onReject}>Reject</button>
                    <button type="button" className="btn default pull-right" onClick={this.props.onApprove}>Approve</button>
                </span>
            );
        } else {
            return (
                <span>
                    <button type="button" className="btn default" onClick={this.props.onReject} disabled>Reject</button>
                    <button type="button" className="btn default pull-right" onClick={this.props.onApprove} disabled>Approve</button>
                </span>
            );
        }
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

export default (ActionComponent);