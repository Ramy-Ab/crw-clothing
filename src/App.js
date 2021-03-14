import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch,Link} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';

const HatsPage = () => (
<div>
  <h1>HATS PAGE</h1>
</div>
);  



function App() {
  return (
    <div >
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      </Switch>

    </div>
  );
}

export default App;
