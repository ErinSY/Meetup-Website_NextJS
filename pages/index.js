import React from 'react';
import MeetupList from '../components/meetups/MeetupList';


function HomePage() {
  const DUMMY_DATA = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1636636608747-d1eb57d0ba3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
      title: 'Title1',
      address: 'Korea',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1663103728395-d59d988d77c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2896&q=80',
      title: 'Title2',
      address: 'China',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1613578723854-972200002cc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'Title3',
      address: 'Singapore',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1614156793667-2b9c1cb49504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'Title4',
      address: 'USA',
    },
  ];

  return (
    
      <MeetupList meetups={DUMMY_DATA} />

  );
}

export default HomePage;
