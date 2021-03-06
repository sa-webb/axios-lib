import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Asynchronously fetching three endpoints with useState hooks.
 */

function Multiple() {
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  useEffect(() => {
    let cancel = false;

    const runEffect = async () => {
      const data1 = await axios('http://localhost:5000/endpoint1/');
      if (cancel) {
        return;
      }
      setData1(data1);
      console.log(data1.data[0].values);

      const data2 = await axios('http://localhost:5000/endpoint2/');
      if (cancel) {
        return;
      }
      setData2(data2);
      console.log(data2.data[0].values);

      const data3 = await axios('http://localhost:5000/endpoint3/');
      if (cancel) {
        return;
      }
      setData3(data3);
      console.log(data3.data[0].values);
    };
    runEffect();

    // Cleanup function that will be called on
    // 1. Unmount
    // 2. Dependency Array Change
    return () => {
      cancel = true;
    };
  }, []);

  return (
    <div>
      <h1>Check console for multiple results</h1>
      <p>{data1}</p>
      <p>{data2}</p>
      <p>{data3}</p>
    </div>
  );
}

export default Multiple;
