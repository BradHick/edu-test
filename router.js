import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './view/Login';
import Events from './view/Events';
import Event from './view/Events/Component/Event';


const Router = createStackNavigator({
  Login: {
    screen: Login
  },
  Events: {
    screen: Events
  },
  Event: {
    screen: Event
  }
}, {
  initialRouteName: 'Event'
});

export default createAppContainer(Router);

