//import React, {Component} from 'react';
import Chart from './chart';
class ManagerAttendenceChart extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            optionsManagerAttendenceBar:{}
        };
    }
    componentDidMount() {
        this.setState({
            optionsManagerAttendenceBar: {
               chart: {
            type: 'column'
        },
        title: {
            text: 'Team Attendence'
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
                text: 'Team Attendence by project'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}% </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
          series: [{
            name: 'Project1',
            data: [89, 77, 76, 67, 99]

        }, {
            name: 'Project2',
            data: [88,93, 75, 84, 90]

        }, {
            name: 'Project3',
            data: [82, 63, 71, 91, 84]

        }, {
            name: 'Project4',
            data: [84, 99, 88, 77, 85]

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
                            <span className="caption-subject font-red sbold uppercase">Team Attendence</span>
                        </div>
                        <div className="actions">
                          
                        </div>
                    </div>
                    <div className="portlet-body">
                       <Chart container="optionsManagerAttendenceBar" options={this.state.optionsManagerAttendenceBar}/>
                    </div>
                </div>
        );
    }
}

export default (ManagerAttendenceChart)