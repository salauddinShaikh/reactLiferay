import React from 'react';
class EmployeeAttendanceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: '',
      toDate: '',
      projectName: '',
      employeeName: '',
    };
    this.handleFromDateChange = this.handleFromDateChange.bind(this);
    this.handleToDateChange = this.handleToDateChange.bind(this);
    this.handleProjectNameChange = this.handleProjectNameChange.bind(this);
    this.handleEmployeeNameChange = this.handleEmployeeNameChange.bind(this);
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
  handleProjectNameChange(event) {
    this.setState({ projectName: event.target.value });
  }
  handleEmployeeNameChange(event) {
    this.setState({ employeeName: event.target.value });
  }
  render() {
    var rec = [
      {
        ID: 1,
        EmployeeName: 'employee1',
        Date: '29/12/2016',
        InTime: '9.00 am',
        OutTime: '7.00 pm',
        TotalTime: '10 hrs',
        Status: 'Present',
      }, {
        ID: 2,
        EmployeeName: 'employee2',
        Date: '02/01/2017',
        InTime: '9.30 am',
        OutTime: '7.30 pm',
        TotalTime: '10 hrs',
        Status: 'Present',
      }, {
        ID: 3,
        EmployeeName: 'employee3',
        Date: '03/01/2017',
        InTime: '',
        OutTime: '',
        TotalTime: '',
        Status: 'Working from Home',
      }, {
        ID: 4,
        EmployeeName: 'employee4',
        Date: '04/01/2017',
        InTime: '',
        OutTime: '',
        TotalTime: '',
        Status: 'Absent'
      },
    ];
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
                  <option>Project1</option>
                  <option>Project2</option>
                  <option>Project3</option>
                </select>
              </div>
            </div>
            <div className="form-group col-md-5">
              <label className="control-label col-md-5"><b>Employee Name</b></label>
              <div className="col-md-7">
                <select className="bs-select form-control" value={this.state.employeeName} onChange={this.handleEmployeeNameChange}>
                  <option>Select</option>
                  <option>Employee1</option>
                  <option>Employee2</option>
                  <option>Employee3</option>
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
                  rec.map((row, index) => {
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