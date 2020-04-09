import React from 'react';
import { Navbar, DateNow, Days, DateLeft, Month } from './style';
import moment from 'moment';

export default () => {
  const time = new Date();
  const date = moment(time).format('DD');
  const days = moment(time).format('dddd');
  const month = moment(time).format('MMMM');
  const years = moment(time).format('YYYY');
  return (
    <Navbar>
      <DateLeft>
        <DateNow>{date}</DateNow>
        <div><Month>{month}</Month><span>{years}</span></div>
      </DateLeft>
      <Days>{days}</Days>
    </Navbar>
  );
};
