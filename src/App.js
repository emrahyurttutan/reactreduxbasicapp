import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "./actions/user-actions";
class App extends Component {
  onUpdateUser() {
    this.props.onUpdateUser("ahmet");
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <label>{this.props.user}</label>
        <button onClick={this.onUpdateUser.bind(this)}>User</button>
      </div>
    );
  }
}
//propsları maplemeye yarar
const mapStateToProps = state => {
  return state;
};

//dispatchleri maplemeye yarar
const mapDispatchToProps = {
  onUpdateUser: updateUser
};
/**
 * connect redux componentleri birbirine bağlamaya yarar.
 * connet(mapStateToProps,mapDispatchToProps)(component)
 * -- mapDispatchToProps etmezsek;
 * ** this.props.dispatch(tanimlananfonksiyon("params")); bu şekilde kullanmak gerekiyor edilirse  this.props.tanimlananfonksiyon("params");
 */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
