import React from 'react';
import ReactDOM from 'react-dom';

import LeavesListApprovalComponent from './leavesListApprovalComponent';
import SingleLeaveApprovalComponent from './singleLeaveApprovalComponent';

// import '../style.css'
class ComponentMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLeavesList: true,
      showLeavesDetail: false,
      leaveId : '',
    }
    this.onAddClick = this.onAddClick.bind(this);
    this.onRecordClick = this.onRecordClick.bind(this);
    this.onReject = this.onReject.bind(this);
    this.onApprove = this.onApprove.bind(this);
  }

  // TODO :  add id Parameter
  onRecordClick(ID) {
    this.setState({ showLeavesDetail: true, showLeavesList: false, leaveId: ID });
  }

  onAddClick() {
        //this.setState({ showLeavesList: false, showLeavesDetail: false, showEditView: false });
        alert('Leave Added');
  }

  onReject() {
      console.log('reject hit');
      if( this.state.showLeavesDetail) {
          this.setState({ showLeavesDetail : false, showLeavesList : true });
          //TODO : respoective API calls and actions
      } else if (this.state.showLeavesList ) {
          this.setState({ showLeavesDetail : false, showLeavesList : true });
          //TODO : respoective API calls and actions
      }
  }

  onApprove() {
      if( this.state.showLeavesDetail) {
          this.setState({ showLeavesDetail : false, showLeavesList : true });
          //TODO : respoective API calls and actions
      } else if (this.state.showLeavesList ) {
          this.setState({ showLeavesDetail : false, showLeavesList : true });
          //TODO : respoective API calls and actions
      }
  }

  

  render() {
    var renderView;
    if(this.state.showLeavesList === true && this.state.showLeavesDetail === false ) {
      renderView = (    
        <LeavesListApprovalComponent onAddClick={this.onAddClick} onRecordClick={this.onRecordClick} onApprove={this.onApprove} onReject={this.onReject}/>
      );
    } else if (this.state.showLeavesList === false && this.state.showLeavesDetail === true ) {
      renderView = (
        <SingleLeaveApprovalComponent ID={this.state.leaveId} onApprove={this.onApprove} onReject={this.onReject}/>
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