import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';


export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
  },

  menuHeader: {
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#d6d4d4',
    backgroundColor: '#e2dfdf'
  },

  menuHeaderText: {
    fontWeight: 'bold',
  },

  menuBodyView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  itemImg: {
    borderRadius: 40,
  },

  itemInfo: {

  },

  itemValue: {
    fontWeight: 'bold',
  },

  itemDesc: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  }

});