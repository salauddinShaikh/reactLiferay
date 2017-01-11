//import React, {Component} from 'react';

class ProfileListComponent extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {};
    }

    render() {
        var rec =  [
                {
                    empId : '1001',
                    empName : 'Amol',
                    department : 'EBS',
                    contactNo : '987456235'
                },{
                    empId : '1003',
                    empName : 'Aman',
                    department : 'ECS',
                    contactNo : '7574561455'
                },{
                     empId : '1004',
                    empName : 'Sachin',
                    department : 'EBS',
                    contactNo : '866456235'
                },{
                    empId : '1005',
                    empName : 'Mukul',
                    department : 'ECS',
                    contactNo : '8655294515'
                }
            ];
        var context = this;
        return(
                <div className="portlet light">
                    <div className="portlet-title">
                        <div className="caption">
                            <i className="icon-settings font-red"></i>
                            <span className="caption-subject font-red sbold uppercase">Profile list</span>
                        </div>
                        <div className="actions">
                            <a className="btn btn-circle red-sunglo " onClick={ this.props.changeView.bind(null,'addEdit') }>
                                <i className="fa fa-plus"></i> Add Profile 
                            </a>
                        </div>
                    </div>
                    <div className="portlet-body">
                        <div className="table-scrollable">
                            <table className="table table-hover table-light">
                                <thead>
                                    <tr>
                                        <th> # </th>
                                        <th> Emp ID </th>
                                        <th> Name </th>
                                        <th> Department </th>
                                        <th> Contact No </th>
                                        <th> Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    rec.map((row, index) => {
                                        return(
                                            <tr key={index}>
                                                <td> {index +1} </td>
                                                <td> {row.empId} </td>
                                                <td><a onClick={ this.props.changeView.bind(null,'addEdit') }> {row.empName}</a> </td>
                                                <td> {row.department} </td>
                                                <td> {row.contactNo} </td>
                                                <td>
                                                    <button className="btn btn-outline green " title="Edit" onClick={ this.props.changeView.bind(null,'addEdit') }>
                                                        <i className="fa fa-edit"></i>
                                                    </button>
                                                    <button className="btn btn-outline green "  title="View" onClick={ this.props.changeView.bind(null,'viewOnly') }>
                                                        <i className="fa fa-search"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        );
    }
}

export default (ProfileListComponent)