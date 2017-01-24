// import React from 'react';
// import ReactDOM from 'react-dom';

import ActionComponent from './actionComponent';
import ListComponent from './listComponent';

class ComponentMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLeaveActions: false,
      leaveId: 0,
      cancelLeaveList: [],
      modifyLeaveList: []
    }
    this.onRecordClick = this.onRecordClick.bind(this);
    this.onReject = this.onReject.bind(this);
    this.onApprove = this.onApprove.bind(this);
  }

  // TODO :  add id Parameter
  onRecordClick(ID) {
    this.setState({ showLeaveActions: true, leaveId: ID });
  }

  onReject() {
    console.log('reject hit');
    if (this.state.showLeaveActions) {
      this.setState({ showLeaveActions: false });
      //TODO : respoective API calls and actions
    }
  }

  onApprove() {
    console.log('approve hit');
    if (this.state.showLeaveActions) {
      this.setState({ showLeaveActions: false });
      //TODO : respoective API calls and actions
    }
  }



  render() {
    var renderView;
    var context = this;
    if (context.state.showLeaveActions === false) {
      renderView = (
        <ListComponent onRecordClick={context.onRecordClick} ></ListComponent>
      );
    } 
    else if (context.state.showLeaveActions === true) {
      renderView = (
        <ActionComponent ID={context.state.leaveId} onReject={context.onReject} onApprove={context.onApprove}></ActionComponent>
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