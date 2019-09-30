import { addNumber } from '../actions/Example/ExampleActionCreator'
import { connect } from 'react-redux'
import Example from '../components/Example'

const mapStateToProps = (state) => ({
    example: state.example
});

const mapDispatchToProps = (dispatch) => ({
    appNumber: (text) => 
        dispatch(addNumber(text))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Example);