import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as repositoryActions } from '../../../redux/Repository/actions';

import AddTeamToRepository from './layout';

class AddTeamToRepositoryContainer extends Component {
  handleSubmit = values => {
    this.props.createRepo(values);
  };

  render() {
    return <AddTeamToRepository onSubmit={this.handleSubmit} repoCreated={this.props.repoCreated} />;
  }
}

AddTeamToRepositoryContainer.propTypes = {
  createRepo: PropTypes.func.isRequired,
  repoCreated: PropTypes.bool
};

AddTeamToRepositoryContainer.defaultProps = {
  repoCreated: false
};

const mapStateToProps = state => ({
  // obtener loading, lo cambia el action de registration
  // isError: state.repository.isError,
  repoCreated: state.repository.repoCreated
});

const mapDispatchToProps = dispatch => ({
  // funciones que llaman acciones
  createRepo: values => {
    console.log('aaaaa', values);
    const techs = [];
    Object.keys(TECHNOLOGIES).forEach(tech => {
      values[tech] && techs.push(tech);
    });
    /* eslint-disable no-param-reassign */
    values = { ...values, techs };
    return dispatch(repositoryActions.createRepository(values));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTeamToRepositoryContainer);
