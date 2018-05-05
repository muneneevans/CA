import React, { Component } from "react";

import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Feather";
export default class ArticlePage extends Component {
  _onBackPressed = () => {
    this.props.navigation.goBack();
  };

  render() {
    // const { code, time } = this.props.order;

    const { params } = this.props.navigation.state;
    const article = params ? params.article : null;
    let {
      container,
      header,
      content,
      menu,
      titleContainer,
      textContainer,
      title,
      secondaryTitle,
      icon
    } = styles;

    return (
      <View style={container}>
        <View
          style={[
            header
          ]}
        >
          <View style={menu}>
            <TouchableOpacity onPress={this._onBackPressed.bind(this)}>
              <View>
                <Icon name="arrow-left" style={icon} size={30} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={titleContainer}>
            <View style={textContainer}>
              <Text style={title}>{article.title}</Text>
              {/* <Text style={secondaryTitle}>{article.time}</Text> */}
            </View>
          </View>
        </View>
        <View style={content}>{}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  header: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#3d3d3d",
    justifyContent: "space-between",
    padding: 5,
    elevation: 3,
    maxHeight: 125,
    backgroundColor: "#f5f5f5"
  },
  menu: { flex: 1 },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end"
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000000"
  },
  secondaryTitle: {
    fontSize: 24,
    color: "#ffffff"
  },
  content: {
    flex: 6
  },
  icon: {
    color: "#3d3d3d"
  }
});
