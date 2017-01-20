//import React from 'react';
class MyTimesheetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endData: '',
      timesheetData: []
    };
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDataChange = this.handleEndDataChange.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
  }

  componentDidMount() {
    this.getTimesheetList();
  }

  getTimesheetList() {
    console.log('get-timesheetList : ');
    var context = this;
    Liferay.Service(
      '/eternus-portlet.timesheet/GetTimeSheets',
      function (obj) {
        console.log('get-timesheetList : ', obj);
        context.setState({ timesheetData: obj });
      }
    );
  }
  onSearchClick(event) {
    var context = this;
    console.log('Search-get-timesheetList : ');
    var searchObj = {
    };
    if (this.state.startDate != '')
      searchObj.StartDate = this.state.startDate;
    if (this.state.endData != '')
      searchObj.EndDate = this.state.endData;
    Liferay.Service(
      '/eternus-portlet.timesheet/GetTimeSheets',
      function (obj) {
        console.log('Search-get-timesheetList : ', obj);
        context.setState({ timesheetData: obj });
      }
    );
  }
  handleStartDateChange(event) {
    this.setState({ startDate: event.target.value });
  }
  handleEndDataChange(event) {
    this.setState({ endData: event.target.value });
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
            <div className="form-group col-md-4">
              <label className="control-label col-md-4"><b>From</b></label>
              <div className="col-md-8">
                <input type ="date" className="form-control form-control-inline" value={this.state.startDate} onChange={this.handleStartDateChange} />
              </div>
            </div>
            <div className="form-group col-md-4">
              <label className="control-label col-md-4"><b>End</b></label>
              <div className="col-md-8">
                <input type ="date" className="form-control form-control-inline"  value={this.state.endData} onChange={this.handleEndDataChange} />
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
                  context.state.timesheetData.map((row, index) => {

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