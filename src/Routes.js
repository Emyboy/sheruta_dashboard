import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router'
import Properties from './pages/Properties/Properties';
import PageNotFound from './pages/PageNotFount';
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Messages from './pages/Messages/Messages';
import SubmitProperty from './pages/SubmitProperty/SubmitProperty';
import Payment from './pages/Payment/Payment';
import { connect } from 'react-redux';
import { getAllAmenities, getAllStatus } from './redux/actions/view.action'
import Blog from './pages/Blog/Blog';
import CreateBlog from './pages/Blog/CreateBlog/CreateBlog';
import Email from './pages/Email/Email';

const mapDispatchToProps = {
    getAllAmenities,
    getAllStatus
}


export default connect(null, mapDispatchToProps)(props =>{
    useEffect(() => {
        props.getAllStatus();
        props.getAllAmenities();
    },[])
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/properties" component={Properties} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/email" component={Email} />
            <Route exact path="/blog/new" component={CreateBlog} />
            <Route exact path="/messages" component={Messages} />
            <Route exact path="/payments" component={Payment} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/submit/property" component={SubmitProperty} />
            <Route exact path="/signup/:token" component={Signup} />
            <Route component={PageNotFound} />
        </Switch>
    )
});
