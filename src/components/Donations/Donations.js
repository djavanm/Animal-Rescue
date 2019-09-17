import React from 'react';

const Donations = ({ donations }) => {
  const donationCards = donations.map((donation, index) => {
    return <li className='donation' key={index}>{donation.name} recently donated ${donation.donation}</li>
  });

  return (
    <section>
    <h3 className='donations-banner'>All Donations</h3>
    <ul>
      {donationCards}
    </ul>
    </section>
  )
};

export default Donations;
