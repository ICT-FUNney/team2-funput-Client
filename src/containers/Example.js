import { addExample } from '../actions/Example/ExampleActionCreator'
import { connect } from 'react-redux'
import Example from '../components/Example'

const mapStateToProps = (state) => ({
    number: state.example.number 
});

const mapDispatchToProps = (dispatch) => ({
    example: (text) => 
        dispatch(addExample(text))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Example);