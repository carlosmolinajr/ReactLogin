import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Redirect } from 'react-router-dom';

import AuthMiddleware from 'modules/middlewares/AuthMiddleware';

class PrivateRoute extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    isLoggedIn: PropTypes.func.isRequired,
    isError: PropTypes.bool.isRequired
  };

  static defaultProps = {
    isAuthenticated: false
  };

  constructor(props) {
    super(props);
    if (!props.isAuthenticated) {
      setTimeout(() => {
        props.isLoggedIn();
      }, 5);
    }
  }

  componentWillMount() {
    if (this.props.isAuthenticated) {
      console.log('authenticated');
    } else {
      console.log('not authenticated');
    }
  }
  componentWillUnmount() {}

  render() {
    const { isAuthenticated, component, isError, ...rest } = this.props;
    if (isAuthenticated !== null) {
      return (
        <Route
          {...rest}
          render={props => (
            isAuthenticated ? (
              React.createElement(component, props)
            ) : (
              <Redirect
                to={{
                  pathname: isError ? '/login' : '/welcome',
                  state: { from: props.location }
                }}
              />
            )
          )}
        />
      );
    } return null;
  }

}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isError: state.auth.isError
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    isLoggedIn: () => AuthMiddleware.isLoggedIn()
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
