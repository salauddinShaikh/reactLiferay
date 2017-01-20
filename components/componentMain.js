// import React from 'react';
// import ReactDOM from 'react-dom';

import LeavesListComponent from './leavesListComponent';
import AddLeavesComponent from './addLeavesComponent';
import LeaveDetailsComponent from './leaveDetailsComponent';

class ComponentMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: true,
      leaveId: 0,
      showDetails: false,
      showEditView: false,
    }
    this.onAddClick = this.onAddClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.onRecordClick = this.onRecordClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onDeleteClick(id) {
    this.onDeleteAPI(id);
    // this.setState({ showList: true, showDetails: false, showEditView: false, leaveId:0 });
  }

  onAddClick() {
    this.setState({ showList: false, showDetails: false, showEditView: false });
  }

  onBackClick() {
    this.setState({ showList: true, showDetails: false });
  }

  onSubmitClick(actionData) {
    var context = this;
    this.setState({ showList: true, showDetails: false });
  }

  onRecordClick(ID) {
    debugger;
    this.setState({ showDetails: true, showList: false, showEditView: false });
    this.setState({ leaveId: ID });
  }

  onEditClick(ID) {
    this.setState({ showDetails: false, showList: false, showEditView: true, leaveId: ID })
  }

  /**
   * onDelete API Call
   */
  onDeleteAPI(id) {
    var context = this;
    Liferay.Service(
      '/Test007-portlet.album/DeleteAlbumAPI',
      {
        employeeId: Liferay.ThemeDisplay.getUserId(),
        leaveId: id
      },
      function (obj) {
        console.log('delete : ', obj);
        context.setState({ showList: obj.Status, showDetails: false });
      }
    );
  }

  render() {
    var renderView;
    if (this.state.showList === true ) {
      renderView = (
        <LeavesListComponent onAddClick={this.onAddClick} onRecordClick={this.onRecordClick} />
      );
    }

    else if (this.state.showList === false && this.state.showDetails === false && this.state.showEditView === false) {
      renderView = (
        <AddLeavesComponent onDeleteClick={this.onDeleteClick} onBackClick={this.onBackClick} ID={this.state.leaveId} editView={this.state.showEditView} onSubmitClick={this.onSubmitClick}/>
      );
    }

    else if (this.state.showDetails === true && this.state.showList === false) {
      renderView = (
        <LeaveDetailsComponent onBackClick={this.onBackClick} onEditClick={this.onEditClick} ID={this.state.leaveId} editView={this.state.showEditView}/>
      );
    }

    else if (this.state.showEditView === true) {
      renderView = (
        <AddLeavesComponent onDeleteClick={this.onDeleteClick} onBackClick={this.onBackClick} ID={this.state.leaveId} editView={this.state.showEditView} onSubmitClick={this.onSubmitClick}/>
      );
    }

    return (
      <div>
        { renderView }
      </div>
    );
  }
}

export default (ComponentMain);