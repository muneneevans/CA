import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

//import screens

import Home from "../Home";

import TopicPage from "../TopicPage";
import ArticlePage from "../ArticlePage";

const Routes = StackNavigator(
  {
    Home: {
      screen: Home
    },
    TopicPage: {
      screen: TopicPage,
      header: null
    },
    ArticlePage: {
      screen: ArticlePage,
      header: null
    }
  },
  {
    // set the header
    headerMode: "none"
  }
);

export default Routes;
