import { addNumber, decreaseNumber, getExampleRequest, getTextRequest, getTextAdd,createUser} from '../actions/Example/ExampleActionCreator'
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
        dispatch(getExampleRequest()),
    getTextRequest: () =>
        dispatch(getTextRequest()),
    getTextAdd: (text) =>
        dispatch(getTextAdd(text)),
    createUser: () =>
        dispatch(createUser())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Example);
