import { connect } from "react-redux";
import { AddtoCard, RemovetoCard } from "../sevvice/actions/action";
import Home from "../component/home";
const mapStateToProps = (state) => ({
  data: state.cardItems,
});
const mapDispatchToProps = (dispatch) => ({
  AddtoCardHandle: (data) => dispatch(AddtoCard(data)),
  RemovetoCardHandle: (data) => dispatch(RemovetoCard(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
