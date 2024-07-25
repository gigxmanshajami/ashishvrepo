// App.js or main entry point

import SearchPage from "./(searchpage)";

// const Stack = createStackNavigator();
const App = () => {
  return (
    // <NavigationContainer>
    // <Stack.Navigator initialRouteName="SearchPage" headerMode="none">
    //   <Stack.Screen name="SearchPage" component={SearchPage} options={{headerShown:false}} />
    //   <Stack.Screen name="LifestylePage" component={LifestylePage} options={{headerShown:false}} />
    //   <Stack.Screen name="Beauty" component={BeautyPage} options={{ headerShown: false }} />
    //   <Stack.Screen name="Profile" component={ProfilePage} options={{ headerShown: false }} />
    //   <Stack.Screen name="Production" component={ProductionPage} options={{headerShown:false}}/>
    //   <Stack.Screen name="ReelPage" component={ReelPage} options={{headerShown:false}}/>
    // </Stack.Navigator>
    // </NavigationContainer>
    <SearchPage />
  );
};

export default App;



