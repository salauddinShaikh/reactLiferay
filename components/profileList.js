//import React, {Component} from 'react';

class ProfileListComponent extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            profileList:[]
        };
    this.onDelete = this.onDelete.bind(this);
    }

  componentDidMount() {
     var context = this
      Liferay.Service('/eternus-portlet.employee/GetProfiles', function(obj) {
        console.log(obj);
        context.setState({ profileList:obj})
      });
  }
  onDelete(id){
    var context = this
    Liferay.Service('/eternus-portlet.employee/deleteProfile', { Id: id }, function(reponse) {
        if(reponse){
           let profileList=context.state.profileList;
           let index= profileList.findIndex(function(item,index){ if(item.EmpId===id){return index}})
           profileList.splice(index,1)
           context.setState({ profileList:profileList})
        }
    }
);
  }
    render() {
        return(
                <div className="portlet light">
                    <div className="portlet-title">
                        <div className="caption">
                            <i className="icon-settings font-red"></i>
                            <span className="caption-subject font-red sbold uppercase">User list</span>
                        </div>
                        <div className="actions">
                            <a className="btn btn-circle red-sunglo " onClick={ this.props.changeView.bind(null,'add') }>
                                <i className="fa fa-plus"></i> Add User 
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
                                        <th> First Name </th>
                                        <th> Last Name </th>
                                        <th> Department </th>
                                        <th> Contact No </th>
                                        <th> Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.profileList.map((row, index) => {
                                        return(
                                            <tr key={index}>
                                                <td> {index +1} </td>
                                                <td> {row.EmpId} </td>
                                                <td> {row.FName} </td>
                                                <td> {row.LName} </td>
                                                <td> {row.Department} </td>
                                                <td> {row.ContactNo} </td>
                                                <td>
                                                    <button className="btn btn-outline green " title="Edit" onClick={ this.props.changeView.bind(null,'edit',row.EmpId) }>
                                                        <i className="fa fa-edit"></i>
                                                    </button>
                                                    <button className="btn btn-outline green "  title="View" onClick={ this.props.changeView.bind(null,'viewOnly',row.EmpId) }>
                                                        <i className="fa fa-search"></i>
                                                    </button>
                                                    <button className="btn btn-outline green "  title="Delete" onClick={ this.onDelete.bind(null,row.EmpId) }>
                                                        <i className="fa fa-trash"></i>
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