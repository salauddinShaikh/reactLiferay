//import React, {Component} from 'react';
import Chart from './chart';
class ManagerLeaveChart extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            optionsLeaveBar:{}
        };
    }
    componentDidMount() {
        this.setState({
            optionsLeaveBar: {
                chart: {
            type: 'column'
        },
        title: {
            text: 'Leave'
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
                text: 'Leaves by employee'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y} </b></td></tr>',
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
            data: [4, 7, 2, 1, 9]

        }, {
            name: 'Project2',
            data: [8,3, 5, 4, 0]

        }, {
            name: 'Project3',
            data: [2, 3, 1, 1, 4]

        }, {
            name: 'Project4',
            data: [4, 9, 8, 7, 5]

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
                            <span className="caption-subject font-red sbold uppercase">Team Leaves</span>
                        </div>
                        <div className="actions">
                          
                        </div>
                    </div>
                    <div className="portlet-body">
                       <Chart container="optionsLeaveBar" options={this.state.optionsLeaveBar}/>
                    </div>
                </div>
        );
    }
}

export default (ManagerLeaveChart)