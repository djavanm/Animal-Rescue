import React from 'react';
import AnimalCard from '../AnimalCard/AnimalCard';


export const AnimalContainer = ({ allAnimalData }) => {
  const animalCards = allAnimalData.map(animalData => {
    return <AnimalCard data={animalData} key={animalData.id} />
  });


  return (
    <section className='animal-container'>
    {animalCards}
    </section>
  )
}

export default AnimalContainer;
