//import React, {Component} from 'react';
import Chart from './chart';
class DashboardView extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            optionsPieSimple:{}
        };
    }
    componentDidMount() {
        this.setState({
            optionsPieSimple: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Total time spend in Office'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.y} hrs</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.y} hrs',
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
                        name: 'Working',
                        y: 8,
                    }, {
                            name: 'Break',
                            y: 2,
                            sliced: true,
                            selected: true
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
                            <span className="caption-subject font-red sbold uppercase">Time spend in office </span>
                        </div>
                        <div className="actions">
                            <div className="btn-group btn-group-devided" data-toggle="buttons">
                                <label className="btn btn-circle btn-transparent grey-salsa ">
                                    <input type="radio" name="options" className="toggle" id="option1"/>Today</label>
                                <label className="btn btn-circle btn-transparent grey-salsa">
                                    <input type="radio" name="options" className="toggle" id="option2"/>This Week</label>
                                <label className="btn btn-circle btn-transparent grey-salsa">
                                    <input type="radio" name="options" className="toggle" id="option2"/>This Month</label>
                            </div>
                        </div>
                    </div>
                    <div className="portlet-body">
                       <Chart container="optionsPieSimple" options={this.state.optionsPieSimple}/>
                    </div>
                </div>
        );
    }
}

export default (DashboardView)