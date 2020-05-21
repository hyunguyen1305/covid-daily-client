import types from "./types";

const INITIAL_STATE = {
  helloWorld: "Hello World",
  loading: false,
  success: false,
  fail: false,
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.HELLO_WORLD: {
      return {
        ...state,
      };
    }
    case types.CHANGE_NAME: {
      const name = action.payload;
      return {
        ...state,
        helloWorld: name,
      };
    }
    case types.START_GET_DATA_NEWS: {
      const date = new Date();
      const expTime = date.setTime(date.getTime() + 360 * 360 * 1000);
      localStorage.setItem("expTime", JSON.stringify(expTime));
      return {
        ...state,
        loading: true,
      };
    }
    case types.SUCCESS_GET_DATA_NEWS: {
      const data = action.payload;
      localStorage.setItem("data_have", JSON.stringify(data));
      return {
        ...state,
        loading: false,
        success: true,
        data,
      };
    }
    case types.FAIL_GET_DATA_NEWS: {
      return {
        ...state,
        fail: true,
      };
    }
    default:
      return state;
  }
};

export default homeReducer;
