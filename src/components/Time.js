import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

import { Welcome, TimeStamp, Greeting } from './TimeStyles';

function Time() {
  let today = new Date();

  let greeting = () => {
    if (today.getHours() >= 5 && today.getHours() < 11) {
      return 'Good Morning, Ravy.';
    } else if (today.getHours() >= 11 && today.getHours() < 17) {
      return 'Good Afternoon, Ravy.';
    } else if (today.getHours() >= 17 && today.getHours() < 24) {
      return 'Good Evening, Ravy.';
    } else {
      return 'What are you doing at this hour?';
    }
  };

  let say_greeting = greeting();

  return (
    <Welcome>
      <TimeStamp>
        <Moment format="LT"></Moment>
      </TimeStamp>
      <Greeting>{say_greeting}</Greeting>
    </Welcome>
  );
}

export default Time;
