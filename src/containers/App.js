import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import * as pageActions from '../actions/PageActions';
import * as userActions from '../actions/UserActions';

class App extends Component {
  render() {
      const { user, page } = this.props;
      const { getPhotos } = this.props.pageActions;
      const { handleLogin } = this.props.userActions;

      return <div>
          <Page year={page.year} photos={page.photos} fetching={page.fetching} getPhotos={getPhotos}/>
          <User name={user.name} handleLogin={handleLogin} error={user.error} />
      </div>
  }
}

function mapStateToProps (state) {
    return {
        user: state.user,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);