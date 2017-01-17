import React from 'react';

class LeavesListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: [],
            filterData: {
                StartDate: '',
                EndDate: '',
            },
            checkAll: false,
        };
        this.onFilterClick = this.onFilterClick.bind(this)
        this.handleEndDtChange = this.handleEndDtChange.bind(this);
        this.handleStartDtChange = this.handleStartDtChange.bind(this);
        this.handleCheckChange = this.handleCheckChange.bind(this);
        this.handleAllCheckChange = this.handleAllCheckChange.bind(this);
        // this.isChecked = this.isChecked.bind(this);
    }

    // isChecked (e) {
    // for (var i = 0; i < this.state.selection.length; i++) {
    //     if (this.state.selection[i].value == e.target.value) {
    //         console.log(JSON.stringify(this.state.selection[i]));
    //         return this.state.selection[i].checked;
    //     }
    // }
    //     console.log(JSON.stringify(e.target.value));
    //     return false;
    // }

    handleCheckChange(e) {
        console.log('entering => ' +JSON.stringify(this.state.selection));
        var isPresent = false;
        for (var i = 0; i < this.state.selection.length; i++) {
            if (this.state.selection[i].value == e.target.value) {
                isPresent = true;
                this.state.selection[i].checked = !this.state.selection[i].checked;
            }
        }
        if (!isPresent) {
            this.state.selection.push({ value: e.target.value, checked: true });
            isPresent = false;
        }
        console.log('exiting => ' +JSON.stringify(this.state.selection));
    }

    isChecked(ID) {
        console.log('checking check of => ' +ID);
        for (var i = 0; i < this.state.selection.length; i++) {
            if(this.state.selection[i].value === ID) {
                return this.state.selection[i].checked; 
            }
        }
    }

    handleAllCheckChange() {
        alert('All Checked');
        if (this.state.checkAll === false) {
            this.state.checkAll = true;
            // TODO : instead of " this.state.selection.length " put the length of the data received with api call
            for (var i = 0; i < 4; i++) {
                //  TODO : instead of " i " put the value of the data received with api call
                this.state.selection[i] = { value: i, checked: true };
            }
        } else if (checkAll === true) {
            this.state.checkAll = false;
            this.state.selection = null;
        }
        this.state.checkAll = !this.state.checkAll;
        console.log('exiting checkAll => ' +JSON.stringify(this.state.selection));
        this.render();
    }

    onFilterClick() {
        var context = this;
        alert('Filter is set!');
    }

    handleEndDtChange(e) {
        var form = this.state.filterData;
        form.EndDate = e.target.value;
        this.setState({ formData: form });
    }

    handleStartDtChange(e) {
        var form = this.state.filterData;
        form.StartDate = e.target.value;
        this.setState({ formData: form });
    }

    render() {
        console.log('rendering!');
        var context = this;
        var rec = [
            {
                ID: 1,
                StartDate: '29/12/2016',
                EndDate: '01/01/2017',
                EmpName: 'Employee1',
                Reason: 'Not well',
                status: 'Approved',
                NoOfLeaves: 4,
            }, {
                ID: 2,
                StartDate: '29/10/2016',
                EndDate: '01/11/2016',
                EmpName: 'Employee2',
                Reason: 'Not well',
                status: 'Approved',
                NoOfLeaves: 4,
            }, {
                ID: 3,
                StartDate: '12/09/2016',
                EndDate: '12/09/2017',
                EmpName: 'Employee3',
                Reason: 'Going home',
                status: 'Partially Approved',
                NoOfLeaves: 1,
            }, {
                ID: 4,
                StartDate: '12/01/2017',
                EndDate: '13/01/2017',
                EmpName: 'Employee4',
                Reason: 'Going home',
                status: 'Pending',
                NoOfLeaves: 2,
            }
        ];

        var checkStat = context.state.checkAll;
        return (
            <div className="portlet light bordered">
                <div className="portlet-title">
                    <div className="caption">
                        <i className="icon-settings font-red"></i>
                        <span className="caption-subject font-red sbold uppercase">Leave Requests </span>
                    </div>
                    <div className="actions">
                        <div className="btn-group pull-right">
                            <button onClick={ this.props.onAddClick } type="button" className="btn green btn-sm btn-outline" aria-expanded="false">
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="portlet-body">
                    <div className="form-horizontal">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-xs-5">
                                <label className="col-md-2 vAlign">From</label>
                                <div className="col-md-10">
                                    <input type="date" className="form-control" value={this.state.filterData.StartDate} onChange={this.handleStartDtChange}></input>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-xs-5">
                                <label className="col-md-2 vAlign">To</label>
                                <div className="col-md-10">
                                    <input type="date" className="form-control" value={this.state.filterData.EndDate} onChange={this.handleEndDtChange}></input>
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
                                    <th>

                                        <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                            <input type="checkbox" className="checkboxes" onChange={this.handleAllCheckChange} ></input>
                                            <span></span>
                                        </label>

                                    </th>
                                    <th> Start Date </th>
                                    <th> End Date </th>
                                    <th> Employee </th>
                                    <th> Reason </th>
                                    <th> Number of Days </th>
                                    <th> Status </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    rec.map((row, index) => {
                                        return (
                                            <tr key={row.ID}>
                                                <td>

                                                    <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" className="checkboxes" value={row.ID} checked={this.isChecked(row.ID)} onChange={this.handleCheckChange}></input>
                                                        <span></span>
                                                    </label>

                                                </td>
                                                <td> <a onClick={ this.props.onRecordClick.bind(null, row.ID) } > {row.StartDate}</a> </td>
                                                <td> {row.EndDate} </td>
                                                <td> {row.EmpName} </td>
                                                <td> {row.Reason} </td>
                                                <td> { row.NoOfLeaves } </td>
                                                <td> { this.statusLabel(row.status) } </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
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

export default (LeavesListComponent)