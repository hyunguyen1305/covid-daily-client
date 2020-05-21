import { connect } from "react-redux";
import HomePageComponent from "./HomePageComponent";
import { homeOperations } from "./duck";

const mapStateToProps = (state) => {
  const { loading, success, fail, data } = state.home;
  return { loading, success, fail, data };
};

const mapDispatchToProps = (dispatch) => {
  const getData = () => dispatch(homeOperations.getData());
  return {
    getData,
  };
};

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent);

export default HomePageContainer;
