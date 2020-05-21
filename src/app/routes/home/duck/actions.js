import types from "./types.js";

const helloWorld = (value) => ({
  type: types.HELLO_WORLD,
  payload: value,
});

const changeName = (value) => ({
  type: types.CHANGE_NAME,
  payload: value,
});

const startGetDataNews = (value) => ({
  type: types.START_GET_DATA_NEWS,
  payload: value,
});
const successGetDataNews = (value) => ({
  type: types.SUCCESS_GET_DATA_NEWS,
  payload: value,
});
const failGetDataNews = (value) => ({
  type: types.FAIL_GET_DATA_NEWS,
  payload: value,
});

export default {
  helloWorld,
  changeName,
  startGetDataNews,
  successGetDataNews,
  failGetDataNews,
};
