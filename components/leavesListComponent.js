// import React from 'react';

/**
 * Third Party Libraries
 */
// import DatePicker from 'react-datepicker';
// import moment from 'moment';

/**
 * Older Components
 * <DatePicker  selected={this.state.filterData.startDate} onChange={context.handleStartDtChange } className="form-control" showMonthDropdown />
 * <DatePicker  selected={this.state.filterData.endDate} onChange={context.handleEndDtChange } className="form-control" showMonthDropdown />
 */

class LeavesListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterData: {
                StartDate: '',
                EndDate: ''
            },
            Leaves: [],
            LeaveCount: {
            },
        };
        this.onFilterClick = this.onFilterClick.bind(this)
        this.handleEndDtChange = this.handleEndDtChange.bind(this);
        this.handleStartDtChange = this.handleStartDtChange.bind(this);
    }

    componentDidMount() {
        this.getLeavesAPI();
        this.getLeaveCountAPI();
    }

    /**
     * GetFilteredLeaves API Call
     */
    getFilteredLeavesAPI() {
        var context = this;
        Liferay.Service(
            '/eternus-portlet.leave/GetLeaves',
            {
                employeeId: Liferay.ThemeDisplay.getUserId(),
                StartDate: context.state.filterData.StartDate,
                EndDate: context.state.filterData.EndDate
            },
            function (obj) {
                console.log(obj);
                context.setState({ Leaves: obj });
            }
        );
    }

    /**
     * GetLeaveCount API Call
     */
    getLeaveCountAPI() {
        var context = this;
        Liferay.Service(
            '/eternus-portlet.leave/GetLeaveCount',
            {
                employeeId: Liferay.ThemeDisplay.getUserId()
            },
            function (obj) {
                console.log('getLeaveCountAPI : ', obj);
                context.setState({ LeaveCount: obj });
            }
        );
    }

    /**
     * GetLeaves API Call
     */
    getLeavesAPI() {
        var context = this;
        Liferay.Service(
            '/eternus-portlet.leave/GetLeaves',
            {
                employeeId: Liferay.ThemeDisplay.getUserId()
            },
            function (obj) {
                console.log('getLeavesAPI', obj);
                context.setState({ Leaves: obj });
            }
        );
    }

    onFilterClick() {
        var context = this;
        this.getFilteredLeavesAPI();
    }

    handleEndDtChange(e) {
        var filterData = this.state.filterData;
        filterData.EndDate = e.target.value;
        this.setState({ filterData: filterData });
    }

    handleStartDtChange(e) {
        var filterData = this.state.filterData;
        filterData.StartDate = e.target.value;
        this.setState({ filterData: filterData });
    }

    render() {
        // var rec = this.state.Leaves;
        var context = this;
        return (
            <div className="portlet light bordered">
                <div className="portlet-title">
                    <div className="caption">
                        <i className="icon-settings font-red"></i>
                        <span className="caption-subject font-red sbold uppercase">Leaves</span>
                    </div>
                    <div className="actions">
                        <div className="btn-group pull-right">
                            <button onClick={ this.props.onAddClick } type="button" className="btn green btn-sm btn-outline" aria-expanded="false">
                                <i className="fa fa-plus"></i>Apply Leave
                            </button>
                        </div>
                    </div>
                </div>
                <div className="portlet-body">
                    <div className="table-scrollable">
                        <table className="table table-hover table-light">
                            <tbody>
                                <tr>
                                    <td><strong>Leaves Taken</strong></td>
                                    <td><strong>{context.state.LeaveCount.LeavesTaken}</strong></td>
                                    <td><strong>Leaves BaLance</strong></td>
                                    <td><strong>{context.state.LeaveCount.LeavesBalance}</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="form-horizontal">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-xs-5">
                                <label className="col-md-2 vAlign">From</label>
                                <div className="col-md-10">
                                    <input type="date" className="form-control" value={this.state.filterData.StartDate} onChange={context.handleStartDtChange}></input>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-xs-5">
                                <label className="col-md-2 vAlign">To</label>
                                <div className="col-md-10">
                                    <input type="date" className="form-control" value={this.state.filterData.EndDate} onChange={context.handleEndDtChange}></input>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-xs-2">
                                <label className="col-md-2"></label>
                                <div className="col-md-10 ">
                                    <button className="btn " onClick={this.onFilterClick}> Filter </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="table-scrollable">
                        <table className="table table-hover table-light">
                            <thead>
                                <tr>
                                    <th> # </th>
                                    <th> Start Date </th>
                                    <th> End Date </th>
                                    <th> Reason </th>
                                    <th> Status </th>
                                    <th> No.of Days </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Leaves.map((row, index) => {
                                        return (
                                            <tr key={row.LeaveId}>
                                                <td> {index + 1} </td>
                                                <td> <a onClick={ this.props.onRecordClick.bind(null, row.LeaveId) } > {row.StartDate}</a> </td>
                                                <td> {row.EndDate} </td>
                                                <td> {row.Reason} </td>
                                                <td>
                                                    { this.statusLabel(row.Status) }
                                                </td>
                                                <td> {row.NoOfDays} </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    statusLabel(status) {
        switch (status) {
            case 'Approved':
                return (
                    <span className="label label-sm label-success"> Approved </span>
                );

            case 'Partially Approved':
                return (
                    <span className="label label-sm label-info"> Partially Approved </span>
                );

            default:
                return (
                    <span className="label label-sm label-warning"> Pending </span>
                );
        }
    }
}

export default (LeavesListComponent)