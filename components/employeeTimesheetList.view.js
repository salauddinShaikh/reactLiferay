//import React from 'react';
class EmployeeTimesheetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
      projectName: '',
      employeeName: '',
      timesheetData: []
    };
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleProjectNameChange = this.handleProjectNameChange.bind(this);
    this.handleEmployeeNameChange = this.handleEmployeeNameChange.bind(this);
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
    if (this.state.endDate != '')
      searchObj.EndDate = this.state.endDate;
    if (this.state.projectName != '')
      searchObj.ProjectName = this.state.projectName;

    Liferay.Service(
      '/eternus-portlet.timesheet/GetTimeSheets',
      searchObj,
      function (obj) {
        console.log('Search-get-timesheetList : ', obj);
        context.setState({ timesheetData: obj });
      }
    );
  }
  handleStartDateChange(event) {
    this.setState({ startDate: event.target.value });
  }
  handleEndDateChange(event) {
    this.setState({ endDate: event.target.value });
  }
  handleProjectNameChange(event) {
    this.setState({ projectName: event.target.value });
  }
  handleEmployeeNameChange(event) {
    this.setState({ employeeName: event.target.value });
  }
  render() {
    var statusClass = ''
    var project = [{
      ID: 1,
      Name: 'Project1'
    }, {
        ID: 2,
        Name: 'Project2'
      }, {
        ID: 3,
        Name: 'Project3'
      }];
    var employee = [{
      ID: 1,
      Name: 'Employee1'
    }, {
        ID: 2,
        Name: 'Employee2'
      }, {
        ID: 3,
        Name: 'Employee3'
      }];
    var rec = [
      {
        ID: 1,
        StartDate: '20/12/2016',
        EndDate: '02/01/2017',
        BillableHours: '8 hrs',
        NonBillableHours: '0 hrs',
        Status: 'Approved',
        EmployeeName: 'Employee1',
        ProjectName: 'Project1'
      }, {
        ID: 2,
        StartDate: '02/01/2017',
        EndDate: '08/01/2017',
        BillableHours: '5 hrs',
        NonBillableHours: '3 hrs',
        Status: 'Rejected',
        EmployeeName: 'Employee1',
        ProjectName: 'Project1'
      }, {
        ID: 3,
        StartDate: '09/01/2017',
        EndDate: '15/01/2017',
        BillableHours: '8 hrs',
        NonBillableHours: '0 hrs',
        Status: 'Pending',
        EmployeeName: 'Employee1',
        ProjectName: 'Project1'
      }, {
        ID: 4,
        StartDate: '16/01/2017',
        EndDate: '22/01/2017',
        BillableHours: '8 hrs',
        NonBillableHours: '0 hrs',
        Status: 'Submitted',
        EmployeeName: 'Employee1',
        ProjectName: 'Project1'
      }
    ];
    var context = this;
    return (
      <div className="portlet light">
        <div className="portlet-title">
          <div className="caption">
            <i className="icon-settings font-red"></i>
            <span className="caption-subject font-red sbold uppercase">Employee Timesheet List</span>
          </div>
          <div className="actions">
            <button type="button" className="btn green" onClick={ this.props.onAddClick }><i className="fa fa-plus"></i> Add</button>
          </div>
        </div>
        <div className="portlet-body">
          <div className="row">
            <div className="form-group col-md-5">
              <label className="control-label col-md-5"><b>Start Date</b></label>
              <div className="col-md-7">
                <input type ="date" className="form-control form-control-inline" value={this.state.startDate} onChange={this.handleStartDateChange} />
              </div>
            </div>
            <div className="form-group col-md-5">
              <label className="control-label col-md-5"><b>End Date</b></label>
              <div className="col-md-7">
                <input type ="date" className="form-control form-control-inline"  value={this.state.endDate} onChange={this.handleEndDateChange} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-5">
              <label className="control-label col-md-5"><b>Project Name</b></label>
              <div className="col-md-7">
                <select className="bs-select form-control" value={this.state.projectName} onChange={this.handleProjectNameChange}>
                  <option>Select</option>
                  {
                    project.map((row, index) => {
                      return (
                        <option key={index}> {row.Name}</option>
                      );
                    })
                  }
                </select>
              </div>
            </div>
            <div className="form-group col-md-5">
              <label className="control-label col-md-5"><b>Employee Name</b></label>
              <div className="col-md-7">
                <select className="bs-select form-control" value={this.state.employeeName} onChange={this.handleEmployeeNameChange}>
                  <option>Select</option>
                  {
                    employee.map((row, index) => {
                      return (
                        <option key={index}> {row.Name}</option>
                      );
                    })
                  }
                </select>
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
                  <th> Employee Name </th>
                  <th>Project Name</th>
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
                        <td> {row.EmployeeName} </td>
                        <td> {row.ProjectName} </td>
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

export default EmployeeTimesheetList