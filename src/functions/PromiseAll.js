import axios from 'axios';

async function AllPromise() {
  try {
    const response = await Promise.all([
      axios.get('http://localhost:5000/us-growth-curve'),
      axios.get('http://localhost:5000/data')
    ]);
    const data = await response.json();

    return data;
  } catch (error) {
    alert(error); // catches both errors
  }
}

export default AllPromise;
