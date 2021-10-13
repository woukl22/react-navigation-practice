import React from 'react';
import Loading from './src/Loading';
import Main from './src/Main';
import Authentication from './src/Authentication/Authentication';

export default class App extends React.Component {
  state = {
    isLoading: true,
    isLogin: false
  };
  componentDidMount(){
    setTimeout(() => {this.setState({isLoading: false})}, 3000);
  }
  render() {
    return this.state.isLoading ? <Loading /> : this.state.isLogin ? <Main /> : <Authentication />;
  }
}