//import React, {Component} from 'react';
import Chart from './chart';
class TimeSheetView extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            optionsTimeSheet:{}
        };
    }
    componentDidMount() {
        this.setState({
            optionsTimeSheet: {
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
                           y: 22,
                        },
                        {
                            name: 'Pending',
                            y: 9
                        },
                        {
                            name: 'Submitted',
                            y: 5
                        },
                        {
                            name: 'Not-Submitted',
                            y: 7
                        },   {
                            name: 'Partially-Approved',
                            y: 3
                        },  {
                            name: 'Rejected',
                            y: 1
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
                            <span className="caption-subject font-red sbold uppercase">My TimeSheet</span>
                        </div>
                        <div className="actions">
                          
                        </div>
                    </div>
                    <div className="portlet-body">
                       <Chart container="optionsTimeSheet" options={this.state.optionsTimeSheet}/>
                    </div>
                </div>
        );
    }
}

export default (TimeSheetView)