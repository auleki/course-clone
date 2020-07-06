import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursesPage'
import { Route, Switch, Redirect } from 'react-router-dom';
// import CourseList from './CourseList';
import PageNotFound from './PageNotFound';
import ManageCoursePage from './ManageCoursePage';

const App = () => {
       
        const route = window.location.pathname;
    
    return (
        <div className="container-fluid">
            <Header />
        
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/courses" component={CoursesPage} /> 
                <Route path="/course/:slug" component={ManageCoursePage} /> 
                <Route path="/course" component={ManageCoursePage} /> 
                <Redirect from="/about-old" to="/about"/> 
                <Route component={PageNotFound} />

            </Switch>

        </div>
    )
}

export default App;