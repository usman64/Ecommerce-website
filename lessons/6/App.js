import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Contact from './pages/contact/contact.component';
import { auth } from './firebase/firebase.utils';

const NotFound = () => <div>ERROR 404: NOT FOUND</div>;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      //firebase gives us the last user signed in from so we don't have to manually check or the user doesn't need to re-signin bcz of firebase session persistance
      //It gives put the google user authenticated object
      //until a user signs out it gives it automatically
      //OAuth out of the box
      //This is an open subscription (no maual fetches needed as long as our app is mounted on the DOM)
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
          <Route path='/*' component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
