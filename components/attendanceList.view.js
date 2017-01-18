import React from 'react';
class AttendanceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: '',
      toDate: ''
    };
    this.onSearchClick = this.onSearchClick.bind(this);
    this.handleFromDateChange = this.handleFromDateChange.bind(this);
    this.handleToDateChange = this.handleToDateChange.bind(this);  
  }


  handleFromDateChange(event) {
    this.setState({ fromDate: event.target.value });
  }
  handleToDateChange(event) {
    this.setState({ toDate: event.target.value });
  }

  onSearchClick(event) {
    console.log('search', this.state);
  }

  render() {
    var rec = [
      {
        ID: 1,
        Date: '29/12/2016',
        InTime: '9.00 am',
        OutTime: '7.00 pm',
        TotalTime: '10 hrs',
        Status:'Present'
      }, {
        ID: 2,
        Date: '02/01/2017',
        InTime: '9.30 am',
        OutTime: '7.30 pm',
        TotalTime: '10 hrs',
        Status:'Present'
      }, {
        ID: 3,
        Date: '03/01/2017',
        InTime: '',
        OutTime: '',
        TotalTime: '',
        Status:'Working from Home'
      }, {
        ID: 4,
        Date: '04/01/2017',
        InTime: '',
        OutTime: '',
        TotalTime: '',
        Status:'Absent'
      },
    ];
    var context = this;
    return (
      <div className="portlet light">
        <div className="portlet-title">
          <div className="caption">
            <i className="icon-settings font-red"></i>
            <span className="caption-subject font-red sbold uppercase">Attendance List</span>
          </div>
        </div>
        <div className="portlet-body">
          <div className="row">
            <div className="form-group col-md-4">
              <label className="control-label col-md-3"><b>From</b></label>
              <div className="col-md-9">
                <input type ="date" className="form-control form-control-inline"  value={this.state.fromDate} onChange={this.handleFromDateChange}  />
              </div>
            </div>
            <div className="form-group col-md-4">
              <label className="control-label col-md-3"><b>To</b></label>
              <div className="col-md-9">
                <input type ="date" className="form-control form-control-inline" value={this.state.toDate} onChange={this.handleToDateChange} />
              </div>
            </div>
            <div className="form-group col-md-2">
              <div className="col-md-10">
                <button type="button" className=" form-control btn default" onClick={ this.onSearchClick }>Search</button>
              </div>
            </div>
          </div>
          <div className="table-scrollable">
            <table className="table table-hover table-light">
              <thead>
                <tr>
                  <th> # </th>
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
                        <td><a onClick={ this.props.onActionClick.bind(null, row.ID) }> {row.Date}</a> </td>
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

export default AttendanceList