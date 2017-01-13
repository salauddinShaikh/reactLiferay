import React from 'react';
import EmployeeAttendanceList from './employeeAttendanceList.view';
import EmployeeAttendance from './employeeAttendance.view';

class EmployeeAttendanceMainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: true,
      id: -10
    }
    this.onActionClick = this.onActionClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
  }

  onActionClick(id) {
    this.setState({ showList: false, id: id });
  }

  onBackClick() {
    this.setState({ showList: true, id: -10 });
  }

  render() {
    var renderView;
    if (this.state.showList) {
      renderView = (
        <EmployeeAttendanceList
          onActionClick={this.onActionClick}
          />
      )
    } else {
      renderView = (
        <EmployeeAttendance
          onBackClick={this.onBackClick}
          id = {this.state.id}
          />
      )
    }

    return (
      <div>
        { renderView }
      </div>
    );
  }
}

export default EmployeeAttendanceMainView