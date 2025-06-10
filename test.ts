import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10,         // Number of virtual users
  duration: '30s', // Duration of test
};

export default function () {
  let res = http.get('http://74.179.220.54'); // Your webapp-service IP
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
