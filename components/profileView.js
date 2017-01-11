//import React, {Component} from 'react';

class ProfileViewComponent extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {};
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
                                                                            <p className="form-control-static" > Sachin </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group ">
                                                                        <label className="control-label col-md-3"><b>Last Name:</b></label>
                                                                        <div className="col-md-9">
                                                                            <p className="form-control-static" > Sarse </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3"><b>Gender:</b></label>
                                                                        <div className="col-md-9">
                                                                             <p className="form-control-static" > Male </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3"><b>Employee ID:</b></label>
                                                                        <div className="col-md-9">
                                                                            <p className="form-control-static" > 100265 </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3"><b>Email ID: </b></label>
                                                                        <div className="col-md-9">
                                                                            <p className="form-control-static" > Sarse@eternus.com </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                   <div className="form-group">
                                                                        <label className="control-label col-md-3"><b>Designation:</b></label>
                                                                        <div className="col-md-9">
                                                                            <p className="form-control-static" > Sr. System Executive </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3"><b>Address 1:</b></label>
                                                                        <div className="col-md-9">
                                                                            <p className="form-control-static" >  </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3"><b>Address 2:</b></label>
                                                                        <div className="col-md-9">
                                                                            <p className="form-control-static" >  </p>
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