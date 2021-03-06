import { connect } from "react-redux";
import Header from "@norih/common/components/organisms/Header";

const mapStateToProps = ({ count }) => {
    return { count };
};

const mapDispatchToProps = dispatch => {
    return { increment: () => dispatch({ type: `FETCH` }) };
};

const HeaderConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderConnect;
