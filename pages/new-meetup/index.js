import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const meepupDataHandler = (meetupData) => {};

  return (
    <div>
      <NewMeetupForm onAddMeetup={meepupDataHandler} />
    </div>
  );
}

export default NewMeetupPage;
