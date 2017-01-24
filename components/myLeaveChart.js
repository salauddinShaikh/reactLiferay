//import React, {Component} from 'react';
import Chart from './chart';
class MyLeaveChart extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            optionsLeavePie:{}
        };
    }
    componentDidMount() {
        this.setState({
            optionsLeavePie: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.y} </b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.y} ',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        },
                        showInLegend: true
                    }
                },
                series: [{
                    name: 'Time',
                    colorByPoint: true,
                    data: [{
                           name: 'Approved',
                           y: 7,
                        },
                        {
                            name: 'Pending',
                            y: 6
                        },{
                            name: 'Partially-Approved',
                            y: 3
                        },{
                            name: 'Rejected',
                            y: 1
                        },{
                            name:'Balance',
                            y:8
                        }]
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
                            <span className="caption-subject font-red sbold uppercase">My Leaves</span>
                        </div>
                        <div className="actions">
                          
                        </div>
                    </div>
                    <div className="portlet-body">
                       <Chart container="optionsLeavePie" options={this.state.optionsLeavePie}/>
                    </div>
                </div>
        );
    }
}

export default (MyLeaveChart)