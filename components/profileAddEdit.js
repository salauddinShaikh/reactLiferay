//import React, {Component} from 'react';
class ProfileAddEditComponent extends React.Component {
    constructor(props) {
        super(props); 
        this.state = { 
            formData : {
                  "ID": 0,
                  "FName": '',
                  "LName": '',
                  "Gender": '',
                  "ContactNo" : '',
                  "EmailID": '',
                  "Department" : '',
                  "Designation":'',
                  "Address1":'',
                  "Address2":''
            },
            departments:[],
            designations:[],
        };
        this.handleFNameChange = this.handleFNameChange.bind(this);
        this.handleLNameChange = this.handleLNameChange.bind(this);
        this.handleEmailIDChange = this.handleEmailIDChange.bind(this);
        this.handleAddress1Change = this.handleAddress1Change.bind(this);
        this.handleAddress2Change = this.handleAddress2Change.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
        this.handleDesignationChange = this.handleDesignationChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    handleFNameChange(e) {
        var form = this.state.formData;
        form.FName = e.target.value;
        this.setState({ formData : form });
    }
    handleLNameChange(e) {
        var form = this.state.formData;
        form.LName = e.target.value;
        this.setState({ formData : form });
    }
    handleEmailIDChange(e) {
        var form = this.state.formData;
        form.EmailID = e.target.value;
        this.setState({ formData : form });
    }
    handleAddress1Change(e) {
        var form = this.state.formData;
        form.Address1 = e.target.value;
        this.setState({ formData : form });
    }
    handleAddress2Change(e) {
        var form = this.state.formData;
        form.Address2 = e.target.value;
        this.setState({ formData : form });
    }
    handleGenderChange(e) {
        var form = this.state.formData;
        form.Gender = e.target.value;
        this.setState({ formData : form });
    }
    handleDepartmentChange(e) {
        var form = this.state.formData;
        form.Department = e.target.value;
        this.setState({ formData : form });
    }
    handleDesignationChange(e) {
        var form = this.state.formData;
        form.Designation = e.target.value;
        this.setState({ formData : form });
    }
    componentDidMount(){
      var context=this;
      if(this.props.params){
        Liferay.Service('/eternus-portlet.employee/GetProfile',{ employeeId: this.props.params}, function(obj) {
             context.setState({ formData:obj})
        });
      }
      Liferay.Service('/eternus-portlet.department/GetDepartments',function(obj) {
        context.setState({ departments:obj})
      });
      Liferay.Service('/eternus-portlet.designation/GetDesignations', function(obj) {
        context.setState({ designations:obj})
      });
    }
    componentWillReceiveProps(props){
     var context=this;
     if(props.params){
        Liferay.Service('/eternus-portlet.employee/GetProfile',{ employeeId: props.params}, function(obj) {
             context.setState({ formData:obj})
        });
      }
    }
    onSave(){
        this.props.changeView('list') 
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
                                                                            <input type="text" className="form-control"  value={this.state.formData.FName} onChange={this.handleFNameChange}/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group ">
                                                                        <label className="control-label col-md-3">Last Name</label>
                                                                        <div className="col-md-9">
                                                                           <input type="text" className="form-control"  value={this.state.formData.LName} onChange={this.handleLNameChange}/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3">Gender</label>
                                                                        <div className="col-md-9">
                                                                            <select className="form-control" value={this.state.formData.Gender} onChange={this.handleGenderChange}>
                                                                                <option value="Male">Male</option>
                                                                                <option value="Female">Female</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3">Department</label>
                                                                        <div className="col-md-9">
                                                                            <select className="form-control" value={this.state.formData.Department} onChange={this.handleDepartmentChange}>
                                                                                <option>Select</option>
                                                                                                    {
                    this.state.departments.map((row, index) => {
                      return (
                        <option key={index} value={row.Name}> {row.Name}</option>
                      );
                    })
                  }                                  
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3">Email ID</label>
                                                                        <div className="col-md-9">
                                                                            <input type="text" className="form-control"  value={this.state.formData.EmailID} onChange={this.handleEmailIDChange}/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                   <div className="form-group">
                                                                        <label className="control-label col-md-3">Designation</label>
                                                                        <div className="col-md-9">
                                                                            <select className="form-control" value={this.state.formData.Designation} onChange={this.handleDesignationChange}>
                                                                                  <option>Select</option>
                                                                                   {
                                                this.state.designations.map((row, index) => {
                      return (
                        <option key={index} value={row.Name}> {row.Name}</option>
                      );
                    })
                  }         
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
                                                                            <input type="text" className="form-control" value={this.state.formData.Address1} onChange={this.handleAddress1Change}/> </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="control-label col-md-3">Address 2</label>
                                                                        <div className="col-md-9">
                                                                            <input type="text" className="form-control"  value={this.state.formData.Address2} onChange={this.handleAddress2Change}/> </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-actions">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="row">
                                                                        <div className="col-md-offset-3 col-md-9">
                                                                            <button type="submit" className="btn green" onClick={this.onSave.bind()}>Submit</button>
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