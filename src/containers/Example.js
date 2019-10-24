import { addNumber, decreaseNumber } from '../actions/Example/ExampleActionCreator'
import { connect } from 'react-redux'
import Example from '../components/Example'

const mapStateToProps = (state) => ({
    example: state.example
});

const mapDispatchToProps = (dispatch) => ({
    addNumber: (number) => 
        dispatch(addNumber(number)),
    decreseNumber: (number) => 
        dispatch(decreaseNumber(number))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Example);