//import React, {Component} from 'react';

class ProfileViewComponent extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            profile:{}
        };
    }
    componentDidMount(){
      var context=this;
      if(this.props.params){
        console.log("View--",this.props.params)
        Liferay.Service('/eternus.employee/GetProfile',{ employeeId: this.props.params}, function(obj) {
             console.log(obj);
             context.setState({ profile:obj})
        });
      }
    }
    render() {
     
        return(
                <div className="portlet light">
                    <div className="portlet-title">
                        <div className="caption">
                            <i className="icon-settings font-red"></i>
                            <span className="caption-subject font-red sbold uppercase">Profile View</span>
                        </div>
                    </div>
                    <div className="portlet-body">
                      <form action="#" className="form-horizontal">
                                                        <div className="form-body">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3"><b>First Name:</b></label>
                                                                        <div className="col-md-9">
                                                                            <p className="form-control-static" > {this.state.profile.FName} </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group ">
                                                                        <label className="control-label col-md-3"><b>Last Name:</b></label>
                                                                        <div className="col-md-9">
                                                                            <p className="form-control-static" > {this.state.profile.LName} </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3"><b>Gender:</b></label>
                                                                        <div className="col-md-9">
                                                                             <p className="form-control-static" > {this.state.profile.Gender} </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3"><b>Employee ID:</b></label>
                                                                        <div className="col-md-9">
                                                                            <p className="form-control-static" > {this.state.profile.EmpId} </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3"><b>Email ID: </b></label>
                                                                        <div className="col-md-9">
                                                                            <p className="form-control-static" > {this.state.profile.EmailID} </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                   <div className="form-group">
                                                                        <label className="control-label col-md-3"><b>Designation:</b></label>
                                                                        <div className="col-md-9">
                                                                            <p className="form-control-static" > {this.state.profile.Designation} </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3"><b>Address 1:</b></label>
                                                                        <div className="col-md-9">
                                                                            <p className="form-control-static" > {this.state.profile.Address1} </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3"><b>Address 2:</b></label>
                                                                        <div className="col-md-9">
                                                                            <p className="form-control-static" > {this.state.profile.Address2} </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-actions">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="row">
                                                                        <div className="col-md-offset-3 col-md-9">
                                                                            <button type="button" onClick={ this.props.changeView.bind(null,'list') } className="btn default">Back</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                            </form>
                    </div>
                </div>
        );
    }
}

export default (ProfileViewComponent)