import React from 'react';
import axios from 'axios';

async function go() {
  try {
    const confirmedPromise = axios('http://localhost:5000/us-confirmed-growth-curve/');
    const recoveredPromise = axios('http://localhost:5000/us-recovered-growth-curve/');
    const deathsPromise = axios('http://localhost:5000/us-deaths-growth-curve/');
    // await all three promises to come back and destructure the result into their own variables
    const [confirmed, recovered, deaths] = await Promise.all([
      confirmedPromise,
      recoveredPromise,
      deathsPromise
    ]);
    console.log(confirmed.data[0].values, recovered.data[0].values, deaths.data[0].values); // cool, {...}, {....}
  } catch (e) {
    console.error(e); // 💩
  }
}

const App = () => {
  go();
  return <h1>Check Console for results</h1>;
};

export default App;
