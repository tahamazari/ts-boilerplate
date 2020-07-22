import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';
import { StoreState } from "../../reducers";
import First from "../../components/Pages/First";

const mapStateToProps = (state: StoreState) => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(First);