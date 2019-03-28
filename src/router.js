import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './routes/Home'

export default () => (
        <Router>
            <Route path="/" component={Home} />
        </Router>
)
