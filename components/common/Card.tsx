import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price }) => {
  return (
    <div className='border rounded-lg shadow-md overflow-hidden max-w-sm'>
      <img src={imageUrl} alt={title} className='w-full h-48 object-cover' />
      <div className='p-4'>
        <h2 className='text-lg font-bold'>{title}</h2>
        <p className='text-gray-600'>{description}</p>
        {price && <p className='mt-2 text-blue-600 font-semibold'>${price}</p>}
      </div>
    </div>
  );
};

export default Card;
