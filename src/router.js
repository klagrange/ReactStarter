import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './routes/Home'
import Modal from 'components/Modal'

export default () => (
        <Router>
            <Modal isOpen={false} />
            <Route path="/" component={Home} />
        </Router>
)