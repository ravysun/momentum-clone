import React from 'react';
import { DateContainer } from './DateSyles';

function DateToday() {
  let today = new Date();

  let date =
    today.getFullYear() + '/' + today.getMonth() + '/' + today.getDate();
  // console.log(date);

  return (
    <DateContainer>
      <p>{date}</p>
    </DateContainer>
  );
}

export default DateToday;
