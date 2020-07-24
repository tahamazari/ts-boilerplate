import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';
import { StoreState } from "../../reducers";
import Second from "../../components/Pages/Second";

const mapStateToProps = (state: StoreState) => {
    return {
        todos: state.todos,
        second: state.second
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Second);