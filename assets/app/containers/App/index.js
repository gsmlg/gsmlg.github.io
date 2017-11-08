/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import BlogPage from 'containers/BlogPage/Loadable';
import BlogContentPage from 'containers/BlogContentPage/Loadable';
import ChineseChess from 'containers/ChineseChess/Loadable';
import KeynotePage from 'containers/KeynotePage/Loadable';
import Games from 'containers/Games/Loadable';
import Networks from 'containers/Networks/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/blogs" component={BlogPage} />
        <Route exact path="/blogs/:blog_name" component={BlogContentPage} />
        <Route exact path="/keynotes" component={KeynotePage} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/networks" component={Networks} />
        <Route exact path="/games/chinese-chess" component={ChineseChess} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
