import React, { Component, PropTypes } from 'react';
import {
  Button
} from 'react-native-elements'
import { Tabs, Tab, Icon } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';

import FirstTab from './FirstTab';
import SecondTab from './SecondTab';

export default class TabView extends Component {
    render() {
        return (
            <TabBar />
        );
    }
}

class TabBar extends Component {
    constructor(props){
        super(props);
        this.state = {
        selectedTab : "First Tab"    
        }
    }
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab == 'First Tab'}
                    title="First Tab"
                    onPress={() => this.setState({ selectedTab: 'First Tab' })}>
                <FirstTab />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab == 'SecondTab'}
                    title="SecondTab"
                    onPress={() => this.setState({ selectedTab: 'SecondTab' })}>
                    <SecondTab />
                </TabNavigator.Item>
            </TabNavigator>
        )
    }

    
}