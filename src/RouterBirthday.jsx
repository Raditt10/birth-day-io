import React from 'react';
import { useParams } from 'react-router-dom';
import Birthday from './Birthday';

const RouterBirthday = () => {
  const { name, day, month } = useParams();
  return (
    <>
      <Birthday name={name} month={month} day={day} />
    </>
  );
};

export default RouterBirthday;
