//import React from 'react';
import ProfileListComponent from './profileList';
import ProfileAddEditComponent from './profileAddEdit';
import ProfileViewComponent from './profileView';

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
        showList : true,
        view : 'list'
    }
    this.changeView = this.changeView.bind(this);
  }

  changeView(view) {
     this.setState({ view: view });
  }

  render() {
    var renderView;
    switch(this.state.view) {
        case 'list': renderView = (
                     <ProfileListComponent
                        changeView={this.changeView}/> 
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