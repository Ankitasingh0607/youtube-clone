
import axios from 'axios';

const request = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
  params: {
    key: 'AIzaSyD4PI39tDPW1F-P-mYpNwE_8IA37TOz73s',
  },
});

console.log(request);
export default request;
