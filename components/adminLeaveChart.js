//import React, {Component} from 'react';
import Chart from './chart';
class AdminLeaveChart extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            optionsAdminLeaveBar:{}
        };
    }
    componentDidMount() {
        this.setState({
            optionsAdminLeaveBar: {
            chart: {
            type: 'column'
        },
        title: {
            text: 'Leave of all employee'
        },
        xAxis: {
            categories: [
                 '16/1/2016',
                '17/1/2016',
                '18/1/2016',
                '19/1/2016',
                '20/1/2016',
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Leave'
            }
        },
        tooltip: {
            pointFormat: ' <b>{point.y} </b>'
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            data: [49, 71, 106, 129, 140]

        },]

            }
        })
    }
    render() {
        return(
                <div className="portlet light">
                    <div className="portlet-title">
                        <div className="caption">
                            <i className="icon-settings font-red"></i>
                            <span className="caption-subject font-red sbold uppercase">Admin Leaves</span>
                        </div>
                        <div className="actions">
                          
                        </div>
                    </div>
                    <div className="portlet-body">
                       <Chart container="optionsAdminLeaveBar" options={this.state.optionsAdminLeaveBar}/>
                    </div>
                </div>
        );
    }
}

export default (AdminLeaveChart)