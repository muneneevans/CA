import React, { Component } from "react";
import {
  AppRegistry,
  SectionList,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
  ListView
} from "react-native";

import ArticleItem from "../ArticleItem";

const styles = StyleSheet.create({
  container: {
    // padding: 5
    paddingTop: 25
  },
  ListView: {
    elevation: 1
  },
  title: {
    fontFamily: "JosefinSans_Regular",
    fontSize: 28,
    color: "#3d3d3d"
  }
});

class ArticleList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(props.articles)
    };
  }

  _onArticleItemPress(article) {
    this.props._onItemClick(article);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.ListView}>
          <Text style={styles.title}>{this.props.title}</Text>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={rowData => (
              <TouchableHighlight
                onPress={() => {
                  this._onArticleItemPress(rowData);
                }}
              >
                <ArticleItem article={rowData} />
              </TouchableHighlight>
            )}
          />
        </View>
      </View>
    );
  }
}

export default ArticleList;
