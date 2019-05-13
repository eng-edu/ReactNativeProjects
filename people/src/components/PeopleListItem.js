import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { capitalizeFistLatter } from '../util'




const PeopleListItem = props => {
  const { people } = props;
  const { title, first, last } = people.name;
  return (
    <View style={styles.line}>
      <Text style={styles.lineText}>
        {`${
            capitalizeFistLatter(title)
        } ${
            capitalizeFistLatter(first)
        } ${
            capitalizeFistLatter(last)}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#BBB",
    alignItems: "center",
    flexDirection: "row"
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 10
  }
});

export default PeopleListItem;
