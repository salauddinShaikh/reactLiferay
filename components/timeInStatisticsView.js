//import React, {Component} from 'react';
import Chart from './chart';
class InTimeStatisticsView extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            optionsPie:{}
        };
    }
    componentDidMount() {
        this.setState({
            optionsPie: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.y} employees</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.y} employees',
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
                        name: '9:30-10:00',
                        y: 50,
                    },
                    {
                        name: '10:00-11:00',
                        y: 20,
                    },
                    {
                        name: 'After 11:00',
                        y: 19,
                    },
                    {
                        name: 'Before 9:00',
                        y: 10,
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
                            <span className="caption-subject font-red sbold uppercase">In-Time Statistics</span>
                        </div>
                        <div className="actions">
                          
                        </div>
                    </div>
                    <div className="portlet-body">
                       <Chart container="optionsPie" options={this.state.optionsPie}/>
                    </div>
                </div>
        );
    }
}

export default (InTimeStatisticsView)