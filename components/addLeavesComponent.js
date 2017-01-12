import React from 'react';

var moment = require('moment');
class AddLeavesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(),
            endDate: moment(),
        };
    }

    render() {
        var options= [
            {
                text : 'Select',
                value : null
            },
            {
                text : 'Leave',
                value : 0
            },
            {
                text : 'Half Day Leave',
                value : 1
            },
            {
                text : 'LWP',
                value : 2
            },
            {
                text : 'Half Day LWP',
                value : 3
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
                    <p>Leaves on <strong>{moment().format('dddd, MMMM Do YYYY')}</strong></p>
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
                                    <input type="date" className="form-control"></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>End Date</label>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-calendar"></i>
                                    </span>
                                    <textarea type="text" className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Reason</label>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-file-text"></i>
                                    </span>
                                    <textarea type="text" className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Type of Leave</label>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-list-ul"></i>
                                    </span>
                                    <select className="form-control" >
                                        {
                                            options.map((row, index) => {
                                                return(
                                                    <option key={index} value={row.value}>{row.text} </option>
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