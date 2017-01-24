//import React, {Component} from 'react';
import Chart from './chart';
class AdminAttendanceChart extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            optionsAdminAttendanceBar:{}
        };
    }
    componentDidMount() {
        this.setState({
            optionsAdminAttendanceBar: {
         chart: {
            type: 'column'
        },
        title: {
            text: 'Attendance record'
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
                text: 'Attendance record'
            }
        },
        tooltip: {
            pointFormat: ' <b>{point.y}% </b>'
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            }
        },
        series: [{
            data: [49.9, 71.5, 89, 77, 67]
        }]

            }
        })
    }
    render() {
        return(
                <div className="portlet light">
                    <div className="portlet-title">
                        <div className="caption">
                            <i className="icon-settings font-red"></i>
                            <span className="caption-subject font-red sbold uppercase">Admin Attendance</span>
                        </div>
                        <div className="actions">
                          
                        </div>
                    </div>
                    <div className="portlet-body">
                       <Chart container="optionsAdminAttendanceBar" options={this.state.optionsAdminAttendanceBar}/>
                    </div>
                </div>
        );
    }
}

export default (AdminAttendanceChart)