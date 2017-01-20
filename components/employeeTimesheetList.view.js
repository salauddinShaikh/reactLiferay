//import React from 'react';
class EmployeeTimesheetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
      projectName: '',
      employeeName: '',
      timesheetData: [],
      projectMaster: [],
      employeeMaster: []
    };
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleProjectNameChange = this.handleProjectNameChange.bind(this);
    this.handleEmployeeNameChange = this.handleEmployeeNameChange.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
  }

  componentDidMount() {
    this.getTimesheetList();
    this.getProjectMasterList();
    this.getEmployeeMasterList();
  }

  getTimesheetList() {
    console.log('get-timesheetList : ');
    var context = this;
    Liferay.Service(
      '/eternus-portlet.timesheet/GetTimeSheets',
      {
        employeeId: 1
      },
      function (obj) {
        console.log('get-timesheetList : ', obj);
        context.setState({ timesheetData: obj });
      }
    );
  }

  getProjectMasterList() {
    var context = this;
    Liferay.Service(
      '/eternus-portlet.project/GetProjects',
      function (obj) {
        console.log('Project Master', obj);
        context.setState({ projectMaster: obj });
      }
    );
  }

  getEmployeeMasterList() {
    var context = this;
    Liferay.Service(
      '/eternus-portlet.mstemployee/GetEmployees',
      function (obj) {
        console.log('Employee Master', obj);
        context.setState({ employeeMaster: obj });
      }
    );
  }
  onSearchClick(event) {
    var context = this;
    console.log('Search-get-timesheetList : ');
    var searchObj = {
      employeeId: 1
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
                    context.state.projectMaster.map((row, index) => {
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
                    context.state.employeeMaster.map((row, index) => {
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