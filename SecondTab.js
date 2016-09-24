import React, { Component, PropTypes } from 'react';
import {
  Button
} from 'react-native-elements'

export default class Second extends Component {
    render(){
        return(
            <SecondTab />
        );
    }
}

class SecondTab extends Component{
    render() {
        return (
            <Button
                raised
                icon={{name: 'cached'}}
                title='Second Tab' 
                />
        );
    }
}