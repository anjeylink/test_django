import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import CourseList from './CourseList';
import CourseShow from './CourseShow';
import CourseNew from './CourseNew';
import CourseEdit from './CourseEdit';

const CoursePage = () => {
    const { url } = useRouteMatch();

    return (
        <Switch>
            <Route path={url} exact component={CourseList}/>
            <Route path={`${url}/:pk/show`} component={CourseShow}/>
            <Route path={`${url}/new`} component={CourseNew}/>
            <Route path={`${url}/:pk`} component={CourseEdit}/>
        </Switch>
    );
}

export default CoursePage;
