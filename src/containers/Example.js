import { addNumber, decreaseNumber, getExampleRequest } from '../actions/Example/ActionCreator'
import { connect } from 'react-redux'
import Example from '../components/Example'

const mapStateToProps = (state) => ({
    example: state.example
});

const mapDispatchToProps = (dispatch) => ({
    addNumber: (number) =>
        dispatch(addNumber(number)),
    decreseNumber: (number) =>
        dispatch(decreaseNumber(number)),
    getExampleRequest: () =>
        dispatch(getExampleRequest())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Example);