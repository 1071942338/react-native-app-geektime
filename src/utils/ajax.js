import ajax from 'axios';
import server from './server';

function ajaxGet({url, data, resolve, reject}) {
  ajax
    .get(url, data)
    .then((result) => {
      resolve(result);
    })
    .catch((error) => {
      reject(error);
    });
}

function ajaxPost({url, data, resolve, reject}) {
  ajax
    .post(url, data)
    .then((result) => {
      resolve(result);
    })
    .catch((error) => {
      reject(error);
    });
}

export function getListData() {
  const url = `${server.host}/list`;
  return new Promise((resolve, reject) => {
    ajaxPost({url, resolve, reject});
  });
}
