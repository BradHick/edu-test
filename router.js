import { StackNavigation } from 'react-navigation';

import Login from './view/Login';
import Events from './view/Events';
import Event from './view/Events/Component/Event';


const router = StackNavigation({
  Login: {
    Screen: Login
  },
  Events: {
    Screen: Events
  },
  Event: {
    Screen: Event
  }
});

export default router;

