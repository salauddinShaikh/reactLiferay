import React from 'react';
import Highcharts from 'highcharts';
import Chart from './chart';

class Attendance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '04/01/2017',
            inTime: '10.30 am',
            outTime: '7.30 pm',
            totalTime: '9 hrs',
            workingTime: '8 hrs',
            freeTime: '8 hrs',
            optionsPieSimple: {}
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
                        }
                    }
                },
                series: [{
                    name: 'Time',
                    colorByPoint: true,
                    data: [{
                        name: 'Working',
                        y: 8,
                    }, {
                            name: 'Free',
                            y: 2,
                            sliced: true,
                            selected: true
                        }]
                }]
            }
        })
    }

    render() {
        var context = this;
        return (
            <div className="portlet light">
                <div className="portlet-title">
                    <div className="caption">
                        <span className="caption-subject font-dark sbold uppercase">Attendance</span>
                    </div>
                </div>
                <div className="portlet-body form row">
                    <form className="form-horizontal col-md-6" >
                        <div className="form-body">
                            <div className="form-group">
                                <label className="col-md-4 control-label"><b>ID: </b> </label>
                                <div className="col-md-8">
                                    <label className="control-label">{this.props.id} </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><b>Date: </b> </label>
                                <div className="col-md-8">
                                    <label className="control-label">{this.state.date} </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><b>In Time: </b></label>
                                <div className="col-md-8">
                                    <label className="control-label">{this.state.inTime} </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><b>Out Time: </b></label>
                                <div className="col-md-8">
                                    <label className="control-label">{this.state.outTime} </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><b>Total Time: </b></label>
                                <div className="col-md-8">
                                    <label className="control-label">{this.state.totalTime} </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><b>Working Time: </b></label>
                                <div className="col-md-8">
                                    <label className="control-label">{this.state.workingTime} </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><b>Free Time: </b></label>
                                <div className="col-md-8">
                                    <label className="control-label">{this.state.freeTime}</label>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="col-md-6">
                        <Chart container="optionsPieSimple" options={this.state.optionsPieSimple}/>
                    </div>
                </div>
                <div className="form-actions">
                    <div className="row">
                        <div className="col-md-offset-1 col-md-9">
                            <button type="button" className="btn default" onClick={ this.props.onBackClick }>Back</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Attendance