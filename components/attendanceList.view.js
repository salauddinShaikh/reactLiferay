import React from 'react';
class AttendanceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var rec = [
      {
        id: 1,
        date: '29/12/2016',
        inTime: '9.00 am',
        outTime: '7.00 pm',
        totalTime: '10 hrs'
      }, {
        id: 2,
        date: '02/01/2017',
        inTime: '9.30 am',
        outTime: '7.30 pm',
        totalTime: '10 hrs'
      }, {
        id: 3,
        date: '03/01/2017',
        inTime: '10.00 am',
        outTime: '7.00 pm',
        totalTime: '9 hrs'
      }, {
        id: 4,
        date: '04/01/2017',
        inTime: '10.30 am',
        outTime: '7.30 pm',
        totalTime: '9 hrs'
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
              <label className="control-label col-md-1">From </label>
              <div className="col-md-3">
                <input type ="date" className="form-control form-control-inline" />
              </div>
              <label className="control-label col-md-1">To</label>
              <div className="col-md-3">
                <input type ="date" className="form-control form-control-inline" />
              </div>
              <button type="button" className="btn default col-md-1">Search</button>
            </div>
            <div className="table-scrollable">
              <table className="table table-hover table-light">
                <thead>
                  <tr>
                    <th> # </th>
                    <th> Date </th>
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
                          <td><a onClick={ this.props.onActionClick.bind(null, row.id) }> {row.date}</a> </td>
                          <td> {row.inTime} </td>
                          <td> {row.outTime} </td>
                          <td>
                            {row.totalTime}
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