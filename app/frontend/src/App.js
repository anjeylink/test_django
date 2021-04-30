import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CoursePage from './components/courses/CoursePage';

const App = () => (
    <Router>
        <Container>
            <Row>
                <Col>
                    <Switch>
                        <Route path="/courses" component={CoursePage} />

                        <Route path="/">
                            <div className="p-5">
                                <Button as={Link} to="/courses">Go to Courses</Button>
                            </div>
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </Container>
    </Router>
);

export default App;
