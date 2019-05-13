import React from "react";
import { View } from "react-native";
import axios from "axios";
import Header from '../components/Header';
import PeopleList from '../components/PeopleList';

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peoples: []
    };
  }

  render() {
    return (
      <View>
        <Header title="Pessoas" />
        <PeopleList peoples = {this.state.peoples}/>
      </View>
    );
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?nat=br&results=20")
      .then(res => {
        const { results } = res.data;
        this.setState({
          peoples: results
        });
      })
      .catch(err => {console.log(err)});
  }

}
