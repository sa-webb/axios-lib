import React from 'react';
import axios from 'axios';

async function go() {
  try {
    const anyPromise1 = axios('http://localhost:5000/endpoint1/');
    const anyPromise2 = axios('http://localhost:5000/endpoint2/');
    const anyPromise3 = axios('http://localhost:5000/endpoint3/');
    // await all three promises to come back and destructure the result into their own variables
    const [result1, result2, result3] = await Promise.all([
      anyPromise1,
      anyPromise2,
      anyPromise3
    ]);
    console.log(result1.data[0].values, result2.data[0].values, result3.data[0].values); // cool, {...}, {....}
  } catch (e) {
    console.error(e); // 💩
  }
}

const App = () => {
  go();
  return <h1>Check Console for results</h1>;
};

export default App;
