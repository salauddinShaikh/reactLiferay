import React from 'react';
import EmployeeTimesheetList from './employeeTimesheetList.view';
import EmployeeTimesheet from './employeeTimesheet.view';

class EmployeeTimesheetMainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: true,
      id: -10
    }
    this.onRowClick = this.onRowClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

  onRowClick(id) {
    this.setState({ showList: false, id: id });
  }

  onBackClick() {
    this.setState({ showList: true, id: -10 });
  }

  onAddClick() {
    this.setState({ showList: false });
  }

  render() {
    var renderView;
    if (this.state.showList) {
      renderView = (
        <EmployeeTimesheetList
          onRowClick={this.onRowClick}
          onAddClick={this.onAddClick}
          />
      )
    } else {
      renderView = (
        <EmployeeTimesheet
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

export default EmployeeTimesheetMainView