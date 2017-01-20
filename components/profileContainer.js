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
        profileList:[],
        profile:{},
        selectedRecord:''
    }
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
  }
  changeView(view,params) {
    if(typeof(params)==="number"){
      this.setState({selectedRecord:params})
    }
    this.setState({ view: view });
  }

  render() {
    var renderView;
    switch(this.state.view) {
        case 'list': renderView = (
                     <ProfileListComponent
                        changeView={this.changeView} /> 
                     )
                     break;

        case 'add': renderView = (
                            <ProfileAddEditComponent
                             changeView={this.changeView}/>
                         )
                        break;
        case 'edit': renderView = (
                            <ProfileAddEditComponent
                             changeView={this.changeView}
                              params={this.state.selectedRecord}/>
                         )
                        break;

        case 'viewOnly': renderView = (
                          <ProfileViewComponent
                            changeView={this.changeView}
                            params={this.state.selectedRecord}/>
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