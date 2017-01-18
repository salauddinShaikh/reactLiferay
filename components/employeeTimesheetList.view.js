import React from 'react';
class EmployeeTimesheetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: '',
      toDate: '',
      projectName: '',
      employeeName: ''
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
    var statusClass = ''
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