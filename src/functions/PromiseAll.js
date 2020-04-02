import axios from 'axios';

async function AllPromise() {
  try {
    const response = await Promise.all([
      axios.get('http://localhost:5000/endpoint1'),
      axios.get('http://localhost:5000/endpoint2')
    ]);
    const data = await response.json();

    return data;
  } catch (error) {
    alert(error); // catches both errors
  }
}

export default AllPromise;
