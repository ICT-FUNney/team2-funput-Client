import { addNumber, decreaseNumber,addWords } from '../actions/Example/ExampleActionCreator'
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
    addWords: (words) =>
      dispatch(addWords(words))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Example);
