// import React from 'react';
// import Highcharts from 'highcharts';
import Chart from './chart.view';

class EmployeeAttendance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            attendance: {
                InOuts: []
            },
            optionsPieSimple: {}
        };
    }

    componentDidMount() {
        console.log('getAttendance : ');
        this.getAttendance();
    }

    getAttendance() {
        var context = this;
        Liferay.Service(
            '/eternus-portlet.attendance/GetByEmployeeIdAttendanceId',
            {
                employeeId: 1,
                attendanceId: context.props.id
            },
            function (obj) {
                console.log('get-attendance : ', obj);
                var inOuts = obj.InOuts;
                var parsedArray = [];
                for (var count = 0; count < inOuts.length; count++) {
                    if (inOuts[count].includes("in") || inOuts[count].includes("out")) {
                        var rec = inOuts[i].split(":");
                        parsedArray.push(rec[0]);
                    }
                }
                obj.InOuts = parsedArray;
                console.log('parsedArray Obj1 : ', obj);
                context.setState({ attendance: obj });
                console.log('updated Obj : ', obj);
                context.getChart(obj);
            }
        );
    }

    getChart(obj) {
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
                        y: obj.WorkingTime,
                    }, {
                            name: 'Break',
                            y: obj.BreakTime,
                            sliced: true,
                            selected: true
                        }]
                }]
            }
        })
    }

    render() {
        var context = this;
        var style = '';
        return (
            <div className="portlet light">
                <div className="portlet-title">
                    <div className="caption">
                        <span className="caption-subject font-red sbold uppercase">Attendance</span>
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
                                    this.state.attendance.InOuts.map((row, index) => {
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
                                <label className="col-md-4 control-label"><b>Name: </b> </label>
                                <div className="col-md-8">
                                    <label className="control-label">{this.state.attendance.EmployeeName} </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><b>Date: </b> </label>
                                <div className="col-md-8">
                                    <label className="control-label">{this.state.attendance.Date} </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><b>Status: </b> </label>
                                <div className="col-md-8">
                                    <label className="control-label">{this.state.attendance.Status} </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><b>In Time: </b></label>
                                <div className="col-md-8">
                                    <label className="control-label">{this.state.attendance.InTime} </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><b>Out Time: </b></label>
                                <div className="col-md-8">
                                    <label className="control-label">{this.state.attendance.OutTime} </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><b>Total Time: </b></label>
                                <div className="col-md-8">
                                    <label className="control-label">{this.state.attendance.TotalTime} </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><b>Working Time: </b></label>
                                <div className="col-md-8">
                                    <label className="control-label">{this.state.attendance.WorkingTime} </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><b>Break Time: </b></label>
                                <div className="col-md-8">
                                    <label className="control-label">{this.state.attendance.BreakTime}</label>
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

export default EmployeeAttendance