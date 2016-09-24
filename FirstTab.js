import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';
import {
  Button
} from 'react-native-elements'

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

export default class First extends Component {
    render(){
        return(
            <FirstTab />
        );
    }
}

class FirstTab extends Component{
    render() {
        return (
    <ScrollableTabView
      style={{marginTop: 20, }}
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar />}
    >
      <Text tabLabel='Tab #1'>My</Text>
      <Text tabLabel='Tab #2'>favorite</Text>
      <Text tabLabel='Tab #3'>project</Text>
      <Text tabLabel='Tab #4'>favorite</Text>
      <Text tabLabel='Tab #5'>project</Text>
    </ScrollableTabView>
    
        );
    }
}