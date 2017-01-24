//import React, {Component} from 'react';
import Chart from './chart';
class ManagerTeamTimeSheetView extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            optionsManagerTimeSheet:{},
            projectList:[]
        };
    }
    componentDidMount() {
        var context = this;
        Liferay.Service('/eternus.timesheet/TeamTimesheetData', function (data) {
                context.setState({ attendance: data });
                context.getChart(data);
            }
        );
        Liferay.Service( '/eternus.project/GetProjects',function(result) {
            console.log(result);
            context.setState({projectList:result});
        });
    }

    getChart(data){
        this.setState({
            optionsManagerTimeSheet: {
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
                    data: data
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
                            <span className="caption-subject font-red sbold uppercase">Manager Team TimeSheet</span>
                        </div>
                        <div className="actions">
                           <select className="bs-select form-control">
                              <option>Select Project</option>
                                  {
                                    this.state.projectList.map((row, index) => {
                                       return (
                                          <option key={index} value={row.Name}> {row.Name}</option>
                                       );
                                    })
                                  }
                           </select>
                        </div>
                    </div>
                    <div className="portlet-body">
                       <Chart container="optionsManagerTimeSheet" options={this.state.optionsManagerTimeSheet}/>
                    </div>
                </div>
        );
    }
}

export default (ManagerTeamTimeSheetView)