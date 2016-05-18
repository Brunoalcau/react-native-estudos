import React, {Component} from 'react-native';
import {connect} from 'react-redux';
import Drawer  from 'react-native-drawer';
import ListItens from '../component';
import {
  AppRegistry,
  Text,
  ListView,
  View,
  StyleSheet
} from 'react-native';

// const ds = new  ListView.DataSource({
//   rowHasChanged: (r1, r2)=> r1 !== r2
// });

const App = () => {
  console.log('ListItens:'+ListItens);
  return (
    <Drawer
      type="overlay"
      tapToClose={true}
      panCloseMask={0.2}
      openDrawerOffset={0.2}
      closedDrawerOffset={-3}
      content={<View></View>}
      openDrawerOffset={100}
      tweenHandler={Drawer.tweenPresets.parallax}
    >
      <View>
        // <ListItens />
      </View>
    </Drawer>

  );
};
const drawerStyles = StyleSheet.create({
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
})
export default connect(state => ({}))(App);
