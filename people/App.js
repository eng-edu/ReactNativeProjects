import PeoplePage from "./src/pages/PeoplePage";
import { createStackNavigator, createAppContainer } from "react-navigation";
import PeopleDetailPage from "./src/pages/PeopleDetailPage";

const StackNavigator = createStackNavigator(
  {
    Main: {
      screen: PeoplePage
    },
    'PeopleDetail':{
      screen: PeopleDetailPage
    }
  },
  {
    defaultNavigationOptions: {
      title: "Pessoas",
      headerStyle: {
        backgroundColor: "#779edd",
        borderBottomWidth:1,
        borderBottomColor: '#c5c5c5'
      },
      headerTitleStyle: {
        color:'#fff',
        fontSize: 30,
        flexGrow: 1,
        textAlign: 'center'


      }
    }
  }
);

const appContainer = createAppContainer(StackNavigator);

export default appContainer;
