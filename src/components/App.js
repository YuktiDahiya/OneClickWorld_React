import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks';
import { Home, Login, Signup } from '../pages';

import Loader from './Loader';
import Navbar from './Navbar'; 



const Page404 = () => {
  return <h1>404</h1>;
};

function App() {
  const auth = useAuth();

  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <Routes>
          {/* <Route exact path="/">
            <Home posts={posts} />
          </Route> */}
            <Route exact path="/" component={Home} />

          {/* <Route exact path="/login">
            <Login />
          </Route> */}
            <Route exact path="/login" component={Login} />

          {/* <Route exact path="/about">
            <About />
          </Route> */}
            

          {/* <Route exact path="/user/asdasd">
            <UserInfo />
          </Route> */}
            <Route exact path="/register" component={Signup} />

          {/* <Route>
            <Page404 />
          </Route> */}
           <Route exact path="" component={Page404} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;