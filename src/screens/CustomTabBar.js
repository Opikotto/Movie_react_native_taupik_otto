import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomTabBar = ({ tabs, activeTab, onChangeTab }) => {
  return (
    <View style={styles.tabBarContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tabItem,
            { backgroundColor: activeTab === index ? '#2196F3' : '#f5f5f5' },
          ]}
          onPress={() => onChangeTab(index)}
        >
          <Text style={{ color: activeTab === index ? '#f5f5f5' : '#000' }}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tabItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 0,
    backgroundColor:'#f5f5f5',
  },
});

export default CustomTabBar;
