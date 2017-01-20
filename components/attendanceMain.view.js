//import React from 'react';
import AttendanceList from './attendanceList.view';
import Attendance from './attendance.view';

class AttendanceMainView extends React.Component {
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
    console.log('ID', id);
    this.setState({ showList: false, id: id });
  }

  onBackClick() {
    this.setState({ showList: true, id: -10 });
  }

  render() {
    var renderView;
      console.log('showListRender', this.state.showList);
    if (this.state.showList) {
      renderView = (
        <AttendanceList
          onActionClick={this.onActionClick}
          />
      )
    } else {
      renderView = (
        <Attendance
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

export default AttendanceMainView