import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MenScreen from '../pages/MenScreen';
import WomenScreen from '../pages/WomenScreen';
import SearchScreen from '../pages/SearchScreen';
import Navbar from '../components/Navbar';
import CharacterScreen from '../pages/CharacterScreen';
const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/mens' component={MenScreen} />
        <Route exact path='/womens' component={WomenScreen} />
        <Route exact path='/search' component={SearchScreen} />
        <Route exact path='/character/:id' component={CharacterScreen} />
        <Redirect to='/mens' />
      </Switch>
    </>
  );
};

export default AppRouter;
