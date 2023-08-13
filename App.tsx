import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import CustomTabBar from './src/screens/CustomTabBar';
import { View, StyleSheet } from 'react-native';
import MovieList from './src/screens/MovieList';
const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Movies', 'TV Shows', 'Favorites'];
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <CustomTabBar tabs={tabs} activeTab={activeTab} onChangeTab={setActiveTab} />
        {activeTab === 0 && <MovieList />}
      </View>
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
