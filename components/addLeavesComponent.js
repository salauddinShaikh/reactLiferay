import React from 'react';

/**
 * Third Party Libraries
 */
import DatePicker from 'react-datepicker';
import moment from 'moment';

/**
 * Older Components
 * 
 * <input type="date" className="form-control" value={this.state.formData.StartDate} onChange={this.handleStartDtChange}></input>
 * <input type="date" className="form-control" value={this.state.formData.EndDate} onChange={this.handleEndDtChange}></input>
 */

class AddLeavesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                StartDate: '',
                EndDate: '',
                Reason: '',
                TypeOfLeave: '',
                NoOfDays: 0
            },
            startDate: null,
            endDate: null
        };
        this.handleStartDtChange = this.handleStartDtChange.bind(this);
        this.handleEndDtChange = this.handleEndDtChange.bind(this);
        this.handleReasonChange = this.handleReasonChange.bind(this);
        this.handleLeaveTypeChange = this.handleLeaveTypeChange.bind(this);
        this.handleNumDaysChange = this.handleNumDaysChange.bind(this);
    }

    // getInitialState() {
    //     return {
    //         startDate: moment(),
    //         endDate: moment()
    //     };
    // }

    handleStartDtChange(context, day) {
        var form = this.state.formData;
        form.StartDate = day.format('DD-MM-YYYY');
        this.setState({ formData: form });
        this.setState({ startDate : day });
        console.log('StartDate : ', this.state.formData.StartDate);
    }

    handleEndDtChange(context, day) {
        var form = this.state.formData;
        form.EndDate = day.format('DD-MM-YYYY');
        this.setState({ formData: form });
        this.setState({ endDate : day });
        console.log('EndDate : ', this.state.formData.EndDate);
    }

    handleReasonChange(e) {
        var form = this.state.formData;
        form.Reason = e.target.value;
        this.setState({ formData: form });
    }

    handleLeaveTypeChange(e) {
        var form = this.state.formData;
        form.TypeOfLeave = e.target.value;
        this.setState({ formData: form });
    }

    handleNumDaysChange(e) {
        var form = this.state.formData;
        form.NoOfDays = e.target.value;
        this.setState({ formData: form });
    }

    render() {
        var options = [
            {
                Text: 'Select',
                Value: null
            },
            {
                Text: 'Leave',
                Value: 0
            },
            {
                Text: 'Half Day Leave',
                Value: 1
            },
            {
                Text: 'LWP',
                Value: 2
            },
            {
                Text: 'Half Day LWP',
                Value: 3
            }
        ];
        var context = this;
        return (
            <div className="portlet light bordered">
                <div className="portlet-title">
                    <div className="caption font-red-sunglo">
                        <i className="icon-settings font-red-sunglo"></i>
                        <span className="caption-subject bold uppercase">Apply Leave</span>
                    </div>
                    <div className="actions">
                        { this.actionsView(this.props.editView) }
                    </div>
                </div>
                <div className="note note-info note-bordered">
                    <p>Leaves on <strong>{ moment().format('MMMM-YYYY') }</strong></p>
                    <ul>
                        <li>John </li>
                        <li>Sherlock </li>
                    </ul>
                </div>
                <div className="portlet-body">
                    <form role="form">
                        <div className="form-body">
                            <div className="form-group">
                                <label>Start Date</label>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-calendar"></i>
                                    </span>
                                    <DatePicker  selected={this.state.startDate} onChange={context.handleStartDtChange.bind(null, context) } className="form-control" showMonthDropdown />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>End Date</label>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-calendar"></i>
                                    </span>
                                    <DatePicker  selected={this.state.endDate} onChange={context.handleEndDtChange.bind(null, context) } className="form-control" showMonthDropdown />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Reason</label>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-file-text"></i>
                                    </span>
                                    <textarea type="text" className="form-control" value={this.state.formData.Reason} onChange={this.handleReasonChange}></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Type of Leave</label>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-list-ul"></i>
                                    </span>
                                    <select className="form-control" value={this.state.formData.TypeOfLeave} onChange={this.handleLeaveTypeChange}>
                                        {
                                            options.map((row, index) => {
                                                return (
                                                    <option key={index} value={row.value}>{row.Text} </option>
                                                );
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>No.of Days</label>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-calendar-o"></i>
                                    </span>
                                    <input type="number" className="form-control" value={this.state.formData.NoOfDays} onChange={this.handleNumDaysChange}></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-actions">
                            <button type="button" className="btn default" onClick={ this.props.onBackClick }><i className="fa fa-angle-double-left"></i> Back</button>
                            { this.submitButtonView(this.props.editview) }
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    submitButtonView(editview) {
        if (editview) {
            return (
                <button type="button" onClick={ this.props.onSubmitClick } className="btn green pull-right" disabled >Submit</button>
            );
        }
        else {
            return (
                <button type="button" onClick={ this.props.onSubmitClick } className="btn green pull-right" >Submit</button>
            );
        }
    }

    actionsView(editview) {
        if (editview) {
            return (
                <div className="btn-group">
                    <a className="btn btn-sm green dropdown-toggle" data-toggle="dropdown"><i className="fa fa-trash-o"></i> Delete Request
                    </a>
                </div>
            );
        }
        else {
            return (
                <div className="btn-group">
                    <a className="btn btn-sm green dropdown-toggle" data-toggle="dropdown"> Actions
                        <i className="fa fa-angle-down"></i>
                    </a>
                </div>
            );
        }
    }
}

export default (AddLeavesComponent);