import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

export class DonationForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      donation: ''
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  handleDonation = e => {
    e.preventDefault();
    const { name, donation } = this.state;
    const { sendDonation, donations } = this.props;
    const id = donations.length + 1;
    const donationToSend = {
      id,
      name,
      donation
    }
    sendDonation(donationToSend);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ name: '', donation: '' })
  }

  render() {
    const { sendDonation } = this.props;
    return (
      <nav className="form-nav">
          <form className='donation-form'>
            <h3 className='form-banner'>Animal Rescue</h3>
            <input className='form-input' type='text' name="name" onChange={this.handleChange} value={this.state.name} />
            <input className='form-input' type='number' name="donation" onChange={this.handleChange} value={this.state.donation} />
            <button type="submit" className='form-btn' onClick={this.handleDonation}> Donate! </button>
          </form>
        </nav>
    )
  }
}

export const mapStateToProps = state => ({
  donations: state.donations
});

export default connect(mapStateToProps)(DonationForm);
