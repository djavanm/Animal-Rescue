import { getAnimals, getDonations, postDonation } from './apiCalls';


describe('apiCalls', () => {

  beforeEach(() => {
    const mockAnimal = {
      id: 1,
      species: 'tiger, rawr',
      img: 'a place on the internet',
      description: 'really cool'
    }

    const mockDonation = {
      id: 1,
      name: 'Travis',
      donation: 100000000
    }

    window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            results: [mockAnimal]
          })
        });
      });
    });

  it('should return an array of animals', () => {
    getAnimals();
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/rescue-animals');
  });

  it('get donations should return an array of donations', () => {
    window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            results: [mockDonation]
          })
        });
      });
      getDonations();
      expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/donations')
    });
});
