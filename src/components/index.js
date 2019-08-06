import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './index.scss';
import Header from './header';
import Error from './error';
import Body from './body';
import AllCource from './body/propertise/all_cource';
import AllProjects from './body/propertise/all_projects';
import Login from './users/login';
import Register from './users/register';
import BlogPost from './blog';
import PostDetails from './blog/post_details';
import Contact from './contact';
import Footer from './footer';



const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={Body} exact />
        <Route path='/all-cources' component={AllCource} />
        <Route path='/all-projects' component={AllProjects} />
        <Route path='/log-in' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/blog-posts' component={BlogPost} />
        <Route path='/blog-post-details' component={PostDetails} />
        <Route path='/contact' component={Contact} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}


export default App;