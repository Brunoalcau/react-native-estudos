import {StatusBar, Platform} from 'react-native';
import {createReducer} from '../utils';

const menu = {
  menuToggle(state,bool){
    if(Platform.os === 'ios'){
      StatusBar.setHidden(boll,'slide');
    }
    return state;
  }
};

export default createReducer({},{
  "SETTINGS_MENU": (state,{bool}) => menu.menuToggle(state, bool)
});
