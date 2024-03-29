export const getAnimals = async () => {
  const url = 'http://localhost:3001/api/v1/rescue-animals';
  const response = await fetch(url);
  const animals = await response.json();
  return animals;

}

export const getDonations = async () => {
  const url = 'http://localhost:3001/api/v1/donations';
  const response = await fetch(url);
  const donations = await response.json();
  return donations;
}

export const postDonation = async (donation) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(donation),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const url = `http://localhost:3001/api/v1/donations/`
  const response = await fetch(url, options);
  const donationStatus = await response.json();
  return donationStatus;
};
