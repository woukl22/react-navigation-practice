import React from 'react';
import Loading from './src/Loading';
import Main from './src/navigations/Main';

export default class App extends React.Component {
  state = {
    isLoading: true,
    isLogin: false
  };
  componentDidMount(){
    setTimeout(() => {this.setState({isLoading: false})}, 3000);
  }
  render() {
    return this.state.isLoading ? <Loading /> : <Main state={this.state.isLogin} />;
  }
}