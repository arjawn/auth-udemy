// import libraries\

import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

// make a Component
const Header = (props) => {
  return(
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create ({
  textStyle: {
    fontSize: 40,
  },
  viewStyle: {
    // flex: .3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
    paddingTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    backgroundColor: '#F8F8F8'
  },
});

// make component available to other parts of the app
export { Header };
