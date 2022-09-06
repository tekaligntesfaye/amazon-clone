import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  // baseURL: 'https://us-central1-aug-bc35b.cloudfunctions.net/api',
  // baseURL:'http://localhost:5001/teke-8405f/us-central1/api' //was Mine
  baseURL:'https://us-central1-teke-8405f.cloudfunctions.net/api'
});

export default instance;