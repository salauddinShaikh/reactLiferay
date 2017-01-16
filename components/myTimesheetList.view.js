import React from 'react';
class MyTimesheetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: '',
      toDate: ''
    };
    this.handleFromDateChange = this.handleFromDateChange.bind(this);
    this.handleToDateChange = this.handleToDateChange.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
  }

  onSearchClick() {
    console.log('search', this.state);
  }
  handleFromDateChange(event) {
    this.setState({ fromDate: event.target.value });
  }
  handleToDateChange(event) {
    this.setState({ toDate: event.target.value });
  }
  render() {
    var statusClass = ''
    var rec = [
      {
        ID: 1,
        StartDate: '20/12/2016',
        EndDate: '02/01/2017',
        BillableHours: '8 hrs',
        NonBillableHours: '0 hrs',
        Status: 'Approved'
      }, {
        ID: 2,
        StartDate: '02/01/2017',
        EndDate: '08/01/2017',
        BillableHours: '5 hrs',
        NonBillableHours: '3 hrs',
        Status: 'Rejected'
      }, {
        ID: 3,
        StartDate: '09/01/2017',
        EndDate: '15/01/2017',
        BillableHours: '8 hrs',
        NonBillableHours: '0 hrs',
        Status: 'Pending'
      }, {
        ID: 4,
        StartDate: '16/01/2017',
        EndDate: '22/01/2017',
        BillableHours: '8 hrs',
        NonBillableHours: '0 hrs',
        Status: 'Submitted'
      }
    ];
    var context = this;
    return (
      <div className="portlet light">
        <div className="portlet-title">
          <div className="caption">
            <i className="icon-settings font-red"></i>
            <span className="caption-subject font-red sbold uppercase">My Timesheet List</span>
          </div>
          <div className="actions">
            <button type="button" className="btn green" onClick={ this.props.onAddClick }><i className="fa fa-plus"></i> Add</button>
          </div>
        </div>
        <div className="portlet-body">
          <div className="row">
            <div className="form-group col-md-5">
              <label className="control-label col-md-5"><b>From</b></label>
              <div className="col-md-7">
                <input type ="date" className="form-control form-control-inline" value={this.state.fromDate} onChange={this.handleFromDateChange} />
              </div>
            </div>
            <div className="form-group col-md-5">
              <label className="control-label col-md-5"><b>To</b></label>
              <div className="col-md-7">
                <input type ="date" className="form-control form-control-inline"  value={this.state.toDate} onChange={this.handleToDateChange} />
              </div>
            </div>
            <div className="form-group col-md-2">
              <div className="col-md-12">
                <button type="button" className=" form-control btn default" onClick={this.onSearchClick}>Search</button>
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
                  <th> Billable hours </th>
                  <th> Non Billable hours </th>
                  <th> Status </th>
                </tr>
              </thead>
              <tbody>
                {
                  rec.map((row, index) => {

                    switch (row.Status) {
                      case 'Approved':
                        statusClass = 'label label-sm label-success';
                        break;
                      case 'Pending':
                        statusClass = 'label label-sm label-info  ';
                        break;
                      case 'Submitted':
                        statusClass = 'label label-sm label-warning';
                        break;
                      case 'Rejected':
                        statusClass = 'label label-sm label-danger';
                        break;
                      default:
                        statusClass = '';
                    }
                    return (
                      <tr key={index}>
                        <td> {index + 1} </td>
                        <td> <a onClick={ this.props.onRowClick.bind(null, row.ID) }> {row.StartDate}</a> </td>
                        <td> {row.EndDate} </td>
                        <td> {row.BillableHours} </td>
                        <td> {row.NonBillableHours} </td>
                        <td>
                          <span className={statusClass}>{row.Status}</span> </td>
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
}

export default MyTimesheetList