import React from 'react';

/**
 * Third Party Libraries
 */
import DatePicker from 'react-datepicker';
import moment from 'moment';

/**
 * Older Components
 * 
 */

class LeavesListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterData : {
                StartDate : '',
                EndDate : ''
            },
            startDate : null,
            endDate : null
        };
        this.onFilterClick = this.onFilterClick.bind(this)
        this.handleEndDtChange = this.handleEndDtChange.bind(this);
        this.handleStartDtChange = this.handleStartDtChange.bind(this);
    }

    onFilterClick() {
        var context = this;
        alert('Filter is set between :'+ this.state.filterData.StartDate + ' and ' + this.state.filterData.EndDate);
    }

    handleStartDtChange(context, day) {
        var filterData = this.state.filterData;
        filterData.StartDate = day.format('DD-MM-YYYY');
        this.setState({ filterData: filterData });
        this.setState({ startDate : day });
    }

    handleEndDtChange(context, day) {
        var filterData = this.state.filterData;
        filterData.EndDate = day.format('DD-MM-YYYY');
        this.setState({ filterData: filterData });
        this.setState({ endDate : day });
    }

    render() {
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
                                    <td><strong>5</strong></td>
                                    <td><strong>Leaves Balance</strong></td>
                                    <td><strong>6</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="form-horizontal">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-xs-5">
                                <label className="col-md-2 vAlign">From</label>
                                <div className="col-md-10">
                                    <DatePicker  selected={this.state.startDate} onChange={context.handleStartDtChange.bind(null,context)} className="form-control" showMonthDropdown />
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-xs-5">
                                <label className="col-md-2 vAlign">To</label>
                                <div className="col-md-10">
                                    <DatePicker  selected={this.state.endDate} onChange={context.handleEndDtChange.bind(null,context)} className="form-control" showMonthDropdown />
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
                                    <th> No. of Days </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    rec.map((row, index) => {
                                        return (
                                            <tr key={row.ID}>
                                                <td> {index + 1} </td>
                                                <td> <a onClick={ this.props.onRecordClick.bind(null,row.ID) } > {row.StartDate}</a> </td>
                                                <td> {row.EndDate} </td>
                                                <td> {row.Reason} </td>
                                                <td>
                                                    { this.statusLabel(row.status) }
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