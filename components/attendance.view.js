import React from 'react';
import Highcharts from 'highcharts';
import Chart from './chart';

class Attendance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Date: '04/01/2017',
            InTime: '9.30 am',
            OutTime: '7.30 pm',
            TotalTime: '9 hrs',
            WorkingTime: '8 hrs',
            BreakTime: '2 hrs',
            Status: 'Present',
            times: ['9.30 am', '1.00 pm', '2.00 pm', '5.00 pm', '5.30 pm', '7.30 pm'],
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
        var context = this;
        var style = {};
        return (
            <div className="portlet light">
                <div className="portlet-title">
                    <div className="caption">
                        <span className="caption-subject font-dark sbold uppercase">Attendance</span>
                    </div>
                </div>
                <div>
                    <span className="label label-sm" style={{ backgroundColor: 'darkseagreen' }}>In Time</span>
                    <span className="label label-sm" style={{ backgroundColor: 'indianred' }}>Out Time</span>
                </div>
                <div className="table-scrollable">
                    <table className="table table-light">
                        <tbody>
                            <tr>
                                {
                                    this.state.times.map((row, index) => {
                                        if ((index + 1) % 2 === 0) {
                                            style = {
                                                backgroundColor: 'indianred',
                                                fontWeight: 'bold',
                                                color: 'black'
                                            }

                                        } else {
                                            style = {
                                                backgroundColor: 'darkseagreen',
                                                fontWeight: 'bold',
                                                color: 'white'
                                            }
                                        }
                                        return (
                                            <td style={style} key={index}>{row}</td>
                                        );
                                    })
                                }
                            </tr>
                        </tbody>
                    </table>
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
                                    <label className="control-label">{this.state.Date} </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><b>Status: </b> </label>
                                <div className="col-md-8">
                                    <label className="control-label">{this.state.Status} </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><b>In Time: </b></label>
                                <div className="col-md-8">
                                    <label className="control-label">{this.state.InTime} </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><b>Out Time: </b></label>
                                <div className="col-md-8">
                                    <label className="control-label">{this.state.OutTime} </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><b>Total Time: </b></label>
                                <div className="col-md-8">
                                    <label className="control-label">{this.state.TotalTime} </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><b>Working Time: </b></label>
                                <div className="col-md-8">
                                    <label className="control-label">{this.state.WorkingTime} </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><b>Break Time: </b></label>
                                <div className="col-md-8">
                                    <label className="control-label">{this.state.BreakTime}</label>
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