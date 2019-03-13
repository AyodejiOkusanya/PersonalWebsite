import React from 'react'
import AboutMe from './AboutMe';
import Projects from './Projects';
import Blogs from './Blogs';
import { Route, Switch } from "react-router-dom";
import Navbar2 from "./Navbar2";




class App extends React.Component {
  render () {
    return (
      <div >
      <Navbar2 />
      <Switch>
        <Route exact path="/" component={() => <AboutMe />} />
        <Route
          path="/projects"
          component={() => <Projects />}
        />
        <Route
          path="/blogs"
          component={() => <Blogs />}
        />
      </Switch>
    </div>
    )
  }
}
export default App
