//import React from 'react';
import ProfileListComponent from './profileList';
import ProfileAddEditComponent from './profileAddEdit';
import ProfileViewComponent from './profileView';

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
        showList : true,
        view : 'list',
        profileList:[]
    }
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount(){
    this.setState({
          profileList: [
                {
                  "ID":1001,
                  "FName": 'Aman',
                  "LName": 'Ray',
                  "Gender": 'Male',
                  "ContactNo" : '987456235',
                  "EmailID": 'test@gmail.com',
                  "Department" : 'EBS',
                  "Designation":'Test',
                  "Address1":' ',
                  "Address2":' '
                },{
                  "ID":1002,
                  "FName": 'Sachin',
                  "LName": 'Sarse',
                  "Gender": 'Male',
                  "ContactNo" : '765456235',
                  "EmailID": 'sachin@gmail.com',
                  "Department" : 'EBS',
                  "Designation":'Test',
                  "Address1":' ',
                  "Address2":' '
                },{
                  "ID":1004,
                  "FName": 'salauddin',
                  "LName": 'Shaikh',
                  "Gender": 'Male',
                  "ContactNo" : '777456235',
                  "EmailID": 'test@gmail.com',
                  "Department" : 'EBS',
                  "Designation":'Test',
                  "Address1":'',
                  "Address2":''
                },{
                  "ID":1005,
                  "FName": 'Amol',
                  "LName": 'Patil',
                  "Gender": 'Male',
                  "ContactNo" : '2331256235',
                  "EmailID": 'test@gmail.com',
                  "Department" : 'EBS',
                  "Designation":'Test',
                  "Address1":' ',
                  "Address2":' '
                }
            ]})
  }
  changeView(view) {
     this.setState({ view: view });
  }

  render() {
    var renderView;
    switch(this.state.view) {
        case 'list': renderView = (
                     <ProfileListComponent
                        changeView={this.changeView}
                        profileList={this.state.profileList} /> 
                     )
                     break;

        case 'addEdit': renderView = (
                            <ProfileAddEditComponent
                             changeView={this.changeView}/>
                         )
                        break;

        case 'viewOnly': renderView = (
                          <ProfileViewComponent
                            changeView={this.changeView}/>
                         )
                        break;

    }

    return (
      <div>
        { renderView }
      </div>
    );
  }
}

export default ProfileContainer