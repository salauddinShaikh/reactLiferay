import React from 'react';

// new date picker
var DatePicker = require('react-datepicker');
var moment = require('moment');

class AddLeavesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(),
            endDate: moment(),
        };
    }

    getInitialState() {
        return {
            startDate: moment()
        };
    }

    handleStartDateChange (context,day){
        debugger;
        context.setState({startDate : day})
    }

    handleEndDateChange (context, day) {
        debugger;
        context.setState({endDate : day});
    }

    render() {
        debugger;
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
                <div className="portlet-body form">
                    <form role="form">
                        <div className="form-body">
                            <div className="form-group">
                                <label>Start Date</label>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-calendar"></i>
                                    </span>
                                    <DatePicker selected={this.state.startDate} onChange={context.handleStartDateChange.bind(null,context)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>End Date</label>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-calendar-o"></i>
                                    </span>
                                    <DatePicker selected={this.state.endDate} onChange={context.handleEndDateChange.bind(null,context)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Reason</label>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-file-text"></i>
                                    </span>
                                    <textarea type="text" className="form-control" placeholder="Reason for abscence"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Type of Leave</label>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-icon-calendar"></i>
                                    </span>
                                    <input type="text" className="form-control" ></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>No.of Days</label>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-list-ul"></i>
                                    </span>
                                    <input type="number" className="form-control"></input>
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