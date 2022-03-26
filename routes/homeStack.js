import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Profile from '../screens/profile';
import Start from '../screens/start';
import Login from '../screens/login';
import SignUp from '../screens/signup';

const screens = {
    Start: {
        screen: Start,
        // to hide the header can implement this:
        navigationOptions: {
            header:null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header:null
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            header:null
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            header:null
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            header:null
        }
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);