import { workerData, parentPort } from "node:worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n--) + nthFibonacci(n - 2);

const sendResult = () => {
  const result = nthFibonacci(workerData);
  parentPort.postMessage(result);
};

sendResult();