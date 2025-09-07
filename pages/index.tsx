import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import {
  APP_NAME,
  FOOTER_TEXT,
  PROPERTY_CATEGORIES,
  PLACEHOLDER_IMAGE,
} from '../constants';

export default function HomePage() {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Header */}
      <header className='bg-blue-600 text-white p-4 text-center'>
        <h1 className='text-2xl font-bold'>{APP_NAME}</h1>
      </header>

      {/* Main Content */}
      <main className='flex-1 container mx-auto p-6'>
        <h2 className='text-xl font-semibold mb-4'>Property Categories</h2>
        <ul className='flex space-x-4 mb-8'>
          {PROPERTY_CATEGORIES.map((category) => (
            <li
              key={category}
              className='px-3 py-1 bg-gray-200 rounded-lg text-gray-700'
            >
              {category}
            </li>
          ))}
        </ul>

        <h2 className='text-xl font-semibold mb-4'>Featured Listings</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <Card
            title='Cozy Apartment'
            description='A modern 2-bedroom apartment in the city center.'
            imageUrl={PLACEHOLDER_IMAGE}
          >
            <Button
              label='View Details'
              onClick={() => alert('Viewing details')}
            />
          </Card>

          <Card
            title='Luxury Villa'
            description='A spacious villa with a private pool.'
            imageUrl={PLACEHOLDER_IMAGE}
          >
            <Button label='Book Now' onClick={() => alert('Booking now')} />
          </Card>

          <Card
            title='Mountain Cabin'
            description='A quiet retreat with scenic views.'
            imageUrl={PLACEHOLDER_IMAGE}
          >
            <Button
              label='Check Availability'
              onClick={() => alert('Checking availability')}
            />
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className='bg-gray-800 text-white text-center py-4'>
        <p>{FOOTER_TEXT}</p>
      </footer>
    </div>
  );
}
