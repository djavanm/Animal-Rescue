import React, { Component } from 'react';
import { getAnimals, getDonations } from '../../util/apiCalls';
import { hasError, loadingComplete, nowLoading, setAnimals, setDonations } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export class App extends Component {
  async componentDidMount() {
    const { hasError, loadingComplete, nowLoading, setAnimals, setDonations } = this.props;
    try {
      const animals = await getAnimals();
      const donations = await getDonations();
      setAnimals(animals);
      setDonations(donations);
      loadingComplete();
    } catch {
      // hasError('Error');
    }
  }

  render() {
    const { rescueAnimals, donations, hasErrored, isLoading } = this.props;
    console.log('animals',  rescueAnimals)
    console.log('donations', donations);
    return (
      <div>
        hi
      </div>
    )
  }
};

export const mapStateToProps = state => ({
  rescueAnimals: state.rescueAnimals,
  donations: state.donations,
  hasErrored: state.hasErrored,
  isLoading: state.isLoading
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ hasError, loadingComplete, nowLoading, setAnimals, setDonations }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
