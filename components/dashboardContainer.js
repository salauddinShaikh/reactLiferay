//import React from 'react';
//import DashboardView from './dashboardView';
import InTimeStatisticsView from './timeInStatisticsView';
import TimeSheetView from './timeSheetView';
import TeamTimeSheetView from './teamTimeSheet';
import ManagerTeamTimeSheetView from './managerTeamTimeSheet';
import MyLeaveChart from './myLeaveChart';
import ManagerLeaveChart from './managerLeaveChart';
import AdminLeaveChart from './adminLeaveChart';
import MyAttendanceChart from './myAttendance';
import AdminAttendanceChart from './adminAttendance';
import ManagerAttendanceChart from './managerAttendance';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
    }
    this.changeView = this.changeView.bind(this);
  }

  changeView(view) {
     this.setState({ view: view });
  }

  render() {
    return (
        <div>
        <div className="row">
          <div className="col-md-6">   
             <MyAttendanceChart /> 
          </div>
          <div className="col-md-6">   
            <TimeSheetView /> 
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">   
             <InTimeStatisticsView /> 
          </div>
          <div className="col-md-6">   
             <TeamTimeSheetView /> 
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">   
             <ManagerTeamTimeSheetView /> 
          </div>
          <div className="col-md-6">   
             <MyLeaveChart /> 
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">   
             <ManagerLeaveChart /> 
          </div>
	        <div className="col-md-6">   
             <AdminLeaveChart /> 
          </div>
        </div>
        <div className="row">
         
	        <div className="col-md-6">   
             <AdminAttendanceChart /> 
          </div>
           <div className="col-md-6">   
             <ManagerAttendanceChart /> 
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardContainer