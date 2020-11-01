import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "./components/pages/dashboard";
import NotFound from "./components/notFound";
import RolesPermissions from './components/pages/roles_permissions';
import Footer from "./components/common/footer";
import TakeMeUp from "./components/common/takeMeUp";
import Users from "./components/pages/users";
import MyCalendar from "./components/pages/callender";
import Feedback from "./components/pages/feedback";
import Statistics from "./components/pages/statistics";
import Profile from "./components/pages/profile";
import Login from "./components/pages/login";
import AddFamilyForm from "./components/common/forms/addFamilyForm";
import AddMenu from "./components/common/forms/AddMenu";
import Scanning from "./components/pages/scanning";

//import "./App.css";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/rolespermissions" component={RolesPermissions} />
          <Route path="/users" component={Users} />
          <Route path="/calender" component={MyCalendar} />
          <Route path="/addmenu" component={AddMenu} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/stats" component={Statistics} />
          <Route path="/scanning" component={Scanning} />
          <Route path="/profile" component={Profile} />
          <Route path="/add-family" component={AddFamilyForm} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/dashboard" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
      <TakeMeUp />
      <Footer />
    </React.Fragment>
  );
}

export default App;
