import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import Login from './containers/Login/Login';
import Register from "./containers/Register/Register";
import HomePage from "./containers/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import ProductForm from "./containers/ProductForm/ProductForm"

class App extends Component {

  state = {
    data: 'some data'
  };

  render() {
    return (

            <BrowserRouter>
                <Layout>
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/addProduct' exact component={ProductForm} />
                    <Route path='/register' exact component={Register} />
                    <Route path='/login' exact component={Login} />
                </Switch>
                </Layout>
            </BrowserRouter>

    );
  }
}

export default App;
