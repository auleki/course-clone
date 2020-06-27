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
    // const getPage = () => {    
    //     const route = window.location.pathname;
    //     if (route === "/about") return <AboutPage/>;
    //     if (route === "/courses") return <CoursesPage />;
    //     return <HomePage / >
    // }

    return (
        <div className="container-fluid">
            <Header />
            {/* { getPage() } */}
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/courses" component={CoursesPage} /> 
                {/* <Redirect from="/about-old" to="/courses"/>  */}
                <Route component={PageNotFound} />

            </Switch>

        </div>
    )
}

export default App;