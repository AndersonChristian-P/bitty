import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Features from "./components/Pages/Features/Features";
import Pricing from "./components/Pages/Pricing/Pricing";
import Solutions from "./components/Pages/Solutions/Solutions";
import Support from "./components/Pages/Support/Support";
import WhyBitty from "./components/Pages/WhyBitty/WhyBitty";

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path="/features" component={Features} />
    <Route path="/pricing" component={Pricing} />
    <Route path="/solutions" component={Solutions} />
    <Route path="/support" component={Support} />
    <Route path="/whyBitty" component={WhyBitty} />
  </Switch>
)