import React, { Component, PropTypes } from 'react';
import {
  Button
} from 'react-native-elements'

import {
  Navigator
} from 'react-native';
import TabBar from './TabBar';
export default class Main extends Component {
    render() {
        return (
        <Navigator
        style={{flex: 1}}
        initialRoute={{component:MainScreen}}
        renderScene={(route, navigator) => {
            if(route.component){
              return React.createElement(route.component, {navigator});
                    }
                } 
            }
        />
        );
    }
}
class MainScreen extends Component{
    next(){
        this.props.navigator.push({
           component: TabBar     
        });
    }
    render() {
        return (
            <Button
                raised
                icon={{name: 'cached'}}
                title='RAISED WITH ICON' 
                onPress = {this.next.bind(this)}
                />
        );
    }
}