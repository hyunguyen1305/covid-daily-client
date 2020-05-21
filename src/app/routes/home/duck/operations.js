import actions from "./actions";

const helloWorld = actions.helloWorld;
const changeName = actions.changeName;
const startGetDataNewsAction = actions.startGetDataNews;
const successGetDataNewsAction = actions.successGetDataNews;
const failGetDataNewsAction = actions.failGetDataNews;

const getData = () => {
  const expTime = localStorage.getItem("expTime");
  const fromNow = new Date().getTime();
  if (expTime && fromNow - JSON.parse(expTime) > 0) {
    return (dispatch) => {
      dispatch(startGetDataNewsAction());
      return fetch("https://covid-daily-server.herokuapp.com/api/data-news")
        .then((res) => res.json())
        .then((json) => {
          dispatch(successGetDataNewsAction(json));
        })
        .catch((err) => {
          dispatch(failGetDataNewsAction());
        });
    };
  }
  const data = localStorage.getItem("data_have");
  if (data) {
    return (dispatch) => {
      dispatch(successGetDataNewsAction(JSON.parse(data)));
    };
  } else {
    return (dispatch) => {
      dispatch(startGetDataNewsAction());
      return fetch("https://covid-daily-server.herokuapp.com/api/data-news")
        .then((res) => res.json())
        .then((json) => {
          dispatch(successGetDataNewsAction(json));
        })
        .catch((err) => {
          dispatch(failGetDataNewsAction());
        });
    };
  }
};

export default {
  helloWorld,
  changeName,
  getData,
};
