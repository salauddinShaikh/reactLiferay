//import React, {Component} from 'react';
class ProfileAddEditComponent extends React.Component {
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
                            <span className="caption-subject font-red sbold uppercase">Profile Edit</span>
                        </div>
                        <div className="actions">
                        </div>
                    </div>
                    <div className="portlet-body">
                        <form action="#" className="form-horizontal">
                                                        <div className="form-body">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3">First Name</label>
                                                                        <div className="col-md-9">
                                                                            <input type="text" className="form-control" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group ">
                                                                        <label className="control-label col-md-3">Last Name</label>
                                                                        <div className="col-md-9">
                                                                           <input type="text" className="form-control" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3">Gender</label>
                                                                        <div className="col-md-9">
                                                                            <select className="form-control">
                                                                                <option value="">Male</option>
                                                                                <option value="">Female</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3">Employee ID</label>
                                                                        <div className="col-md-9">
                                                                            <input type="text" className="form-control"/> </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3">Email ID</label>
                                                                        <div className="col-md-9">
                                                                            <input type="text" className="form-control"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                   <div className="form-group">
                                                                        <label className="control-label col-md-3">Designation</label>
                                                                        <div className="col-md-9">
                                                                            <select className="form-control">
                                                                                <option>System Executive</option>
                                                                                <option>Sr. System Executive</option>
                                                                                <option>Manager</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3">Address 1</label>
                                                                        <div className="col-md-9">
                                                                            <input type="text" className="form-control" /> </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3">Address 2</label>
                                                                        <div className="col-md-9">
                                                                            <input type="text" className="form-control" /> </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-actions">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="row">
                                                                        <div className="col-md-offset-3 col-md-9">
                                                                            <button type="submit" className="btn green">Submit</button>
                                                                            <button type="button" onClick={ this.props.changeView.bind(null,'list') } className="btn default">Cancel</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6"> </div>
                                                            </div>
                                                        </div>
                                                    </form>
                    </div>
                </div>
        );
    }
}

export default (ProfileAddEditComponent)