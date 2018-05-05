import React, { Component } from "react";

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  ListView,
  ScrollView,
  TouchableHighlight
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import GridView from "react-native-super-grid";

import ArticleList from "../../Components/ArticleList";
export default class TopicPage extends Component {
  _onBackPressed = () => {
    this.props.navigation.goBack();
  };

  _onOrderitemClick = article => {
    this.props.navigation.navigate("ArticlePage", { article: article });
  };

  render() {
    const { params } = this.props.navigation.state;
    const topic = params
      ? params.topic
      : {
          title: "No topic select",
          description: "please go to the home page and select a topic",
          image:
            "https://images.pexels.com/photos/753869/pexels-photo-753869.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          articles: []
        };

    let {
      container,
      header,
      titleContainer,
      textContainer,
      title,
      secondaryTitle,
      icon,
      iconContainer,
      bannerContainer,
      content,
      bannerImage,
      bannerText,
      contentHeaderContainer,
      contentHeader,
      card,
      cardText,
      secondaryText
    } = styles;

    return (
      <ScrollView style={container}>
        <View style={header}>
          <View style={bannerContainer}>
            <TouchableOpacity
              onPress={() => {
                console.log("click");
              }}
              style={{ flex: 1 }}
            >
              <ImageBackground
                style={bannerImage}
                source={{
                  uri: topic.image
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={content}>
          <Text style={bannerText}>{topic.title}</Text>
          <Text style={secondaryText}>{topic.description}</Text>

          <ArticleList
            title={"articles"}
            articles={topic.articles}
            _onItemClick={this._onOrderitemClick.bind(this)}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff"
  },
  header: {
    flex: 2,
    flexDirection: "column",
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
    elevation: 3
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    maxHeight: 50
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  title: {
    flex: 5,
    fontFamily: "JosefinSans_Bold",
    fontSize: 24,

    color: "#3d3d3d"
  },
  iconContainer: {
    paddingTop: 5
  },
  icon: {
    color: "#3d3d3d"
  },
  bannerContainer: {
    flex: 2,
    backgroundColor: "#ce2727",
    elevation: 2,
    borderRadius: 10
  },
  bannerImage: {
    flex: 1,
    // aspectRatio: 1.1,
    flexDirection: "row",
    alignItems: "flex-end",
    minHeight: 150,
    elevation: 3
  },
  bannerText: {
    fontFamily: "JosefinSans_SemiBold",
    fontSize: 36,
    color: "black"
  },
  secondaryText: {
    fontFamily: "JosefinSans_Regular"
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 5,
    backgroundColor: "#ffffff"
  },
  contentHeaderContainer: {
    padding: 5
  },
  contentHeader: {
    fontSize: 20,
    fontFamily: "JosefinSans_Regular",
    color: "#3d3d3d"
  },
  card: {
    flex: 1,
    // aspectRatio: 1.1,
    flexDirection: "row",
    alignItems: "flex-end",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    overflow: "hidden",
    minHeight: 150,
    elevation: 3
  },
  cardText: {
    fontFamily: "JosefinSans_Regular",
    fontSize: 24,
    color: "#ffffff"
  },

  gridView: {
    paddingTop: 15,
    flex: 1
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150
  },
  itemName: {
    fontWeight: "600",
    fontSize: 16,
    color: "#fff"
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff"
  }
});
