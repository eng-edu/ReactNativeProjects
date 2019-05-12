import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import axios from "axios";

export default class App extends React.Component {
  
  renderList() {
    axios
      .get("https://randomuser.me/api/?nat=br&results=5")
      .then(res => {

        const  { results } = res.data
 
        const names = results.map(people =>{
          console.log(people.name.first)
        })

      })
      .catch(err => {})
  }

  render() {
    return (
      <View>
        <Header title="Pessoas" />
        {this.renderList()}
      </View>
    );
  }
}
