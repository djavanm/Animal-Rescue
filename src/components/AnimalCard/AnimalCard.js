import React from 'react';

export const AnimalCard = ({ data }) => {
  const { name, species, img, description} = data;

  return (
    <article className='animal-card'>
    <img src={img} className='animal-image'/>
    <p> { name } </p>
    <p> { species } </p>
    <p> { description } </p>
    </article>
  )
}

export default AnimalCard;
