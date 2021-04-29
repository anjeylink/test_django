import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CoursePage from './components/courses/CoursePage';

const App = () => (
    <Router>
        <Container>
            <Row>
                <Col>
                    <Switch>
                        <Route path="/courses" component={CoursePage} />
                    </Switch>
                </Col>
            </Row>
        </Container>
    </Router>
);

export default App;
