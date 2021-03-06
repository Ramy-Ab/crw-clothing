import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch,Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import React from 'react';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import  {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import ChekoutPage from './pages/checkout/checkout.component';

const HatsPage = () => (
<div>
  <h1>HATS PAGE</h1>
</div>
);  



class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
              setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            });
        });
      }
      setCurrentUser(userAuth);
    })
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div >
        <Header />
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/chekout' component={ChekoutPage}/>
        <Route exact path='/signin' render ={()=>this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)}/>
        </Switch>
  
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user =>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
