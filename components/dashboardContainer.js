import React from 'react';
import DashboardView from './dashboardView';
import InTimeStatisticsView from './timeInStatisticsView';

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
      <div className="row">
        <div className="col-md-6">   
           <DashboardView /> 
        </div>
        <div className="col-md-6">   
           <InTimeStatisticsView /> 
        </div>
      </div>
    );
  }
}

export default DashboardContainer