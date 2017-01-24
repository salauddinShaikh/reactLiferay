//import React, {Component} from 'react';
import Chart from './chart';
class MyAttendanceChart extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            optionsMyAttendanceBar:{}
        };
    }
    componentDidMount() {
        this.setState({
            optionsMyAttendanceBar: {
             chart: {
            type: 'column'
        },
        title: {
            text: 'My Attendance'
        },
        xAxis: {
            categories: [ 
               '16/1/2016',
                '17/1/2016',
                '18/1/2016',
                '19/1/2016',
                '20/1/2016',]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total time spend'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
               
            }
        },
        series: [{
            name: 'Working',
            data: [7, 8, 9, 6, 5]
        }, {
            name: 'Break',
            data: [2, 2, 3, 2, 4]
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
                            <span className="caption-subject font-red sbold uppercase">My Attendance</span>
                        </div>
                        <div className="actions">
                          
                        </div>
                    </div>
                    <div className="portlet-body">
                       <Chart container="optionsMyAttendanceBar" options={this.state.optionsMyAttendanceBar}/>
                    </div>
                </div>
        );
    }
}

export default (MyAttendanceChart)