//import React from 'react';
class EmployeeAttendanceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: '',
      toDate: '',
      projectName: '',
      employeeName: '',
      attendanceData: [],
      projectMaster: [],
      employeeMaster: [],
    };
    this.handleFromDateChange = this.handleFromDateChange.bind(this);
    this.handleToDateChange = this.handleToDateChange.bind(this);
    this.handleProjectNameChange = this.handleProjectNameChange.bind(this);
    this.handleEmployeeNameChange = this.handleEmployeeNameChange.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
  }

  componentDidMount() {
    this.getAttendanceList();
    this.getProjectMasterList();
    this.getEmployeeMasterList();
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

  getAttendanceList() {
    console.log('get-attendanceList : ');
    var context = this;
    Liferay.Service(
      '/eternus-portlet.attendance/GetAttendanceLists',
      {
        employeeId: 1
      },
      function (obj) {
        console.log('get-attendanceList : ', obj);
        context.setState({ attendanceData: obj });
      }
    );
  }

  onSearchClick(event) {
    var context = this;
    console.log('Search-get-attendanceList : ');
    var searchObj = {
      employeeId: 1
    };

    if (this.state.startDate != '')
      searchObj.StartDate = this.state.startDate;
    if (this.state.endData != '')
      searchObj.EndDate = this.state.endData;
    if (this.state.projectName != '')
      searchObj.EndDate = this.state.projectName;

    Liferay.Service(
      '/eternus-portlet.attendance/GetAttendanceLists',
      searchObj,
      function (obj) {
        console.log('Search-get-attendanceList : ', obj);
        context.setState({ attendanceData: obj });
      }
    );
  }
  handleFromDateChange(event) {
    this.setState({ fromDate: event.target.value });
  }
  handleToDateChange(event) {
    this.setState({ toDate: event.target.value });
  }
  handleProjectNameChange(event) {
    this.setState({ projectName: event.target.value });
  }
  handleEmployeeNameChange(event) {
    this.setState({ employeeName: event.target.value });
  }
  render() {
    var context = this;
    return (
      <div className="portlet light">
        <div className="portlet-title">
          <div className="caption">
            <i className="icon-settings font-red"></i>
            <span className="caption-subject font-red sbold uppercase">Employee Attendance List</span>
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
                  <th> Employee Name </th>
                  <th> Date </th>
                  <th> Status </th>
                  <th> In Time </th>
                  <th> Out Time </th>
                  <th> Total Time </th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.attendanceData.map((row, index) => {
                    return (
                      <tr key={index}>
                        <td> {index + 1} </td>
                        <td> <a onClick={ this.props.onActionClick.bind(null, row.ID) }> {row.EmployeeName}</a> </td>
                        <td> {row.Date} </td>
                        <td> {row.Status} </td>
                        <td> {row.InTime} </td>
                        <td> {row.OutTime} </td>
                        <td>
                          {row.TotalTime}
                        </td>
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

export default EmployeeAttendanceList