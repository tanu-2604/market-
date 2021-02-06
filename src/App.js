
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Signup from './components/login/Signup';

import Cart from './components/cart/Cart';
import { Provider } from 'react-redux';

/** Store */
import store from './store';
import ProductList from './components/product/ProductList';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <Header/>
        <Route path="/" exact component={ProductList}/>        
        <Route path="/login" exact component={Login} />
        <Route path="/register"exact component={Signup}/>
        <Route path="/carts" exact component={Cart}/>
        </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
