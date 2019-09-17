import React, { Component } from 'react';
import { getAnimals, getDonations, postDonation } from '../../util/apiCalls';
import { hasError, loadingComplete, nowLoading, setAnimals, setDonations } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AnimalContainer from '../../components/AnimalContainer/AnimalContainer';
import Donations from '../../components/Donations/Donations';
import DonationForm from '../DonationForm/DonationForm';

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

  sendDonation = async (donation) => {
    const { setDonations } = this.props;
    try {
      const newDonation = await postDonation(donation);
      const donations = await getDonations();
      setDonations(donations);
    } catch {

    }

  };

  render() {
    const { rescueAnimals, donations, hasErrored, isLoading } = this.props;
    console.log('animals',  rescueAnimals)
    console.log('donations', donations);
    return (
      <main>
      { isLoading && <h3> Currently Loading </h3> }
      <DonationForm sendDonation={this.sendDonation}/>
      <section className='info-container'>
      { !isLoading && <AnimalContainer allAnimalData={rescueAnimals} />}
      { !isLoading && <Donations donations={donations} />}
      </section>
      </main>
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
