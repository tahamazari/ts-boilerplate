import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';
import { StoreState } from "../../reducers";
import Third from "../../components/Pages/Third";

const mapStateToProps = (state: StoreState) => {
    return {
        third: state.third
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Third);