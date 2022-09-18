import React from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function Detail(props) {
  return (
    <MeetupDetail
      image='https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80'
      title='Testpage'
      address='Korea'
      description='this is Korea'
      data={props}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [{ params: { meetupId: '1' } }, { params: { meetupId: '2' } }],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          'https://images.unsplash.com/photo-1636636608747-d1eb57d0ba3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
        title: 'Title1',
        address: 'Korea',
        description: 'this is just test',
      },
    },
  };
}

export default Detail;
