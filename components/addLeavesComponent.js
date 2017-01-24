// import React from 'react';

/**
 * Third Party Libraries
 */
// import DatePicker from 'react-datepicker';
import moment from 'moment';

/**
 * Older Components
 * 
 * <DatePicker  selected={this.state.startDate} onChange={context.handleStartDtChange.bind(null, context) } className="form-control" showMonthDropdown />
 * <DatePicker  selected={this.state.endDate} onChange={context.handleEndDtChange.bind(null, context) } className="form-control" showMonthDropdown />
 *  <div className="btn-group">
        <a onClick={ context.props.onDeleteClick.bind(null,context.props.ID) } className="btn btn-sm green dropdown-toggle" data-toggle="dropdown"><i className="fa fa-trash-o"></i> Delete Request
        </a>
    </div>
 */

class AddLeavesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                StartDate: '',
                EndDate: '',
                Reason: '',
                TypeOfLeave:'',
                NoOfDays: 0
            },
            MstrLeaveType: []
        };
        this.handleStartDtChange = this.handleStartDtChange.bind(this);
        this.handleEndDtChange = this.handleEndDtChange.bind(this);
        this.handleReasonChange = this.handleReasonChange.bind(this);
        this.handleLeaveTypeChange = this.handleLeaveTypeChange.bind(this);
        this.handleNumDaysChange = this.handleNumDaysChange.bind(this);
    }

    componentDidMount() {
        this.getLeaveDetailsAPI();
        this.getLeaveTypeAPI();
    }

    /**
     * getLeaveType API Call
     */
    getLeaveTypeAPI() {
        var context = this;
        Liferay.Service(
            '/eternus.leavetype/GetLeaveTypes',
            function (obj) {
                console.log('getLeaveTypeAPI',obj);
                context.setState({ MstrLeaveType : obj});
            }
        );
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
                context.setState({ formData: obj });
            }
        );
    }

    /**
     * updateLeave API Call
     */
    updateLeaveAPI() {
        // Liferay.Service(
        //     'URL/Of/API/CallFor/UpdateLeave',
        //     {
        //         albumId: albumForm.artistId,
        //         artistId: albumForm.artistId,
        //         albumName: albumForm.albumName,
        //         releaseYear: albumForm.releaseYear
        //     },
        //     function (obj) {
        //         console.log('update : ', obj);
        //     }
        // );
    }

    /**
     * addLeave API Call
     */
    addLeaveAPI() {
        // Liferay.Service(
        //     'URL/Of/API/CallFor/AddLeave',
        //     {
        //         albumId: albumForm.artistId,
        //         artistId: albumForm.artistId,
        //         albumName: albumForm.albumName,
        //         releaseYear: albumForm.releaseYear
        //     },
        //     function (obj) {
        //         console.log('update : ', obj);
        //     }
        // );
    }

    handleEndDtChange(e) {
        var formData = this.state.formData;
        formData.EndDate = e.target.value;
        this.setState({ formData: formData });
        console.log('handleEndDtChange',this.state.formData.EndDate);
    }

    handleStartDtChange(e) {
        var formData = this.state.formData;
        formData.StartDate = e.target.value;
        this.setState({ formData: formData });
        console.log('handleStartDtChange',this.state.formData.StartDate);
    }

    handleReasonChange(e) {
        var form = this.state.formData;
        form.Reason = e.target.value;
        this.setState({ formData: form });
        console.log('handleReasonChange',this.state.formData.Reason);
    }

    handleLeaveTypeChange(e) {
        var form = this.state.formData;
        form.TypeOfLeave = e.target.value;
        this.setState({ formData: form });
        console.log('handleLeaveTypeChange',this.state.formData.TypeOfLeave.Text);
    }

    handleNumDaysChange(e) {
        var form = this.state.formData;
        form.NoOfDays = e.target.value;
        this.setState({ formData: form });
        console.log('handleNumDaysChange',this.state.formData.NoOfDays);
    }

    onEndBlur() {
        
    }

    render() {
        var context = this;
        console.log('leave types : ', context.state);
        return (
            <div className="portlet light bordered">
                <div className="portlet-title">
                    <div className="caption font-red-sunglo">
                        <i className="icon-settings font-red-sunglo"></i>
                        <span className="caption-subject bold uppercase">Apply Leave</span>
                    </div>
                    <div className="actions">
                        { context.actionsView(context.props.editView) }
                    </div>
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
                                    <input type="date" className="form-control" value={context.state.formData.StartDate} onChange={context.handleStartDtChange}></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>End Date</label>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-calendar"></i>
                                    </span>
                                    <input type="date" className="form-control" value={context.state.formData.EndDate} onChange={context.handleEndDtChange}onBlur={context.onEndBlur}></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Reason</label>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-file-text"></i>
                                    </span>
                                    <textarea type="text" className="form-control" value={context.state.formData.Reason} onChange={context.handleReasonChange}></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Type of Leave</label>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-list-ul"></i>
                                    </span>
                                    <select className="form-control" value={context.state.formData.TypeOfLeave} onChange={context.handleLeaveTypeChange}>
                                    <option>Select</option>
                                        {
                                            context.state.MstrLeaveType.map((row, index) => {
                                                return (
                                                    <option key={index} > {row} </option>
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
                                    <input type="number" className="form-control" value={context.state.formData.NoOfDays} onChange={context.handleNumDaysChange}></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-actions">
                            <button type="button" className="btn default" onClick={ this.props.onBackClick }><i className="fa fa-angle-double-left"></i> Back</button>
                            { context.submitButtonView(context.props.editview) }
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    submitButtonView(editview) {
        var context = this;
        if (editview) {
            return (
                <button type="button" onClick={ context.props.onSubmitClick.bind(null, { action :'updateLeave' ,data: context.formData }) } className="btn green pull-right" disabled >Submit</button>
            );
        }
        else {
            return (
                <button type="button" onClick={ context.props.onSubmitClick.bind(null, { action :'applyLeave' ,data: context.formData }) } className="btn green pull-right" >Submit</button>
            );
        }
    }

    actionsView(editview) {
        var context = this;
        if (editview) {

            return (
                <div></div>
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