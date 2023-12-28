import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import FlashMessage from 'react-native-flash-message';
import Home from './Pages/Home/Home';
import auth from '@react-native-firebase/auth';
import Profile from './Pages/Profile/Profile';
import Edit from './Pages/Edit';
import MovieDetail from './Pages/MovieDetail/MovieDetail';
import TVDetail from './Pages/TVDetail';
import CrewDetail from './Pages/CrewDetail';

const Stack = createNativeStackNavigator();

function App() {
  const [userSession, setUserSession] = React.useState();
  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                header: Boolean,
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                header: Boolean,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                header: Boolean,
              }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                header: Boolean,
              }}
            />
            <Stack.Screen
              name="Edit"
              component={Edit}
              options={{
                header: Boolean,
              }}
            />
            <Stack.Screen
              name="MovieDetail"
              component={MovieDetail}
              options={{
                header: Boolean,
              }}
            />
            <Stack.Screen
              name="TVDetail"
              component={TVDetail}
              options={{
                header: Boolean,
              }}
            />
             <Stack.Screen
              name="CrewDetail"
              component={CrewDetail}
              options={{
                header: Boolean,
              }}
            />
          </>
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default App;
