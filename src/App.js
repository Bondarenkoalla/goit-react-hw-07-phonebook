import "./App.css";
import { connect } from "react-redux";
import Form from "./Components/Form/Form";
import React, { Component } from "react";
import Finder from "./Components/Finder/Finder";
import FormList from "./Components/FormList/FormList";
import contactsOperations from "./redux/operations";
import contactsSelectors from "./redux/selectors"

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {    
    return (
      <div className="App">
        {this.props.error && <h1>Oops something went wrong</h1>}
        <Form />
        {this.props.isLoadingContacts && <h1>Loading...</h1>}
        <Finder />
        <FormList />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
  error: contactsSelectors.getError(state)
});
const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

