//import React, {Component} from 'react';
import Chart from './chart';
class TeamTimeSheetView extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            optionsTeamTimeSheet:{}
        };
    }
    componentDidMount() {
        this.setState({
            optionsTeamTimeSheet: {
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
                           name: 'For Approval',
                           y: 7,
                        },
                        {
                            name: 'Approved',
                            y: 6
                        },{
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
                            <span className="caption-subject font-red sbold uppercase">Team TimeSheet</span>
                        </div>
                        <div className="actions">
                          
                        </div>
                    </div>
                    <div className="portlet-body">
                       <Chart container="optionsTeamTimeSheet" options={this.state.optionsTeamTimeSheet}/>
                    </div>
                </div>
        );
    }
}

export default (TeamTimeSheetView)